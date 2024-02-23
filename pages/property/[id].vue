<template>
  <section>
    <!-- slider -->
    <div v-if="pending">LOADING...</div>
    <div v-else class="slider">
      <div class="item active">
        <img src="/images/BannerHero/banner5.jpg" />
      </div>

      <section class="property">
        <div class="hero">
          <div class="container house">
            <div class="hero-pictures flex">
              <div class="left flex">
                <div class="img-box">
                  <img src="/images/place/main.webp" alt="Main picture" />
                </div>
              </div>
              <div class="right flex">
                <div class="img-box flex">
                  <img src="/images/place/1.webp" alt="P1" />
                </div>
                <div class="img-box flex">
                  <img src="/images/place/2.webp" alt="P2" />
                </div>
                <div class="img-box flex">
                  <img src="/images/place/3.webp" alt="P3" />
                </div>
                <div class="img-box flex">
                  <img src="/images/place/4.webp" alt="P4" />
                </div>
              </div>
            </div>

            <div class="hero-info flex">
              <div class="main-left">
                <div class="title-block">
                  <span class="title-block_subtitle">
                  </span>
                  <h1>{{ service.name }}</h1>

                  <!-- cantidades de items -->
                  <div class="title-block flex">
                    <div class="left">
                      <div class="flex amenities">
                        <div class="amenities_itemBx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="amenities_itemBx_text">
                            {{ service.occupancy }} Invitados
                          </p>
                        </div>
                        <div class="amenities_itemBx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="amenities_itemBx_text">
                            {{ service.bedrooms }} Dormitorios
                          </p>
                        </div>
                        <div class="amenities_itemBx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="amenities_itemBx_text">4 Camas</p>
                        </div>
                        <div class="amenities_itemBx">
                          <ClientOnly>
                            <Icon name="ic:round-people" size="18px" />
                          </ClientOnly>
                          <p class="amenities_itemBx_text">
                            {{ service.bathrooms }} Baños
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="info-para">
                    <p>
                      {{ service.description }}
                    </p>
                  </div>
                </div>
                <hr />

                <!-- listado de comodidades -->
                <div v-if=" service.commonAmenities && service.commonAmenities != null ">
                    <h2>Comodidades</h2>
                <hr />

                    <ul  class="info-block" >
                        <li v-for="common in service.commonAmenities" class="flex">
                            <ClientOnly>
                                <Icon class="i" name="ic:outline-check-circle" size="18px"  />
                            </ClientOnly>
                            <div class="info flex">
                                <p class="title bold">
                                    {{ common.name }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>


                <hr />

                <hr />
                <div class="rooms">
                  <h2>Where you'll sleep</h2>
                  <ul class="boxes flex">

                    <li v-for="(bedroom, indexBed) in service.imagesBedrooms" :key="indexBed">
                      <a href="" class="flex">
                        <img
                          src="https://assets.wander.com/344576539297316900/640.webp"
                          alt="."
                          class="interesting"
                        />
                        <div class="flex">
                          <p class="bold">Habitación {{ bedroom.bedroom }}</p>
                          <p class="subtitle">{{ bedroom.description[0] }}</p>
                        </div>
                      </a>
                    </li>

                  </ul>
                </div>
                <hr />
              </div>
              <div class="right flex boxReserve">
                <div class="card flex">

                  <div class="date-block flex">
                    <a href="#" class="check-in flex">
                      <p class="bold">CHECK-IN</p>
                      <p>07/10/2023</p>
                    </a>
                    <a href="#" class="checkout">
                      <p class="bold">CHECKOUT</p>
                      <p>12/10/2023</p>
                    </a>
                    <a href="#" class="guests flex">
                      <div class="left">
                        <p class="bold">GUESTS</p>
                        <p>1 guest</p>
                      </div>
                      <!-- <img
                        src="/images/icons/down-arrow.png"
                        alt="Arrow"
                        class="arrow"
                      /> -->
                    </a>
                  </div>
                  <a href="#" class="reserve bold">Reserve</a>
                  <p class="details-1">You won't be charged yet</p>
                  <p class="details-2">
                    Price shown is the total trip price, including additional
                    fees and taxes.
                  </p>
                  <ul class="fees flex">
                    <li class="flex">
                      <a href="#">
                        <p class="underline">$492.00 AUD x 5 nights</p>
                      </a>
                      <p>$2,460.00 AUD</p>
                    </li>
                    <li class="flex">
                      <a href="#" class="flex">
                        <p class="underline">Weekly stay discount</p>
                      </a>
                      <p class="discount">-$102.50 AUD</p>
                    </li>
                    <li class="flex">
                      <a href="#" class="flex">
                        <p class="underline">
                          <u>Cleaning fee</u>
                        </p>
                      </a>
                      <p>$200.00 AUD</p>
                    </li>
                    <li class="flex">
                      <a href="#" class="flex">
                        <p class="underline">
                          <u>Airbnb service fee</u>
                        </p>
                      </a>
                      <p>$413.08 AUD</p>
                    </li>
                  </ul>
                  <hr />
                  <div class="total flex">
                    <p class="bold">Total</p>
                    <p class="bold">$3,073.08 AUD</p>
                  </div>
                </div>
                <div class="report flex">
                  <a href="" class="flex">
                    <!-- <img
                      src="/images/icons/report.png"
                      alt="."
                      class="report-img"
                    /> -->
                    <p>
                      <u class="bold">Report this listing</u>
                    </p>
                  </a>
                </div>
              </div>
            </div>
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
  //   return {...data}
  if (data != null) return data[0];
});

