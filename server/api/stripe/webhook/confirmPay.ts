import Stripe from "stripe";
import { serverSupabaseClient } from '#supabase/server'
export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)

    console.log("event: ", event);
    const config = useRuntimeConfig() // para obtener la variables de entorno
    const stripe = new Stripe(config.STRIPE_SECRET_KEY); // inicializo STRIPE con mi api key
     // obtener el body de la peticion
    // endpoint secrete del webhook
    const secret = config.WEBHOOK_SECRET;
    // la firma de stripe - stripe asegura que el que estará ejecutando la funcion constructEvent sea nuestra app al pasarle el stripeSignature
    const headers = event.node.req.headers;

  const body = await readRawBody(event);
  const sig = headers["stripe-signature"];
  let hookEvent: Stripe.Event;

  try {
    hookEvent = stripe.webhooks.constructEvent(
      body as string,
      sig as string,
      secret as string
    );
  } catch (err) {
    throw createError({ statusCode: 400, message: (err as Error).message });
  }
  console.log("event --------------------: ", hookEvent);
  switch (hookEvent.type) {
    case "checkout.session.completed":
        const checkoutSessionCompleted = hookEvent.data.object;
        console.log("checkout.session.completed, checkoutSessionCompleted: ", checkoutSessionCompleted);

        // const { data,error } = await supabase.from('reservations')
        // .upsert({
        //   product_id: 22,
        // })
        // .single()

        const { error } = await supabase.from('reservations').update({state: 1, details_user_paid: checkoutSessionCompleted.customer_details, payment_intent: checkoutSessionCompleted.payment_intent   }).eq('checkout_session_id', checkoutSessionCompleted.id);
        
        if(error){

          console.log("error es true", error)
        }else{
          console.log("se actualizaaa")
        }

    // console.log('data: ---- : ', data, "  error: ", error);
      break;
    case "payment_intent.succeeded":
      const intentSucceeded = hookEvent.data.object;
      console.log("payment_intent.succeeded", intentSucceeded);
      break;
    case "charge.succeeded":
      const chargeSucceeded = hookEvent.data.object;
      console.log("charge was successful!", chargeSucceeded);
      break;
    //   // ... handle other event types
    default:
      console.log(`Unhandled event type ${hookEvent.type}`);
  }

    // return {status: 200}
    return setResponseStatus(event, 200)

});

