import Stripe from "stripe";
export default defineEventHandler(async (event) => {
    console.log("event: ", event);
    const body = await readBody(event); // obtener el body de la peticion
    const config = useRuntimeConfig() // para obtener la variables de entorno
    const stripe = new Stripe(config.STRIPE_SECRET_KEY); // inicializo STRIPE con mi api key

    const session = await stripe.checkout.sessions.create({
        success_url: `${config.APP_URL}/pay/success`, // data que tiene la url de pago exitoso
        line_items:[ // lista de items cobrados
            {
                price_data:{
                    currency: "usd", // para indicar que se va a pagar en dolares
                    product_data:{ // para especificar el producto
                        name: "property1",
                        images: ["https://I.imgur.com/EHyR2np.png"]
                    },
                    unit_amount:2000, // ejemplo de monto 1000 son 10$, 2000 son 20$
                },
                quantity: 1 // cantidad de productos que se estaria llevando
            }
        ],
        mode: "payment" // modo de pago
    })

console.log("session: ", session);
return { session: session };

});