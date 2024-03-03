<template>
  <section>
    <!-- slider -->
    <div v-if="pending">LOADING...</div>
    <div v-else class="property">
      <div class="property_background">
        <NuxtImg class="property_background_img" :src="service.mainImage" alt="imagen de propieda creati hogar"  provider="cloudinary" format="webp"/>
      </div>

      <section class="property_container">
        <div class="property_container_pictures">
              <div class="property_container_pictures_bxLeft">
                <div class="img-box property_container_pictures_bxLeft_imgBx">
                  <NuxtImg :src="service.mainImage" alt="imagen de propieda creati hogar" class="property_container_pictures_bxLeft_imgBx_img"  provider="cloudinary" format="webp"/>
                </div>
              </div>
              <div class="property_container_pictures_bxRight">
                <div class="property_container_pictures_bxRight_imgBx">
                  <img src="/images/place/1.webp" class="property_container_pictures_bxRight_imgBx_img" alt="P1" />
                </div>
                <div class="property_container_pictures_bxRight_imgBx">
                  <img src="/images/place/2.webp" class="property_container_pictures_bxRight_imgBx_img" alt="P2" />
                </div>
                <div class="property_container_pictures_bxRight_imgBx">
                  <img src="/images/place/3.webp" class="property_container_pictures_bxRight_imgBx_img" alt="P3" />
                </div>
                <div class="property_container_pictures_bxRight_imgBx">
                  <img src="/images/place/4.webp" class="property_container_pictures_bxRight_imgBx_img" alt="P4" />
                </div>
              </div>
        </div>

        <div class="property_container_info">

              <!-- section info LEFT -->
              <div class="property_container_info_leftBx">

                <!-- section info LEFT INFO MAIN  -->
                <div class="property_container_info_leftBx_infoMain">
                  <!-- head title min -->
                  <span class="property_container_info_leftBx_infoMain_subtitle">
                    {{ service.address.state }}
                    {{ service.address.city }} 
                  </span>

                  <!-- head title Main -->
                  <h1 class="property_container_info_leftBx_infoMain_title">{{ service.name }}</h1>

                  <!-- head  de items -->
                  <div class="property_container_info_leftBx_infoMain_items">
                        <span class="property_container_info_leftBx_infoMain_items_bx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="property_container_info_leftBx_infoMain_items_bx_text">
                            {{ service.occupancy }} Invitados
                          </p>
                        </span>
                        <span class="property_container_info_leftBx_infoMain_items_bx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="property_container_info_leftBx_infoMain_items_bx_text">
                            {{ service.bedrooms }} Dormitorios
                          </p>
                        </span>
                        <span class="property_container_info_leftBx_infoMain_items_bx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="property_container_info_leftBx_infoMain_items_bx_text">4 Camas</p>
                        </span>
                        <span class="property_container_info_leftBx_infoMain_items_bx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="property_container_info_leftBx_infoMain_items_bx_text">
                            {{ service.bathrooms }} Baños
                          </p>
                        </span>
                  </div>

                  <!-- head description -->
                  <div class="info-para property_container_info_leftBx_infoMain_descriptionBx">
                    <p class="property_container_info_leftBx_infoMain_descriptionBx_text">
                      {{ service.description }}
                    </p>
                  </div>
                </div>
                <hr />

                <!-- section info LEFT INFO COMODIDADES  -->
                <div v-if="service.commonAmenities && service.commonAmenities != null " class="property_container_info_leftBx_amenities">
                  <h2 class="property_container_info_leftBx_amenities_title">Comodidades</h2>
                  <hr />

                  <ul  class="property_container_info_leftBx_amenities_list" >
                    <li v-for="common in service.commonAmenities" class="property_container_info_leftBx_amenities_list_item">
                      <ClientOnly>
                        <Icon class="i" name="ic:outline-check-circle" size="18px"/>
                      </ClientOnly>
                      <p class="property_container_info_leftBx_amenities_list_item_text">
                          {{ common.name }}
                      </p>
                    </li>
                  </ul>
                </div>
                <hr/>
                <hr/>

                <!-- section info Left INFO ROOMS -->
                <div class="property_container_info_leftBx_rooms">
                  <h2 class="property_container_info_leftBx_rooms_title">Where you'll sleep</h2>
                  <ul class="property_container_info_leftBx_rooms_list">

                    <li v-for="(bedroom, indexBed) in service.imagesBedrooms" :key="indexBed" class="property_container_info_leftBx_rooms_list_bx">
                        <img src="https://assets.wander.com/344576539297316900/640.webp" alt="room creati hogar" class="property_container_info_leftBx_rooms_list_bx_img" />
                        <div class="property_container_info_leftBx_rooms_list_bx_textBx">
                          <p class="property_container_info_leftBx_rooms_list_bx_textBx_title">Habitación {{ bedroom.bedroom }}</p>
                          <p class="property_container_info_leftBx_rooms_list_bx_textBx_subtitle">{{ bedroom.description[0] }}</p>
                        </div>
                    </li>
                  </ul>
                </div>
                <hr />

              </div>

              <!-- section info RIGHT -->
              <div class="property_container_info_right">
                <PropertyCardReserve :dataCardReserve="{'priceBase':service.priceBase}"/>
              </div>

        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Service } from "~/interfaces/Dataresponses/service";

