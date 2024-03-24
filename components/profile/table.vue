<template>
        <main class="table" id="customers_table">
        <!-- <section class="table__header">
            <h1>Customer's Orders</h1>
            <div class="input-group">
                <input type="search" placeholder="Search Data...">
                <ClientOnly>
                    <Icon name="ic:sharp-search" size="24px" />
                </ClientOnly>
            </div>

        </section> -->
        <section v-if="dataTable.data" class="table__body">
            <table>
                <thead>
                    <tr>
                        <!-- <th> Customer <span class="icon-arrow">&UpArrow;</span></th> -->
                        <!-- <th> Location <span class="icon-arrow">&UpArrow;</span></th> -->
                        <th> Propiedad </th>
                        <th> Fecha  </th>
                        <th> Pago </th>
                        <th> Estado </th>
                        <th> Monto </th>
                    </tr>
                </thead>
                <tbody v-if="dataTable.data.length > 0">
                    <tr v-for="data in dataTable.data">
                        <td>
                            <nuxt-link :to="`/property/${data.product_id}`">{{ data.product_name }}</nuxt-link>
                        </td>
                        <td> {{ data.date_start }} - {{data.date_end}}</td>
                        <td> {{ data.created_at }} </td>
                        <!-- <td> Seoul </td> -->
                        <td>
                            <p v-if="data.state == 1" class="status delivered">Completado</p>
                            <p v-else class="status cancelled">Sin completar</p>
                        </td>
                        
                        <td> <strong> ${{ data.amount_total }} </strong></td>
                    </tr>
                </tbody>

                <tbody v-else style="padding: 20px; display: flex; ; align-items: center; width: 100%">
                    <tr>
                        <tr> Sin reservaciones... </tr>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
</template>

<script setup>
let props = defineProps({
    dataTable:{
        required: true,
        type: Object,
        default: {}
    },

})

</script>

<style scoped lang="scss">

* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: sans-serif;
}
@media print {
 .table, .table__body {
  overflow: visible;
  height: auto !important;
  width: 100% !important;
 }
}

/*@page {
    size: landscape;
    margin: 0; 
}*/

body {
    min-height: 100vh;
    background: url(images/html_table.jpg) center / cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

main.table {
    width: 82vw;
    height: auto;

    border-radius: 0.8rem;
    overflow: hidden;
}

.table__header {
    width: 100%;
    height: 10%;
    background-color: rgb(0 0 0 / 53%);
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.table__header .input-group {

    background-color:#ffffff4d;

    color: white;
    width: 25%;
    height: 60%;
    min-height: 50px;
    max-height: 55px;
    border-radius: 8px;
    padding: 0 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
}

.table__header .input-group:hover {
    width: 29%;
    box-shadow: 0 .1rem .4rem #0002;
}



.table__header .input-group input {
    width: 100%;
    padding: 0 .5rem 0 .3rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: white
}

.table__body {
    width: 100%;
    max-height: calc(89% - 1.6rem);
    // background-color: rgba(0, 0, 0, 0.733);
    background: #1e1e1e;

    margin: .8rem auto;
    border-radius: .6rem;

    overflow: auto;
    overflow: overlay;
}


.table__body::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
    border-radius: .5rem;
    background-color: #0004;
    visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{ 
    visibility: visible;
}


table {
    width: 100%;
}

td img {
    width: 36px;
    height: 36px;
    margin-right: .5rem;
    border-radius: 50%;

    vertical-align: middle;
}

table, th, td {
    border-collapse: collapse;
    // padding: 1.2rem;
    padding: 2rem;

    text-align: left;
}

thead th {
    position: sticky;
    top: 0;
    left: 0;
    background-color: rgb(21 21 21 / 100%);
    cursor: pointer;
    text-transform: capitalize;
}

tbody tr:nth-child(even) {
    background-color: rgb(27 27 27 / 41%);
}

tbody tr {
    --delay: .1s;
    transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
    opacity: 0;
    transform: translateX(100%);
}

tbody tr:hover {
    background-color: rgba(56, 56, 56, 0.4) !important;
}

tbody tr td,
tbody tr td p,
tbody tr td img {
    transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
    padding: 0;
    font: 0 / 0 sans-serif;
    transition: .2s ease-in-out .5s;
}

tbody tr.hide td img {
    width: 0;
    height: 0;
    transition: .2s ease-in-out .5s;
}

.status {
    padding: .4rem 0;
    border-radius: 2rem;
    text-align: center;
}

.status.delivered {
    background-color: #86e49d;
    color: #006b21;
}

.status.cancelled {
    background-color: #d893a3;
    color: #b30021;
}

// .status.pending {
//     background-color: #ebc474;
// }

// .status.shipped {
//     background-color: #6fcaea;
// }


@media (max-width: 1000px) {
    td:not(:first-of-type) {
        min-width: 12.1rem;
    }
}

thead th span.icon-arrow {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 1.4px solid transparent;
    
    text-align: center;
    font-size: 1rem;
    
    margin-left: .5rem;
    transition: .2s ease-in-out;
}

thead th:hover span.icon-arrow{
    border: 1.4px solid #f0ebf5;
}

thead th:hover {
    color: #ffffff;
}

thead th.active span.icon-arrow{
    background-color: #6c00bd;
    color: #fff;
}

thead th.asc span.icon-arrow{
    transform: rotate(180deg);
}

thead th.active,tbody td.active {
    color: #e4e4e4;
}


</style>