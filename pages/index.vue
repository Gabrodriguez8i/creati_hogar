<template>
  <div>
    <HomeBannerHero/> 
    <!-- <NuxtImg  provider="cloudinary" src="/cld-sample-5.jpg" format="webp"/> -->
      <section class="services">
        <!-- filter bx -->
        <div class="filterBx">
          <!-- filter bx BTN  -->
          <div class = "filter-btns">
            <button @click="selectFilter = ''" type = "button" class = "filter-btn" :class="{'filter-btn_active' : selectFilter == ''}" >
              <ClientOnly>
                <Icon name="material-symbols:background-grid-small-sharp" size="14px" class="check-icon" />
              </ClientOnly>
              Todos
            </button>
            <button @click="selectFilter = 'beach'" type = "button" class = "filter-btn" :class="{'filter-btn_active' : selectFilter == 'beach'}" >
              <ClientOnly>
                <Icon name="ic:outline-beach-access" size="14px" class="check-icon" />
              </ClientOnly>
              Playa
            </button>
            <button @click="selectFilter = 'city'" type = "button" class = "filter-btn" :class="{'filter-btn_active' : selectFilter == 'city'}" >
              <ClientOnly>
                <Icon name="ic:baseline-location-city" size="14px" class="check-icon" />
              </ClientOnly>
                Ciudad
            </button>
            <button @click="selectFilter = 'mountain'" type = "button" class = "filter-btn" :class="{'filter-btn_active' : selectFilter == 'mountain'}" >
              <ClientOnly>
                <Icon name="ic:outline-landscape" size="14px" class="check-icon" />
              </ClientOnly>
              Montaña
            </button>
          </div>
          <!-- filter bx SEARCH -->
          <div class="filterBx_search">
            <!-- search -->
            <div class="header_container_head_search">
              <div class="header_container_head_search_bx">
                <input class="header_container_head_search_bx_input" type="text" v-model="text_search" placeholder="Type to search..">
                <div class="header_container_head_search_bx_iconBx">
                  <ClientOnly>
                    <Icon name="ic:sharp-search" size="24px" />
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
  
        </div>
  
        <div v-if="servicesData?.length > 0" class="grid-container grid-4-colmns gap-sm sectionCards">
          <div v-for="(property,indexProperty) in servicesData">
            <DefaultsCardsCardProperty :property="property" :index="indexProperty"/>
          </div>

        </div>
      </section>
  </div>
</template>
  
<script setup lang="ts">
import type { Service } from '~/interfaces/Dataresponses/service';

// State
const text_search = ref<string>('');
const selectFilter = ref<string>('');
let servicesData = ref<Service[]>([]);

watch (text_search, (newValue: string )=>{
    viewServices();
})

watch (selectFilter, (newValue:string)=>{
    viewServices();

})
const supabase = useSupabaseClient<Service[]>();


const viewServices = async ()=>{
// Usa useAsyncData para cargar los datos
    let services = supabase.from('services').select('*').eq('show', true)

    if(text_search.value.length > 2) services.like('name', `%${text_search.value}%`)

    if(selectFilter.value != '') services.eq('category', selectFilter.value);
    
    const {data, error} = await services.range(0,9);

    if (error) {
      console.error('Error al obtener los servicios:', error.message);
      return;
    }
    if (data) {
      servicesData.value = data; // Almacena los datos en la variable externa
    }
}

const clearState = ()=>{
  text_search.value = '';
  selectFilter.value = '';
}

onMounted(() => {
  viewServices();

})

</script>
  
<style  scoped>

.services{
  display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 2rem;
}

/* // filter */
.filterBx{
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid #8080808a;
  margin-bottom: 10px;
}
.filter-btns{
    width: 70%;
}
.filter-btn{
  background: none;
    cursor: pointer;
    border: none;
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
    height: 50px;
    color: white;
    position: relative;
    padding: 10px;
    border-radius: 8px;

}
/* .filter-btn::after{
  content: "";
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 0;
    background-color: white;
    transition: all 0.2s ease-in-out;

} */
.filter-btn:hover, .filter-btn_active{
    color: white;
    background-color: #2e2e2e;

}
/* .filter-btn:hover::after{
    width: 100%;
} */
/* active button */
.active-btn{
    color: #555;
}
.active-btn::after{
    width: 100%;
}

.filterBx_search{
  position: relative;
  width: 30%;
  display: flex;
  justify-content: flex-end;
}

/* search  start*/
.header_container_head_search_bx{
  position: relative;
  height: 40px;
  width: 250px;
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.header_container_head_search_bx_input{
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  background: #ffffff4d;
  outline: none;
  padding: 0 60px 0 20px;
  font-size: 15px;
  opacity: 1;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.137);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.header_container_head_search_bx_input::placeholder{
  color: white;
}
.header_container_head_search_bx_iconBx{
  position: absolute;
  right: 5px;

  top: 50%;
  transform: translateY(-50%);
  height: 35px;
  width: 35px;
  background: #434354;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  z-index: 1;
  transform: translateY(-50%) rotate(360deg);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.header_container_head_search_bx .cancel-icon{
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%) rotate(360deg);
  font-size: 28px;
  color: white;
  cursor: pointer;
  transition: all 0.5s 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.header_container_head_search_bx .search-data{
  text-align: center;
  padding-top: 7px;
  color: #fff;
  font-size: 18px;
  word-wrap: break-word;
  display: none;

}


/* card service start*/
.street{
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    color: hsla(0,0%,100%,.6);;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.carousel.pointer-event {
    touch-action: pan-y;
    max-height: 300px;
    overflow: hidden;
  
}




/* card service end */
@media(max-width:850px){
  .services{
    max-width: 600px;
    padding: 0 1rem;

  }

  /* filter bx start -- */
  .filterBx{
    flex-direction: column-reverse;
    height: auto;
  }
  .filter-btns{
    width: 100%;
    margin: 20px 0 10px;
  }

  /* filter bx end -- */


  /* search start --- */

  .header_container_head_search{
    width: 100%;
  }
  .header_container_head_search_bx{
    width: 100%;
  }

  .filterBx_search{
    justify-content: flex-start;
    width: 100%;
  }
  /* search end */
}

@media(max-width:650px){
  /* services start*/
  .services{
    padding: 0 1.4rem;
  }

  .filter-btn{
    margin-right: 8px;
  }
}
</style>