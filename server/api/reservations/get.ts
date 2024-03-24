import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server';
import protectedRoute from "~/server/protected/protectedRoute";

export default defineEventHandler(async (event)=>{
    console.log("se intenta obtener reservations: get reservattion...")
    await protectedRoute(event); // verificar si el cliente se encuentra auth
    const client = await serverSupabaseUser(event); // obtener la info del user auth
    if(client){
        const supabase = await serverSupabaseClient(event); // iniciar supabase
        const {data, error} = await supabase.from('reservations').select('id, product_name, created_at, amount_total, date_start, date_end, state, details_user_paid, product_id').eq('client_id', client.id);
        if(error){
            console.log("error: ", error)
            return {
                data: [],
                error: error
            }
        }
        return {
            data: data,
            error:error
        }
    }

})