console.log("service: ", service);

console.log("route: ", route.params.id);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");

/* css slider */
.slider {
  min-height: 100vh;
  position: relative;
  padding-top: 115px;
}
.item {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
}
.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to top, #000 67%, #0000004a);
}
.item.active {
  opacity: 1;
  z-index: 1;
}

.property {
  /* margin-top: 180px; */
  position: relative;
  z-index: 2;
}
/* colors */
:root {
  --seperator: rgba(0, 0, 0, 0.1);
}

/* a,
p,
li,
h1,
h2,
h3 {
	text-decoration: none;
	color: inherit;
	font-family: "Montserrat", sans-serif;
	font-size: 0.8em;
} */

li {
  list-style-type: none;
}

/* reusable */
.flex {
  display: flex;
}

.container {
  margin: 0 auto;
  margin-left: 4.5%;
  margin-right: 4.5%;
}

.bold {
  font-weight: 600;
}

hr {
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  border: none;
}

/* fixed top part */
.ontop {
  background-color: white;
  position: fixed;
  width: 100%;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
}

/* header */
header {
  padding: 1em 0;
  border-bottom: 1.3px solid var(--seperator);
}

header .container {
  justify-content: space-between;
}

header .container,
.links {
  align-items: center;
}

header .links {
  gap: 1em;
}

header .left,
header .right,
header .center {
  flex: 1;
}

header .right {
  justify-content: right;
  color: rgba(0, 0, 0, 0.8);
}

header .left img {
  max-width: 7em;
}

.center {
  justify-content: center;
}

.dropdown,
.center .links {
  border: 1.3px solid var(--seperator);
  border-radius: 2em;
  padding: 0.3em 0.3em 0.1em 0.3em;
}

.dropdown.links.flex {
  gap: 0.5em;
}

.center .links {
  padding: 0.2em 0.4em 0.2em 1.5em;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
}

.vert-line {
  border-left: 1.5px solid var(--seperator);
}

/* caroussel */
.filter-bar {
  padding: 1.3em 0;
  justify-content: space-between;
  gap: 2em;
}

.caroussel .filter {
  flex-direction: column;
  align-items: center;
}

