<template>
<div class="property_container_info_right_card">

  <div class="property_container_info_right_card_head">
    <span class="property_container_info_right_card_head_price">
      ${{ dataCardReserve.priceBase }}
    </span>
    Precio por noche
  </div>

  <!-- CALENDAR -->
  <div class="property_container_info_right_card_calendary">
      <ClientOnly>
        <VDatePicker width="100% !important" :color="selectedColor" v-model.range="range" :disabled-dates="disabledDates" is-dark="dark" borderless transparent />
      </ClientOnly>
  </div>

  <div class="property_container_info_right_card_buttons">
    <button @click="handlePay()" class="property_container_info_right_card_Pay_reserveBtn">Reservar ${{ $util_calcularCostoReserva($util_formatDate(range.start, 'MDY'), $util_formatDate(range.end, 'MDY'), dataCardReserve.priceBase ) }}</button>
    <!-- <NuxtLink :to="`/pay?checkIn=${range.start}&checkOut=${range.end}&property=${dataCardReserve.dataService.id}`" class="property_container_info_right_card_Pay_reserveBtn">Reservar ${{ $util_calcularCostoReserva($util_formatDate(range.start, 'MDY'), $util_formatDate(range.end, 'MDY'), dataCardReserve.priceBase ) }}</NuxtLink> -->
    <!-- <span href="#" class="property_container_info_right_card_Pay_reserveBtn" @click="clearRange">Limpiar</span> -->
  </div>

</div>

</template>

<script setup>
// props -------- 
let props = defineProps({
  dataCardReserve:{
    required: true,
    type: Object
  }
});
const {$util_formatDate, $util_calcularCostoReserva } = useNuxtApp()

// States -------- 
const range = ref({
  start: $util_formatDate(new Date(), 'MDY'),
  end: $util_formatDate(new Date(), 'MDY'),
});

const selectedColor = ref('gray');
const disabledDates = ref([
  {
    repeat: {
      weekdays: [4, 5],
    },
  },
]);


// Methods ----------

// Pagar servicio
const handlePay = async ()=>{
  const {data,error,pending} = await useFetch('/api/stripe/stripe',{
    method: 'POST',
    body: props.dataCardReserve
  });
  setTimeout( async () => {
    console.log("dataPay.value.url: ", data.value.session.url);
    await navigateTo(data.value.session.url,{
    external: true
  })
  }, 1500);
}

</script>

<style scoped>

.property_container_info_right_card {
  display: flex;
  padding: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.7em;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
  background: rgb(14 14 14/1);
  width: 100%;
  min-width: 350px;

}

.property_container_info_right_card_calendary{
  width: 100%;
    display: flex;
    justify-content: center;
}



/* total cost */

.property_container_info_right_card_head{
  font-size: 0.9em;
  line-height: 1.125em;
  font-weight: 500;
  color: hsla(0, 0%, 100%, 0.6);
  padding-top: 0.7em;
}

.property_container_info_right_card_head_price{
  font-weight: 700;
  font-size: 1em;
}

.property_container_info_right_card .total p {
  color: rgba(0, 0, 0, 0.8);
} 

.property_container_info_right_card_buttons{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.property_container_info_right_card_Pay_reserveBtn {
  text-align: center;
  background-image: linear-gradient(to right, #e61e4d, #d70566);
  padding: 1em 0;
  border-radius: 0.5em;
  color: white;
  font-size: 0.9em;
  margin: 0.4em 0 0 0;
  font-weight: 600;

}


@media (max-width: 1100px){
.property_container_info_right_card_head{
    height: 35px;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 5px;
  }
}

</style>