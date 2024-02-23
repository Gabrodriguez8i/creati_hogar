<template>
    <main class="auth">

        <div class="item active">
            <img src="/images/BannerHero/banner5.jpg">
        </div>
        <div class="auth_btnBx">

            <NuxtLink to="/" class="cta">
                <span>Ver propiedades</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </NuxtLink>

        </div>
        <div class="box">
            <div class="inner-box">
            <div class="forms-wrap">
                <form @submit.prevent="login" autocomplete="off" class="sign-in-form">
                <div class="logo">
                    <!-- <img src="./img/logo.png" alt="easyclass" /> -->
                    <h4>Creati Hogar</h4>
                </div>

                <div class="heading">
                    <h2>Bienvenido</h2>
                    <h6>¿Aún no estás registrado?</h6>
                    <a href="#" class="toggle">Registrate</a>
                </div>

                <div class="actual-form">
    
                    <div class="input-wrap">
                    <BaseInput v-model="dataAuth.email" type="email" label="Email" />
                    </div>

                    <div class="input-wrap">
                    <BaseInput v-model="dataAuth.password" type="password" label="Contraseña" minlength="6" autocomplete="off"/>
                    </div>

                    <input type="submit" value="Enviar" class="sign-btn" />

                    <p class="text">
                        ¿Olvidó su contraseña o sus datos de inicio de sesión? 
                    <a href="#" style="color: white;">Obtén ayuda</a> para iniciar sesión.
                    </p>
                </div>
                </form>

                <form @submit.prevent="signUp" autocomplete="off" class="sign-up-form">
                <div class="logo">
                    <!-- <img src="/images/icons/favicon.ico" alt="easyclass" /> -->
                    <h4>Creati Hogar</h4>
                </div>

                <div class="heading">
                    <h2>Registrate</h2>
                    <h6>¿Ya tienes una cuenta?</h6>
                    <a href="#" class="toggle">Iniciar sesión</a>
                </div>

                <div class="actual-form">
                    <div class="input-wrap">
                    <BaseInput v-model="dataAuth.name" type="text" label="Nombre" autocomplete="off" minlength="2"/>
                    </div>

                    <div class="input-wrap">
                    <BaseInput v-model="dataAuth.email" type="email" label="Email" autocomplete="off" minlength="2"/>
                    </div>

                    <div class="input-wrap">
                        <BaseInput v-model="dataAuth.password" type="password" label="Contraseña" minlength="6" autocomplete="off"/>
                    </div>

                    <input type="submit" value="Enviar" class="sign-btn" />

                    <p class="text">
                        acepto los 
                    <a href="#" style="color: white;">Términos de servicios</a> y
                    <a href="#" style="color: white;">la Política de privacidad.</a>
                    </p>
                </div>
                </form>
            </div>

            <div class="carousel">
                <div class="images-wrapper">
                <img src="/images/ImagesAuth/image1.png" class="image img-1 show" alt="" />
                <img src="/images/ImagesAuth/image2.png" class="image img-2" alt="" />
                <img src="/images/ImagesAuth/image3.png" class="image img-3" alt="" />
                </div>

                <div class="text-slider">
                <div class="text-wrap">
                    <div class="text-group">
                    <h2>Elegancia y confort excepcionales.</h2>
                    <h2>Estilo refinado en tranquilidad.</h2>
                    <h2>Experiencias memorables para todos.</h2>
                    </div>
                </div>

                <div class="bullets">
                    <span class="active" data-value="1"></span>
                    <span data-value="2"></span>
                    <span data-value="3"></span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </main>

</template>

<script setup>
import BaseInput from '~/components/form/BaseInput.vue';
definePageMeta({
  layout: false,
});
onMounted(() => {
    useHead({
      script:[
        {
          src: "/jsDOM/AuthDOM.js",
          async: true
        }
      ]
    })
});

const supabase = useSupabaseClient();
const dataAuth = reactive({
    name: "",
    email: "",
    password: ""
});


const signUp = async ()=>{
    const {data, error} = await supabase.auth.signUp({
        name: dataAuth.name,
        email: dataAuth.email,
        password: dataAuth.password
    })
    error ? console.log("error: en signUp") : navigateTo('/confirm');
}


const login = async ()=>{
    const {data, error} = await supabase.auth.signInWithPassword({
        email: dataAuth.email,
        password: dataAuth.password
    });
    error ? alert("error en el login") : navigateTo('/');
}
</script>

<style lang="scss" scoped>
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

h4{
    color: $darkColor-color;
}

h2{
    color: $darkColor-colorDark
}

/* background start */
.item{
    position: absolute;
    inset: 0 0 0 0;
    overflow: hidden;
    opacity: 0;
    transition: .5s;
}
.item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient( to top, #000 37%, #0000004a );
}
.item.active{
    opacity: 1;
    z-index: 1;
}

/* background end */