.caroussel.flex {
  flex: 1;
  justify-content: space-between;
}

.filter a {
  text-align: center;
}

.caroussel .bold {
  font-size: 0.7em;
  color: rgba(0, 0, 0, 0.5);
}

.filter-button,
.filter-arrow {
  align-items: center;
  justify-content: center;
  border: 1.3px solid var(--seperator);
  border-radius: 0.85em;
  flex: 1;
  padding: 1em;
}

.filter-button {
  gap: 0.5em;
}

.filter-button-group {
  font-weight: 500;
  font-size: 0.7em;
  gap: 2em;
  align-items: center;
}

.filter-arrow {
  max-height: 2em;
  max-width: 1em;
  border-radius: 50%;
  padding: 0.6em 0.9em;
}

/* Places Grid */
.places-grid {
  padding-top: 11.5em;
}

.places-grid .flex {
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2.5em;
  column-gap: 1em;
}

.place-info {
  padding-top: 0.7em;
  justify-content: space-between;
}

.place-info li,
.place-info p {
  font-size: 0.9em;
  padding: 0.2em 0;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
}

.place-info p {
  color: black;
}

.place-info .location {
  font-weight: 600;
  color: black;
}

.place img {
  max-width: 18em;
  border-radius: 0.75em;
  height: auto;
}

.place img:hover {
  opacity: 0.9;
}

.place-info .left {
  flex: 2;
}

.place-info .right {
  justify-content: right;
  align-items: flex-start;
}

.place-info .price {
  padding-top: 0.5em;
  color: black;
}

.place-info .right img {
  max-width: 1.2em;
  max-height: 1em;
}

.right-container.flex {
  align-items: center;
  gap: 0.1em;
}
/* show more */
.show-more {
  row-gap: 1em;
  padding: 3em 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.show-more p {
  font-size: 1em;
}

.show-more a {
  font-size: 0.9em;
  color: white;
  background-color: black;
  padding: 1.1em 1.4em;
  border-radius: 0.5em;
}

/* before footer */
.before-footer,
footer,
.fr-bottom {
  background-color: #f7f7f7;
  padding: 3em 0;
}

.before-footer .container {
  flex-direction: column;
  row-gap: 1.7em;
}

.footer-title.bold {
  font-size: 1.3em;
}

.footer-options {
  font-size: 1em;
  gap: 1.5em;
}

.footer-options li {
  color: rgba(0, 0, 0, 0.7);
}

.footer-title {
  font-size: 1em;
}

/* before footer locations */
.footer-locations {
  column-gap: 10%;
}

.footer-locations p {
  font-size: 0.8em;
}

.footer-locations ul {
  flex-direction: column;
  row-gap: 1.8em;
}

.footer-locations ul a {
  flex-direction: column;
  gap: 0.1em;
}

.locations-subtitle {
  color: rgba(0, 0, 0, 0.8);
}

/* real footer */
footer,
.fr-bottom {
  padding-top: 0;
}

footer .container,
.fr-bottom .container {
  padding: 2em 0;
}

.pleasefixthepadding {
  padding-bottom: 0 !important;
}

.bottom-footer-cols {
  column-gap: 20%;
}

.bottom-footer-cols .flex {
  flex-direction: column;
  gap: 1em;
}

.bottom-footer-cols a {
  font-size: 0.8em;
}

/* bottom of bottom footer*/
.fr-bottom .flex {
  padding: 1em 0;
  padding-bottom: 0 !important;
  padding-top: 0.5em;
}

.fr-bottom .left,
.fr-bottom .right.flex {
  gap: 0.5em;
  align-items: center;
}

.fr-bottom .right {
  gap: 1em !important;
}

.fr-bottom .right.flex .footer-globe-group {
  gap: 0.5em;
  padding: 0;
  align-items: center;
}

.fr-bottom .container {
  padding-bottom: 0em;
}

.fr-bottom .container div {
  justify-content: space-between;
}

.fr-bottom {
  padding: 1em 0;
}

.fr-bottom hr {
  padding-top: 0;
}

.socials img {
  max-width: 6em;
}

/* HOUSE PAGE */
/* header */
.container.house,
footer .container.house {
  margin: 0 auto;
  /* margin: 0 19%; */
}

.center.house {
  color: rgba(0, 0, 0, 0.8);
}

.center.house .links {
  gap: 7.5em;
}

/* hero */

.title-block .left .flex,
.title-block .right .flex,
.title-block .left,
.title-block .right,
.title-block .subtitle,
.title-block .right .li {
  align-items: center;
}

.hero {
  padding-top: 1.5em;
}

.title-block h1 {
  font-size: 2em;
  font-weight: 700;
}

.title-block_subtitle {
  font-size: 0.6875em;
  line-height: 1.125em;
  font-weight: 500;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, 0.6);
  padding-top: 0.7em;
}

