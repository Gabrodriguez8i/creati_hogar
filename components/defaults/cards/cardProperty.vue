<template>
          <div class="cardBx" >
            <div class="slider">
                <div class="list" ref="list">
                    <div v-for="(image, index) in property.imagesSlider" class="item" ref="itemsCurrent" :class="{'active': itemActive == index}">
                        <NuxtImg style="width: 100%; height: 100%;"  :src="image" alt="imagen de propieda creati hogar"  provider="cloudinary" format="webp"/>
                    </div>

                    <!-- <img  v-for="(image, index) in property.imagesSlider" class="item" ref="itemsCurrent" :class="{'active': itemActive == index}" :src="image" alt="imagen de propieda creati hogar"> -->
                </div>

                <div class="buttons" style="z-index: 10000">
                    <span @click="prev">
                        <ClientOnly>
                            <Icon class="i" name="ic:round-chevron-left" size="15px"  />
                        </ClientOnly>
                    </span>
                    <span @click="next">
                        <ClientOnly>
                            <Icon class="i" name="ic:round-chevron-right" size="15px"  />
                        </ClientOnly>
                    </span>
                </div>
                <ul class="dots">
                    <li  v-for="(image, indexDots) in property.imagesSlider" :key="indexDots" @click="dotsClick(indexDots)" :class="{'active': itemActive == indexDots }"></li>
                </ul>
            </div>
            <NuxtLink :to="`property/${property.id}`" class="cardBx_details">
                  <h2 class="cardBx_details_minText">
                    {{ property.address.city }}, {{ property.address.state  }}
                  </h2>
                  <span class="cardBx_details_title">{{ property.name }}</span>
                  <div class="cardBx_details_footer">
                    <span>
                      <ClientOnly>
    
                        <Icon name="tabler:bed" size="18px" />
                      </ClientOnly>
                      {{ property.bedrooms }}
                    </span>
    
                    <span>
                      <ClientOnly>
                        <Icon name="streamline:travel-hotel-shower-head-bathe-bath-bathroom-shower-water-head" size="18px" />
                      </ClientOnly>
                      {{ property.bathrooms }}
                    </span>
    
                    <span>
                      <ClientOnly>
                        <Icon name="ic:round-people" size="18px" />
                      </ClientOnly>
                      {{ property.occupancy }}
                    </span>
    
                  </div>
            </NuxtLink>
        </div>

</template>

<script setup lang="ts">
import type { Service } from '~/interfaces/Dataresponses/service';

let props = defineProps({
    property:{
        required: true,
        type: Object as ()=> Service,
        default: null
    },

    index: {
        required: true,
        type: Number,
        default: 0
    }
})

let itemActive = ref(0);
let itemsCurrent = ref('');
let list = ref('');

const next = ()=>{
    console.log("property: ", props.property);
    itemActive.value == props.property.imagesSlider.length - 1 ? itemActive.value = 0 : itemActive.value += 1;
    reloadSlider();
}

const prev = ()=>{
    itemActive.value <= 0 ? itemActive.value = props.property.imagesSlider.length - 1  : itemActive.value -= 1;
    reloadSlider()
}

const dotsClick = (indexDot)=>{
    itemActive.value = indexDot;
    reloadSlider()
}

let reloadSlider = ()=>{
    list.value.style.left = -itemsCurrent.value[itemActive.value].offsetLeft + 'px';
}


</script>

<style lang="scss" scoped>
.cardBx{
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
    // min-width: 295px;
}

.cardBx:hover .slider .buttons{
    opacity: 1;
}

.cardBx_details{
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem !important;
    padding: .2rem 0;
}

.cardBx_details_minText{
    color: #fff9;
    font-size: 1rem;
    // font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.125rem;
    text-transform: uppercase;
    font-weight: 500 !important;
    text-decoration: none;
    margin-bottom: 4px
}

.cardBx_details_title{
    font-size: 16px;
    font-weight: 700;
}

.cardBx_details_footer{
    display: flex;
    font-size: 14px;
    gap:10px
}


.slider{
    width: 100%;
    max-width: 300px;
    height: 295px;
    margin: auto;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}
.slider .list{
    position: absolute;
    width: max-content;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    transition: 1s;
}

.list.active{
    // left: 
}
.slider .list img{
    width: 100%;
    max-width: 300px;
    height: 100%;
    object-fit: cover;
}
.slider .buttons{
    position: absolute;
    top: 45%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 10px;
    opacity: 0.5;
    transition: .3s;
}
.slider .buttons span{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgb(0 0 0 / 60%);
    color: #fff;
    border: none;
    // font-family: monospace;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.slider .dots{
    position: absolute;
    bottom: 10px;
    left: 0;
    color: #fff;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}
.slider .dots li{
    list-style: none;
    width: 6px;
    height: 6px;
    background-color: #cfcfcfcc;
    margin: 5px;
    border-radius: 20px;
    transition: 0.5s;
}
.slider .dots li.active{
    width: 30px;
}

@media (max-width:1280px){
    .slider, .slider .list img{
        max-width:370px;
    }
}
@media (max-width:1000px){
    .cardBx{
        max-width:388px;
    }
    .slider, .slider .list img{
        max-width:388px;
    }
}
// @media screen and (max-width: 768px){
//     .slider{
//         height: 400px;
//     }
// }
</style>