const route = useRoute();
const supabase_service = useSupabaseClient<Service>();

const {
  data: service,
  error,
  pending,
} = await useAsyncData("service", async () => {
  const { data } = await supabase_service
    .from("services")
    .select("*")
    .eq("id", route.params.id);
  if (data != null) return data[0];
});


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");

.property {
  min-height: 100vh;
  position: relative;
  padding: 115px 50px 0px 50px;
}

/* property BACKGROUND START */
.property_background {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0.4;
  z-index: 1;
  transition: 0.5s;
}
.property_background_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.property_background::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to top, #000 67%, #0000004a);
}

/* property BACKGROUND END ---- */



.property_container {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 1320px;
}


/* property CONTAINER PICTURE START */

  .property_container_pictures{
    display: flex;
    padding-top: 1.5em;
    gap: 0.5em;
    margin-bottom: 20px;
  }

  .property_container_pictures_bxLeft{
    border-top-left-radius: 0.7em;
    border-bottom-left-radius: 0.7em;
    display: flex;
    gap: 0.5em;
    align-items: flex-start;
    max-width: 50%;
    max-height: 32em;
    overflow: hidden;
  }

  .property_container_pictures .property_container_pictures_bxLeft,
  .property_container_pictures .property_container_pictures_bxRight {
    display: flex;
    gap: 0.5em;
    align-items: flex-start;
    max-width: 50%;
    max-height: 32em;
    overflow: hidden;
  }

  .property_container_pictures .property_container_pictures_bxLeft {
    border-top-left-radius: 0.7em;
    border-bottom-left-radius: 0.7em;
  }

  .property_container_pictures .property_container_pictures_bxRight {
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    flex-wrap: wrap;
  }

  .property_container_pictures_bxLeft_imgBx{
    max-width: 50%;
    justify-content: center;
  }
  .property_container_pictures_bxLeft_imgBx_img {
    height: 32em;
  }


  .property_container_pictures_bxRight_imgBx{
    display: flex;
    max-width: 49.2%;
    max-height: 50%;
    overflow: hidden;
  }


  .property_container_pictures_bxRight_imgBx_img {
    height: 16em;
  }



/* property CONTAINER PICTURE END ------------ */

/* property CONTAINER INFO START */
.property_container_info{
  display: flex;
  justify-content: space-between;
  padding-top: 0.5em;
  gap: 2em;
}


/* property CONTAINER INFO END ------------ */