/* .title-block .subtitle .left a,
.title-block .right p {
	border-bottom: 1.5px solid hsla(0,0%,100%,.6);
} */

/* .title-block .left {
	gap: 0.5em;
	flex: 2;
}

.title-block .left .rating img {
	max-width: 1.3em;
}

.title-block .left .endorsement {
	gap: 0.3em;
}

.title-block .left .endorsement img {
	max-width: 0.7em;
}

.title-block .right {
	gap: 1em;
}

.title-block .right img {
	max-width: 1em;
}

.title-block .right li a {
	gap: 0.5em;
} */

/* hero pictures */
.hero-pictures {
  padding-top: 1.5em;
  gap: 0.5em;
  margin-bottom: 20px;
}

.hero-pictures .left,
.hero-pictures .right {
  gap: 0.5em;
  align-items: flex-start;
  max-width: 50%;
  max-height: 32em;
  overflow: hidden;
}

.hero-pictures .left {
  border-top-left-radius: 0.7em;
  border-bottom-left-radius: 0.7em;
}

.hero-pictures .right {
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  flex-wrap: wrap;
}

.left .img-box {
  max-width: 50%;
  justify-content: center;
}

.right .img-box {
  max-width: 49.2%;
  max-height: 50%;
  overflow: hidden;
}

.hero-pictures .left .img-box img {
  height: 32em;
}

.hero-pictures .right .img-box img {
  height: 16em;
}

/* hero info general styling */
.hero-info {
  justify-content: space-between;
  padding-top: 0.5em;
  gap: 2em;
}

.hero-info p {
  font-size: 0.9em;
}

.hero-info .bold {
  font-weight: 600;
}

/* hero info title block*/
.main-left {
  max-width: 60%;
}

.hero-info h2 {
  font-size: 1.3em;
}

.hero-info hr {
  margin: 1.8em 0;
}

.hero-info .main-left hr {
  margin-top: 1em;
}

.amenities {
  padding-top: 0.5em;
  gap: 0.3em;
  font-weight: 500;
  font-size: 0.9em;
}

.amenities_itemBx {
  display: flex;
  margin-right: 10px;
}
.amenities_itemBx_text {
  margin: 0 5px;
  font-size: 0.9em;
}
/* hero info sub-info */
.hero-info .info-block {
  padding-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hero-info .info-block li {
  gap: 2em;
  width: 50%;
  margin: 4px 0px;
}

.hero-info .info-block .info {
  gap: 0.4em;
  flex-direction: column;
}

/* .hero-info .info-block .info .description {
  font-size: 0.85em;
  color: rgb(148, 147, 147);
} */

.info-para {
  padding-top: 1em;
}

.info-para p {
  padding-bottom: 1.3em;
  line-height: 1.3em;
  font-size: 0.9em;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.6);
}

.info-para a {
  font-size: 0.9em;
}

.info-para span {
  border-bottom: 1.5px solid black;
}

