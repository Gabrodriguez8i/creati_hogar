<template>

      <!-- slider -->

      <div class="hero">
        <!-- list Items -->
        <div class="hero_slider">

            <div v-for="(service,indexSlider) in services" :key="indexSlider" class="item" :class="{'active': indexSlider == 0}">
                <img :src="service.mainImage">
                <div class="content">
                    <p>{{ service.address.city }} {{ service.address.state }} </p>
                    <h2>{{ service.name }}</h2>
                    <p> {{ service.description }}</p>

                    <NuxtLink class="btnMore" :to="`property/${service.id}`">Ver</NuxtLink>
                </div>
            </div>
        </div>
        <!-- button arrows -->
            <div class="arrows">
                
                <button id="prev" class="arrows_btn"> 
                    <ClientOnly>
                        <Icon class="i" name="ic:round-chevron-left" size="15px"  />
                    </ClientOnly>
                </button>
    
                <button id="next" class="arrows_btn"> 
                    <ClientOnly>
                        <Icon class="i" name="ic:round-chevron-right" size="15px"  />
                    </ClientOnly>

                </button>
            </div>
        <!-- thumbnail -->
        <div class="thumbnail">
            <div v-for="(thumbnail,indexThumbnail) in services" class="item" :class="{'active': indexThumbnail == 0}">
                <img :src="thumbnail.mainImage">
                <div class="content">
                    {{ thumbnail.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {services} from '@/json/dataBannerSlider.json';

console.log("services: ", services);
onMounted(() => {
    useHead({
      script:[
        {
          src: "/jsDOM/BannerHero.js",
          async: true
        }
      ]
    })
})

</script>

<style scoped>

svg{
    width: 25px;
}

/* css slider */
.hero{
    height: 100vh;
    /* margin-top: -50px; */
    position: relative;
}
.hero .hero_slider .item{
    position: absolute;
    inset: 0 0 0 0;
    overflow: hidden;
    opacity: 0;
    transition: .5s;
}
.hero .hero_slider .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.hero .hero_slider .item::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    /* background-image: linear-gradient(
        to top, #000 40%, transparent
    ); */
    background-image: linear-gradient(
        to top, #000 27%, transparent
    );
}
.hero .hero_slider .item .content{
    position: absolute;
    left: 10%;
    top: 20%;
    width: 500px;
    max-width: 80%;
    z-index: 1;
    color: white;
}
.hero .hero_slider .item .content p:nth-child(1){
    text-transform: uppercase;
    letter-spacing: 4px;
}
.hero .hero_slider .item .content h2{
    font-size: 60px;
    font-weight: 600;
    margin: 0 0 10px;
}
.hero .hero_slider .item.active{
    opacity: 1;
    z-index: 1;
}
@keyframes showContent {
    to{
        transform: translateY(0);
        filter: blur(0);
        opacity: 1;
    }
}
.hero .hero_slider .item.active p:nth-child(1),
.hero .hero_slider .item.active h2,
.hero .hero_slider .item.active p:nth-child(3),
.hero .hero_slider .item.active .btnMore{
    transform: translateY(30px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent .5s .7s ease-in-out 1 forwards;
}
.hero .hero_slider .item.active h2{
    animation-delay: 1s;
}
.hero .hero_slider .item.active p:nth-child(3){
    animation-duration: 1.3s;
}
.hero .hero_slider .item.active .btnMore{
    animation-duration: 1.5s;
}


.btnMore{
    width: 140px;
    background: none;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
    font-size: 14px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    /* height: 50px; */
    position: relative;
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    background-color: #2e2e2e;
    animation-delay: 1.5s;
    transition: .3s;
}

.btnMore:hover{
    background: white;
    color: black;
}
.arrows{
    position: absolute;
    top: 30%;
    right: 50px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    min-width: 90px;
    max-width: 100px;
}
.arrows button{
    background-color: #eee5;
    border: none;
    /* font-family: monospace; */
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: x-large;
    color: #eee;
    transition: .5s;
}
.arrows button:hover{
    background-color: #eee;
    color: black;
}
.thumbnail{
    position: absolute;
    bottom: 50px;
    z-index: 10;
    display: flex;
    gap: 10px;
    width: 100%;
    height: 250px;
    padding: 0 50px;
    box-sizing: border-box;
    overflow: auto;
    justify-content: center;
    /* overflow-x: hidden; */
}
.thumbnail::-webkit-scrollbar{
    width: 0;
}
.thumbnail .item{
    width: 150px;
    height: 220px;
    filter: brightness(.5);
    transition: .5s;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;

}
.thumbnail .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    position: relative;
}
.thumbnail .item.active{
    filter: brightness(1.5);

}

.thumbnail .item.active::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient( to top, #000000cc 20%, transparent );
    z-index: 0;
}
.thumbnail .item .content{
    position: absolute;
    inset: auto 10px 10px 10px;
    color: #eee;
    z-index: 1;
}

@media (max-width: 1280px){
    .thumbnail{
        align-items: flex-end;
    }
    .thumbnail .item{
        height: 155px;
    }
}
@media screen and (max-width: 1075px) {

    .tab-navigation{
        width: 100%;
    }
    .hero .hero_slider .item .content{
        top: 20%;
    }
    .thumbnail{
        justify-content: start;
        padding: 0 40px;
        scrollbar-width: thin;
    }
    .hero .hero_slider .item .content h2{
        font-size: 60px;
    }
    .arrows{
        top: 50%;
        left: 10%;
    }
}

@media (max-width: 650px){
    .hero .hero_slider .item .content p:nth-child(1){
    text-transform: uppercase;
    letter-spacing: 2px;
    }
    .hero .hero_slider .item .content h2{
        font-size: 30px;
    }

    .btnMore{
        font-size: 12px;
    }

    .arrows{
        top: 60%;
    }
    .thumbnail{
        padding: 20px;
    }
    .thumbnail .item{
        width: 160px;
    }
}

@media screen and (max-height: 540px) {

    
    .thumbnail{
        align-items: flex-end !important;
    }

    .thumbnail .item{
        height: 115px !important;
    }
}

</style>
