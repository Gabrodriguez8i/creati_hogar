<template>
<div id="map"></div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
    onMounted(() => {
        console.log('MAPTILER_HREF: ', runtimeConfig.public.MAPTILER_HREF);
        console.log('MAPTILER_SCRIPT: ', runtimeConfig.public.MAPTILER_SCRIPT);

        useHead({
        link:[
        {
            href: runtimeConfig.public.MAPTILER_HREF,
            rel:"stylesheet",
        }
        ],
        script:[
        {
            src: runtimeConfig.public.MAPTILER_SCRIPT,
            defer: true,
            onLoad: initializeMap
        }

        ]
    })


    })

    setTimeout(() => {
            initializeMap()
    }, 2500);
    
    function initializeMap() {
        console.log('initializeMap: ', maptilersdk);
        maptilersdk.config.apiKey = runtimeConfig.public.MAPTILER_KEY;
        const map = new maptilersdk.Map({
            container: 'map', // container's id or the HTML element to render the map
            center: [16.62662018, 49.2125578], // starting position [lng, lat]
            zoom: 10, // starting zoom
            style: `https://api.maptiler.com/maps/satellite/style.json?key=${runtimeConfig.public.MAPTILER_KEY}` // URL del estilo oscuro
        });

        // Añadir un marcador
        const marker = new maptilersdk.Marker()
        .setLngLat([16.62662018, 49.2125578])
        .addTo(map)
        .setPopup(new maptilersdk.Popup().setHTML("<h3 class='mapPopUp_title'>Descripción del marcador</h3><p class='mapPopUp_description'>Esta es una descripción personalizada del marcador. <a class='mapPopUp_link' href='https://www.google.com/maps/search/?api=1&query=48.8584,2.2945' target='_blank'>Para obtener la ubicación exacta presione aquí. </a> </p>"));
    }
    </script>

    <style>
    #map{
        height: 100%;
    }
    .mapPopUp_title,.mapPopUp_description{
        color: black;
    }

    .maplibregl-popup-close-button{
        padding: 5px;
        outline: none;
        border: none;
    }
    .mapPopUp_link{
        color: rgb(0, 60, 139);
        outline: none;
        border: none;

    }
    .mapPopUp_link:hover{
        color: rgb(0, 23, 228);
    }
    </style>