/* bed grid */
.rooms {
  padding-bottom: 1em;
}

.rooms h2 {
  padding-top: 1em;
}

.rooms .boxes {
  justify-content: space-between;
  padding-top: 1.5em;
  gap: 1em;
}

.boxes li {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.8em;
  padding: 1.5em;
  flex: 1;
}

.boxes a,
.boxes div {
  flex-direction: column;
}

.boxes a {
  gap: 1.3em;
}

.boxes div {
  gap: 0.6em;
}

.boxes .subtitle {
  font-size: 0.8em;
}

/* right side of hero-info */
.hero-info .right {
  padding-bottom: 2em;
  padding-left: 3.5em;
  flex-direction: column;
  gap: 1.5em;
}

.hero-info .card {
  padding: 1.5em;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.7em;
  flex-direction: column;
  gap: 0.5em;
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
  background: rgb(14 14 14/1);
}

.hero-info .card h2 {
  font-weight: 500;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.7);
}

.hero-info .card span {
  font-size: 1.3em;
  color: black;
}
/* Rating block */
.card .rating-block {
  gap: 0.2em;
  align-items: center;
  padding-bottom: 1em;
}

.card .rating-block p {
  font-size: 0.8em;
}

.card .rating-block img {
  width: 1.2em;
}

/* Date block */
.date-block {
  flex-wrap: wrap;
  border-radius: 0.5em;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
}
.date-block a {
  padding: 0.8em;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  gap: 0.2em;
  flex-direction: column;
}

.date-block p {
  font-size: 0.8em;
}

.date-block p.bold {
  font-size: 0.6em;
}

.date-block .check-in,
.date-block .checkout {
  flex: 2;
  width: 50%;
  overflow: hidden;
}

.date-block .guests {
  min-width: 100%;
}

.date-block .check-in {
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
}

.date-block .checkout {
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
}

.date-block .guests {
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

/* Reserve button */
.reserve {
  text-align: center;
  background-image: linear-gradient(to right, #e61e4d, #d70566);
  padding: 1em 0;
  border-radius: 0.5em;
  color: white;
  font-size: 0.9em;
  margin: 0.4em 0 0 0;
}

.card .details-1,
.card .details-2 {
  text-align: center;
  font-size: 0.8em;
}

.card .details-1 {
  padding-top: 0.5em;
}

.card .details-2 {
  padding-bottom: 1em;
  flex-direction: column;
}

/* pricing */
.fees {
  row-gap: 1.25em;
  flex-direction: column;
}

.fees li {
  justify-content: space-between;
}

.fees p {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
}

.fees .discount {
  color: #159646;
}

.card hr {
  margin-top: 1em;
  margin-bottom: 1em;
}

/* total cost */
.card .total {
  justify-content: space-between;
}

.card .total p {
  color: rgba(0, 0, 0, 0.8);
}

/* report */
.right .report {
  justify-content: center;
  align-items: center;
}

.right .report a {
  gap: 1em;
  color: rgba(0, 0, 0, 0.6);
  align-items: center;
}

.right .report p {
  font-size: 0.8em;
}

/* fixing images for house page */

.info-block img {
  width: 1.5em;
  height: min-content;
}

.boxes img {
  /* width: 2em;
  height: min-content; */
}

.interesting {
    height: min-content;
    width: 180px;
    border-radius: 8px;
}

.arrow {
  width: 1em;
}

.report-img {
  width: 1em;
}

@media (max-width: 1075px) {
  @media screen and (max-width: 1075px) {
    .thumbnail {
      justify-content: start;
      padding: 0 40px;
    }
  }


  @media (max-width: 650px){
    .boxReserve{
      display: none;
    }
  }
  @media screen and (max-height: 540px) {
    .thumbnail {
      align-items: flex-end !important;
    }

    .thumbnail .item {
      height: 115px !important;
    }
  }
}
</style>
