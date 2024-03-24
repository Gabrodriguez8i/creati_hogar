<template>
    <main class="main">
        <div class="main_background">
          <NuxtImg class="main_background_img" src="/QUINTA%20COLONIAL%20CCS/_MG_0164-2_fb9orh.jpg" alt="imagen de propieda creati hogar"  provider="cloudinary" format="webp"/>
        </div>

        <section class="main_section">
          <div class="main_section_account">
            <div class="heamain_section_account_header">
              <h2 class="heamain_section_account_header_title">
                {{ user.email }}
              </h2>
              <h4 class="heamain_section_account_header_subtitle">Reservaciones</h4>
            </div>
          </div>
    
          <div class="main_section_reservations">
            <!-- <div v-if="pending">
              Loading
            </div> -->
            <div >
              <ProfileTable :dataTable="reservationsData"/>
            </div>
          </div>
        </section>


    </main>
</template>

<script setup lang="ts">
import type { Reservation } from "~/interfaces/Dataresponses/reservation";
const user = useSupabaseUser();

const { pending, error, data: reservationsData } = await useLazyFetch<Reservation[]>('/api/reservations/get');


</script>

<style lang="scss" scoped>

.main{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* property BACKGROUND START */
.main_background {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0.4;
  z-index: 0;
  transition: 0.5s;
}
.main_background_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main_background::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to top, #000 27%, #0000004a);
}

/* property BACKGROUND END ---- */

.main_section{
  z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 150px 0px 0px;
}
.heamain_section_account_header{
  margin-bottom: 30px;
}

.heamain_section_account_header_title{
  font-size: 1.5em;
    line-height: 2em;
    letter-spacing: -.01em;
    font-weight: 500;
}
.heamain_section_account_header_subtitle{
  font-size: $fontSize_title;

}
/* CONTAINER */
.main_container{
    position: relative;
    width: 100%;
    min-height: 500px;
    max-width: 900px;
    padding: 20px 10px;
    background: red;
}
</style>