.auth {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  /* background-color: #ff8c6b; */
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.auth_btnBx{
    margin: 35px auto 80px;
    z-index: 2;
}
.box {
  position: relative;
  width: 100%;
  max-width: 1020px;
  height: 640px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(128, 128, 128, 0.3411764706);
  border-radius: 3.3em;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
  z-index: 2;

}

.inner-box {
  position: absolute;
  width: calc(100% - 4.1em);
  height: calc(100% - 4.1em);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.forms-wrap {
  position: absolute;
  height: 100%;
  width: 45%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transition: 0.8s ease-in-out;
}

form {
  max-width: 260px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;
}

form.sign-up-form {
  opacity: 0;
  pointer-events: none;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 27px;
  margin-right: 0.3em;
}

.logo h4 {
  font-size: 1.1em;
  margin-top: -9px;
  letter-spacing: -0.5px;
}

.heading h2 {
  font-size: 2.1em;
  font-weight: 600;
  color: $darkColor-color;
}

.heading h6 {
  color: #bababa;
  font-weight: 400;
  font-size: 0.75em;
  display: inline;
}

.toggle {
  color: $darkColor-color;
  text-decoration: none;
  font-size: 0.75em;
  font-weight: 500;
  transition: 0.3s;
  margin: 0 5px;
}

.toggle:hover {
  color: $darkColor-color-hover;
}

.input-wrap {
  position: relative;
  height: 37px;
  margin-bottom: 2em;
}

.input-field {
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #bbb;
  padding: 0;
  font-size: 0.95em;
  transition: 0.4s;
}

label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.95em;
  color: #bbb;
  pointer-events: none;
  transition: 0.4s;
}

.input-field.active {
  border-bottom-color: #151111;
}

.input-field.active + label {
  font-size: 0.75em;
  top: -2px;
}

.sign-btn {
  display: inline-block;
  width: 100%;
  height: 43px;
  background-color: $darkColor-colorDark;
  color: $darkColor-color;
  border: none;
  cursor: pointer;
  border-radius: 0.8em;
  font-size: 0.8em;
  margin-bottom: 2em;
  transition: 0.3s;
}

.sign-btn:hover {
  background-color: $darkColor-color;
  color: $darkColor-colorDark;
  
}

.text {
  color: #bbb;
  font-size: 0.7em;
}

.text a {
  color: #bbb;
  transition: 0.3s;
}

.text a:hover {
  color: #8371fd;
}

main.sign-up-mode form.sign-in-form {
  opacity: 0;
  pointer-events: none;
}

main.sign-up-mode form.sign-up-form {
  opacity: 1;
  pointer-events: all;
}

main.sign-up-mode .forms-wrap {
  left: 55%;
}

main.sign-up-mode .carousel {
  left: 0%;
}

.carousel {
  position: absolute;
  height: 100%;
  width: 55%;
  left: 45%;
  top: 0;
  background-color: #ffe0d2;
  border-radius: 2em;
  display: grid;
  grid-template-rows: auto 1fr;
  padding-bottom: 2em;
  overflow: hidden;
  transition: 0.8s ease-in-out;
}

// .carousel ::after{
//     content: '';
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     background-image: linear-gradient( to bottom, #00000000 2%, #00000017 );
//     z-index: 0;
// }

.images-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.image {
  width: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  opacity: 0;
  transition: opacity 0.3s, transform 0.5s;
}

.img-1 {
  transform: translate(0, -50px);
}

.img-2 {
  transform: scale(0.4, 0.5);
}

.img-3 {
  transform: scale(0.3) rotate(-20deg);
}

.image.show {
  opacity: 1;
  transform: none;
}

.text-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text-wrap {
  max-height: 2.2em;
  overflow: hidden;
  margin-bottom: 2.5em;
}

.text-group {
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: translateY(0);
  transition: 0.5s;
}

.text-group h2 {
  line-height: 1.5em;
  font-weight: 600;
  font-size: 1.6em;
  z-index: 4;

}

.bullets {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;

}

.bullets span {
  display: block;
  width: 0.5em;
  height: 0.5em;
  background-color: $darkColor-colorDark;
  margin: 0 0.25em;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.bullets span.active {
  width: 1.1em;
  background-color: $darkColor-colorDark;
  border-radius: 1em;
}

@media (max-width: 850px) {
  .box {
    height: auto;
    max-width: 550px;
    overflow: hidden;
  }

  .inner-box {
    position: static;
    transform: none;
    width: revert;
    height: revert;
    padding: 2em;
  }

  .forms-wrap {
    position: revert;
    width: 100%;
    height: auto;
  }

  form {
    max-width: revert;
    padding: 1.5em 2.5em 2em;
    transition: transform 0.8s ease-in-out, opacity 0.45s linear;
  }

  .heading {
    margin: 2em 0;
  }

  form.sign-up-form {
    transform: translateX(100%);
  }

  main.sign-up-mode form.sign-in-form {
    transform: translateX(-100%);
  }

  main.sign-up-mode form.sign-up-form {
    transform: translateX(0%);
  }

  .carousel {
    position: revert;
    height: auto;
    width: 100%;
    padding: 3em 2em;
    display: flex;
  }

  .images-wrapper {
    display: none;
  }

  .text-slider {
    width: 100%;
  }
}

@media (max-width: 530px) {
  main {
    padding: 1em;
  }

  .box {
    border-radius: 2em;
  }

  .inner-box {
    padding: 1em;
  }

  .carousel {
    padding: 1.5em 1em;
    border-radius: 1.6em;
  }

  .text-wrap {
    margin-bottom: 1em;
  }

  .text-group h2 {
    font-size: 1.2em;
  }

  form {
    padding: 1em 2em 1.5em;
  }
}



/* button start */
.cta {
  position: relative;
  margin: auto;
  padding: 14px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: $darkColor-colorDark;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  // font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: $darkColor-color;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: $darkColor-color;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: $darkColor-colorDark;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}

/* button end */
</style>