/* colors */
:root {
  --seperator: rgba(0, 0, 0, 0.1);
}



/* hero */

.property_container_info_leftBx_infoMain .left .flex,
.property_container_info_leftBx_infoMain .right .flex,
.property_container_info_leftBx_infoMain .left,
.property_container_info_leftBx_infoMain .right,
.property_container_info_leftBx_infoMain .subtitle,
.property_container_info_leftBx_infoMain .right .li {
  align-items: center;
}



.property_container_info_leftBx_infoMain_title {
  font-size: 2em;
  font-weight: 700;
  margin: 5px 0px;
}

.property_container_info_leftBx_infoMain_subtitle {
  font-size: 0.6875em;
  line-height: 1.125em;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, 0.6);
  padding-top: 0.7em;
}

.property_container_info_leftBx_infoMain_items{
  display: flex;
  align-items: center;

  padding-top: 0.5em;
  gap: 0.3em;
  font-weight: 500;
  font-size: 0.9em;
}


/* .property_container_info p {
  font-size: 0.9em;
} */

.property_container_info .bold {
  font-weight: 600;
}

/* hero info title block*/
.property_container_info_leftBx {
  max-width: 60%;
}

.property_container_info_leftBx_amenities_title {
  font-size: 1.3em;
}

.property_container_info hr {
  margin: 1em 0;
    border: none;
}



.property_container_info_leftBx_infoMain_items_bx {
  display: flex;
  margin-right: 10px;
}
.property_container_info_leftBx_infoMain_items_bx_text {
  margin: 0 5px;
  font-size: 0.9em;
}
/* hero info sub-info */
.property_container_info_leftBx_amenities_list {
  padding-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
}

.property_container_info_leftBx_amenities_list_item {
  display: flex;
  gap: 2em;
  width: 50%;
  margin: 4px 0px;
  font-size: 14px;
}

.property_container_info_leftBx_amenities_list_item_text {
  display: flex;
  gap: 0.4em;
  flex-direction: column;
  font-weight: 600;

}

.property_container_info_leftBx_infoMain_descriptionBx {
  padding-top: 1em;
}

.property_container_info_leftBx_infoMain_descriptionBx_text {
  padding-bottom: 1.3em;
    line-height: 1.6em;
    font-weight: 500;
    color: hsla(0, 0%, 100%, 0.6);
    font-size: 1em;
}




/* rooms Start */
.property_container_info_leftBx_rooms {
  padding-bottom: 1em;
}

.property_container_info_leftBx_rooms_title{
  padding-top: 1em;
}

.property_container_info_leftBx_rooms .property_container_info_leftBx_rooms_list {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5em;
  gap: 1em;
}

/* rooms end */

.property_container_info_leftBx_rooms_list_bx {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.8em;
  padding: 1.5em;
  flex: 1;
}

.property_container_info_leftBx_rooms_list a,
.property_container_info_leftBx_rooms_list_bx_textBx {
  display: flex;
  flex-direction: column;

}

.property_container_info_leftBx_rooms_list_bx_textBx_title{
  font-weight: 600;
  margin-bottom: 1rem;
}

.property_container_info_leftBx_rooms_list_bx_textBx_subtitle{
  font-size: 0.8em;

}

.property_container_info_leftBx_rooms_list a {
  gap: 1.3em;
}





/* right side of hero-info */
 .property_container_info_right{
  display: flex;
  padding-bottom: 2em;
  padding-left: 3.5em;
  flex-direction: column;
  gap: 1.5em;
  max-width: 410px;
}


.property_container_info_leftBx_rooms_list_bx_img {
    height: min-content;
    width: 180px;
    border-radius: 8px;
    margin-bottom: 15px;
}

@media (max-width: 1280px) {
.property_container_info_leftBx_amenities_list_item {
  font-size: 12px;
}

}
  @media (max-width: 650px){
    .property_container_info_right{
      display: none;
    }
  }
</style>
