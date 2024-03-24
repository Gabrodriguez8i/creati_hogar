import Stripe from "stripe";
import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server';
import protectedRoute from "~/server/protected/protectedRoute";

export default defineEventHandler(async (event) => {
    await protectedRoute(event); // verificar si el cliente se encuentra auth
    const body = await readBody(event); // obtener el body de la peticion
    console.log("se intenta hacer una reservation: ", body)
    // const { request } = event;

  // Obtener la información del usuario
    

    // // Obtener el objeto de contexto de Supabase
    // const $supabase = request.$supabase;
  
    // // Obtener la información del usuario autenticado
    const client = await serverSupabaseUser(event);

    // console.log("usuario: ",client );

    const supabase = await serverSupabaseClient(event);
    // obtengo la propiedad a pagar
    const { data } = await supabase.from('services').select('id, name, priceBase, mainImage, slug').eq('id', body.id).single();
    // console.log('data supabase: ', data, " body: ", body.id,  " name: ", data.slug);
    // console.log("event: ", event);
    const config = useRuntimeConfig() // para obtener la variables de entorno
    const stripe = new Stripe(config.STRIPE_SECRET_KEY); // inicializo STRIPE con mi api key

    if(data){
        const session = await stripe.checkout.sessions.create({
            success_url: `${config.APP_URL}pay/success`, // data que tiene la url de pago exitoso
            line_items:[ // lista de items cobrados
                {
                    price_data:{
                        currency: "usd", // para indicar que se va a pagar en dolares
                        product_data:{ // para especificar el producto
                            name: data.slug,
                            images: ['https://res.cloudinary.com/dkte5phor/image/upload/v1708991590' + data.mainImage]
                        },
                        unit_amount: formatearParaStripe( util_calcularCostoReserva(body.date_start,body.date_end, data.priceBase) ), // ejemplo de monto 1000 son 10$, 2000 son 20$
                    },
                    quantity: 1 // cantidad de productos que se estaria llevando
                }
            ],
            metadata:{
                productId: data.id,
                priceBase: data.priceBase,
                date_start: body.date_start,
                date_end: body.date_end,
            },
            mode: "payment" // modo de pago
        })

        // creo la reservacion
        // console.log("sessio: ", session);
        const { error } = await supabase.from('reservations').insert([
            {
                product_id: data.id,
                product_name: data.name,
                client_id: client?.id,
                client_email: client?.email,
                date_start: body.date_start,
                date_end: body.date_end,
                amount_total: util_calcularCostoReserva(body.date_start,body.date_end, data.priceBase)
            }
        ]
           
        );
        if(error){
            console.log("No se crea reservation, ", error);
        }else{
            console.log("SIIII se crea reservation");

        }

        return { session: session };
    }


});

const util_calcularCostoReserva = (fechaInicio: string, fechaFin: string, priceBase = 0 ): number => {
    let date1 = new Date(fechaInicio);
    let date2 = new Date(fechaFin);

    // Calculating the time difference
    // of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();
   
    // Calculating the no. of days between
    // two dates
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
   
    // Difference_In_Days + first day 
    let daysSum = Difference_In_Days + 1;
  
    let multiDay = daysSum  * priceBase 
    // return result
    return  multiDay;
}

function formatearParaStripe(numero: number) {
    // Multiplicar por 100 para convertir el valor en centavos
    let valorCentavos = numero * 100;
    // Convertir el valor a string
    let valorStr = valorCentavos.toString();
    // Agregar ceros a la izquierda si es necesario
    while (valorStr.length < 3) {
        valorStr = '0' + valorStr;
    }
    return parseInt(valorStr); // Convertir de nuevo a entero
}