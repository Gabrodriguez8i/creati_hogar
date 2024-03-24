import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
console.log();
    if (!user) {
      console.log("user no logueado");
    // throw createError({
    //   statusCode: 401,
    //   message: 'Unauthorized',
    // });
  }
});