<template>
        <div class="hamburger" @click="toggle = !toggle">
          <input class="checkbox" type="checkbox" :checked="toggle" id="toggleMenu" aria-label="view options menu"/>
            <svg fill="none" viewBox="0 0 50 50" height="30" width="30">
                <path
                class="lineTop line"
                stroke-linecap="round"
                stroke-width="3"
                stroke="white"
                d="M6 11L44 11"
                ></path>
                <path
                stroke-linecap="round"
                stroke-width="3"
                stroke="white"
                d="M6 24H43"
                class="lineMid line"
                ></path>
                <path
                stroke-linecap="round"
                stroke-width="3"
                stroke="white"
                d="M6 37H43"
                class="lineBottom line"
                ></path>
            </svg>
          <label for="toggleMenu" class="hamburger_labelVisuallyHidden"></label>

        </div>

        <div class="main_container_header_subMenu_list" :style="toggle ? 'display:flex' : 'display:none'">
            <span v-if="!user" @click="toggle = false" class="main_container_header_subMenu_list_btn">
                <ClientOnly>
                <Icon name="lets-icons:sign-in-circle" size="24px" class="main_container_header_subMenu_list_btn_icon" />
                </ClientOnly>

                <NuxtLink to="/auth">Autenticarse</NuxtLink>
                
            </span>
            <span v-else @click="logout()" class="main_container_header_subMenu_list_btn">
                <ClientOnly>
                <Icon name="lets-icons:sign-out-circle" size="24px" class="main_container_header_subMenu_list_btn_icon"  />
                </ClientOnly>  
                Salir
            </span>
            <span v-if="user" @click="toggle = false"  class="main_container_header_subMenu_list_btn">
                <ClientOnly>
                <Icon name="mdi:account-circle-outline" size="24px" class="main_container_header_subMenu_list_btn_icon"  />
                </ClientOnly>
                <NuxtLink to="/profile">Perfil</NuxtLink>

            </span>
            <span @click="toggle = false"  class="main_container_header_subMenu_list_btn">
                <ClientOnly>
                <Icon name="mdi:chat-processing-outline" size="24px" class="main_container_header_subMenu_list_btn_icon"  />
                </ClientOnly>
                Contacto
            </span>
        </div>
</template>

<script setup lang="ts">
import { Icon } from '#components'
// Get custom controls
// data user logueado
const user = useSupabaseUser();
const supabase = useSupabaseClient();

// logout
const logout = async ()=>{
  let {error} = await supabase.auth.signOut();
  error ? alert("error en logout..") : navigateTo('/');
}


let toggle = ref(false);
</script>

<style lang="scss" scoped>

.main_container_header_subMenu_list{
  position: absolute;
  top: 4rem;
  right: 1.2rem;
  display: flex;
  flex-direction: column;
  min-width: 240px;
  margin-top: 0.25rem;
  padding: 1.4rem;
  border-radius: 8px;
  background: $darkColor-background;
  border: 1px solid #80808057;
  z-index: 51;

}
.main_container_header_subMenu_list_btn{
  margin: 10px 0px;
  padding: 0.25rem 0;
  cursor: pointer;

}

.main_container_header_subMenu_list_btn:hover{
  color: $darkColor-color-hover;
}


.main_container_header_subMenu_list_btn_icon{
  margin: 0 5px;
}



/* hamburguer START */
.hamburger {
  /* display: none; */
  display: block;

  height: 40px;
  width: 40px;
  transform: 0.2s;
  position: relative;
}
.hamburger .checkbox {
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.hamburger_labelVisuallyHidden{
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.line {
  transition: 0.5s;
  stroke-width: 6px;
  stroke: white;
}
.lineTop {
  stroke-dasharray: 40 40;
  stroke-dashoffset: 25;
}
.lineBottom {
  stroke-dasharray: 40 40;
  stroke-dashoffset: 60;
}
.lineMid {
  stroke-dasharray: 40 40;
}
.hamburger .checkbox:checked + svg .line {
//   stroke: crimson;
}
.hamburger .checkbox:checked + svg .lineTop {
  stroke-dashoffset: 0;
  transform-origin: left;
  transform: rotateZ(45deg) translate(-7px, -5px);
}
.hamburger .checkbox:checked + svg .lineMid {
  stroke-dashoffset: 40;
}
.hamburger .checkbox:checked + svg .lineBottom {
  stroke-dashoffset: 0;
  transform-origin: left;
  transform: rotateZ(-45deg) translate(-5px, 5px);
}


/* HAMBURGUER END */
</style>