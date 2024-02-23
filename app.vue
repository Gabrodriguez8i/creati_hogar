<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>


</template>

<script setup>
  useSeoMeta({
    title: 'Creati Hogar',
    ogTitle: 'Page reservation',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    'view-transition': 'same-origin',
  });

  useHead({
    link:[
    {
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        integrity: 'sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi',
        rel: 'stylesheet',
        crossorigin: 'anonymous',
        defer: true
      },

	//   {
    //     href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
    //     integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
    //     crossorigin: 'anonymous',
    //     defer: true
    //   },
    ],
    script:[
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
        crossorigin: 'anonymous',
        defer: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3',
        crossorigin: 'anonymous',
        defer: true
      },
      {
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
        defer: true
      },
      {
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
        type: 'module',
        defer: true
      },
      {
        src: 'https://unpkg.com/phosphor-icons',
        defer: true
      },
    ]
  })
</script>

<style lang="scss">


// .page-left-enter-active,
// .page-right-enter-active,
// .page-left-leave-active,
// .page-right-leave-active {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   transition: all 150ms linear;
// }

// .page-left-enter-from, .page-right-leave-to {
//   transform: translateX(100%);
// }

// .page-left-leave-to, .page-right-enter-from {
//   transform: translateX(-100%);
// }

// .page-left-enter-to, .page-right-enter-to {
//   transform: translateX(0);
// }



//STYLE -------------------------------------------------------------------



  
  /* PRODUCT SECTION */
  
  .product {
	position: relative;
	overflow: hidden;
	padding: 2rem;
  }
  
  .product-container {
	max-width: 120rem;
	margin-left: 4rem;
	display: flex;
	overflow-x: auto;
	scroll-behavior: smooth;
  }
  
  .product-container::-webkit-scrollbar {
	display: none;
  }
  
  .product-card {
	display: grid;
	justify-content: center;
	width: 10rem;
	color: #888;
	/* height: 10rem; */
	margin-right: 2rem;
	cursor: pointer;
  }
  
  .product-card:hover {
	color: #000;
  }
  
  .product-card::after {
	content: "";
	margin-top: 1rem;
	width: 0;
	height: 0.3rem;
	background-color: rgba(153, 153, 153, 0.536);
	top: 0;
  }
  
  .product-card:hover::after {
	width: 100%;
  }
  
  .product-image {
	position: relative;
	width: 3rem;
	justify-self: center;
	/* height: 10rem; */
	overflow: hidden;
  }
  
  .product-thumb {
	width: 100%;
	/* height: 100%; */
	object-fit: cover;
  }
  
  .card-btn {
	position: absolute;
	bottom: 1rem;
	left: 50%;
	transform: translate(-50%);
	padding: 1rem;
	width: 90%;
	text-transform: capitalize;
	border: none;
	outline: none;
	background: #fff;
	border-radius: 5px;
	transition: 0.5s;
	cursor: pointer;
	opacity: 0;
  }
  
  .product-card:hover .card-btn {
	opacity: 1;
  }
  
  .card-btn:hover {
	background: #009688;
	color: #fff;
  }
  
  .product-info {
	text-align: center;
	width: 12rem;
	height: 100%;
	/* padding-top: 1rem; */
  }
  
  .product-brand {
	/* text-transform: uppercase; */
	font-size: 1.3rem;
  }
  
  .pre-btn,
  .nxt-btn {
	border: none;
	position: absolute;
	top: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
	cursor: pointer;
	z-index: 9;
  }
  
  .pre-btn {
	left: 3%;
  }
  
  .nxt-btn {
	right: 13%;
  }
  
  .btn-icon {
	height: 1.6rem;
	width: 1.6rem;
	border: 1px solid;
	padding: 0.8rem;
	border-radius: 100px;
	color: #000;
  }
  
  .pre-btn .btn-icon,
  .nxt-btn .btn-icon {
	opacity: 0.2;
  }
  
  .pre-btn:hover .btn-icon,
  .nxt-btn:hover .btn-icon {
	box-shadow: 0 0 0.8rem rgba(46, 44, 44, 0.4);
  }
  
  .menu-div-2 {
	width: 10rem;
	height: 5rem;
	margin-left: 6rem;
	padding: 1rem !important;
	justify-content: center;
  }
  
  .menu-div-2 p {
	font-size: 1.4rem;
	margin-bottom: 0;
  }
  
  .main {
	margin-top: 8rem;
	padding-bottom: 10rem;
  }
  
  .section-lets {
	padding: 0 8rem ;
  }
  
  .let {
	position: relative;
	border-radius: 5px;
	cursor: pointer;
  margin-bottom: 30px;
  }
  
  .heart-icon {
	height: 5rem;
	width: 5rem;
	position: absolute;
	padding: 1rem;
	color: #fff;
	top: 0;
	right: 0;
	z-index: 9;
	cursor: pointer;
  }
  
  .heart-icon:active {
	transform: scale(0.97);
  }
  
  .carousel-inner {
	border-radius: 8px;
  }
  
  .carousel-item img {
	height: 38rem;
  }
  
  .let-title {
    color: hsla(0,0%,100%,.6);
    font-size: 11px;
    line-height: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .let-title-principal{
    font-size: 16px;
    font-weight: 700;
  }
  
  .let-price-details {
	display: flex;
	flex-direction: column;
	margin-top: 1.6rem !important;
	padding: 1rem;
  }
  .let-titile-footer{
    font-size: 14px;
    display: flex;
    gap: 10px;
  }
  
  // .price {
	// margin-top: 1rem;
  // }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
	background-color: #222 !important;
	border-radius: 100px;
	padding: 1.4rem;
	fill: #000;
	opacity: 0;
  }
  
  .let:hover .carousel-control-prev-icon {
	opacity: 1;
  }
  
  .let:hover .carousel-control-next-icon {
	opacity: 1;
  }
  
  .carousel-indicators button {
	width: 0.7rem !important;
	height: 0.7rem !important;
	border-radius: 100% !important;
  }
  






// // QUERIES---------------------------------------------------------------------------------------------------
// @media (max-width: 1200px) {
// 	.grid-container {
// 	  grid-template-columns: 1fr 1fr 1fr;
// 	}
//   }
  
//   @media (max-width: 1000px) {
// 	.grid-container {
// 	  grid-template-columns: 1fr 1fr;
// 	}
//   }
  
//   @media (max-width: 850px) {
// 	.grid-container {
// 	  grid-template-columns: 1fr 1fr;
// 	}
  
// 	.logo {
// 	  display: none !important;
// 	}
  
// 	.nav-items-2 {
// 	  display: none !important;
// 	}
//   }
  
//   @media (max-width: 650px) {
// 	.grid-container {
// 	  grid-template-columns: 1fr 1fr;
// 	}
  
// 	.section-lets {
// 	  padding: 0 3rem !important;
// 	}
//   }
  
//   @media (max-width: 450px) {
// 	.grid-container {
// 	  grid-template-columns: 1fr;
// 	}
  
// 	.section-lets {
// 	  padding: 0 2rem !important;
// 	}
  
// 	.any-week {
// 	  display: none;
// 	}
  
// 	.add-guests-link {
// 	  display: none !important;
// 	}
  
// 	.nav-items {
// 	  gap: 40px;
// 	  max-width: 100%;
// 	}
  
// 	.menu-div-2 {
// 	  display: none;
// 	}
  
// 	.nxt-btn {
// 	  right: 1%;
// 	}
//   }

  


</style>