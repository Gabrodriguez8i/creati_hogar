<template>
    <!---------------------------------- HEADER ------------------------------------>
    <header class="header" id="header">
      <section class="header_container" id="navbarDown">
          <!-- header HEAD -->
          <div class="header_container_head">
            <!-- search -->
            <!-- <div class="header_container_head_search">
              <div class="header_container_head_search_bx">
                <input class="header_container_head_search_bx_input" type="text" placeholder="Type to search..">
                <div class="header_container_head_search_bx_iconBx">
                  <ClientOnly>
                    <Icon name="ic:sharp-search" size="24px" />
                  </ClientOnly>
                </div>
              </div>
            </div> -->

            <!-- title -->
            <div class="header_container_head_title"  >
              <NuxtLink class="header_container_head_title_text" to="/">Creati Hogar</NuxtLink>
            </div>

            <!-- sub menu -->
            <div class="header_container_head_subMenu">
              <DefaultsHeaderAppHeaderToggle/>
            </div>
          </div>

          <!-- header FOOTER -->
          <!-- <div class="header_container_footer">
            <DefaultsHeaderAppHeaderNav/>
          </div> -->
      </section>
    </header>
</template>

<script setup >
import { Icon } from '#components'


// socials
const socials = [
{
    url: "https://instagram",
    name: "Linkedin",
    icon: "bx:bxl-linkedin"
  },
  {
    url: "https://instagram",
    name: "Instagram",
    icon: "mdi:instagram"
  },
  {
    url: "https://instagram",
    name: "Facebook",
    icon: "ri:facebook-fill"
  },
  {
    url: "https://instagram",
    name: "TikTok",
    icon: "ic:baseline-tiktok"
  },
  {
    url: "https://instagram",
    name: "YouTube",
    icon: "tabler:brand-youtube"
  },
]


onMounted(()=>{
  window.addEventListener('scroll', function () {
      const header = document.getElementById('header');
      const navbar = document.querySelector('#navbarDown');
  
      // Verifica si los elementos existen antes de intentar acceder a sus propiedades
      if (header && navbar) {
          const height = header.clientHeight;
          console.log("window.scrollY: ", window.scrollY );
          header.classList.toggle('header_active', window.scrollY + 50 > height);

      }
  });
})

</script>

<style scoped lang="scss">

.header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 30px 5px;
  z-index: 50;
  transition-duration: .3s;
  border-bottom: 1px solid #80808000;

}

.header_container{
	position: relative;
  display: flex;
  flex-direction: column;
}

.header_container_head{
  display: flex;
  justify-content: space-between;
  height: 40px;
}

// .header_container_head_search{
//   width: 30%;
// }
.header_container_head_title{
  width: 40%;
  display: flex;
  justify-content: flex-start;
}

.header_container_head_title_text{
  font-size: 28px;
    font-weight: 700;
    transition: all 0.1s ease-in;
    text-shadow: 2px 1px #0000006e;

}

.header_container_head_subMenu{
  display: flex;
  justify-content: flex-end;
  width: 30%;
  
}

  .header_container_footer {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: fit-content;
	margin: 0 auto;
}

.header_container_head_social{
  width: 30%;
  display: flex;
  justify-content: flex-end;
}

/* search start */
// .header_container_head_search_bx{
//   position: relative;
//   height: 40px;
//   width: 250px;
//   border-radius: 50%;
//   transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
// }

// .header_container_head_search_bx_input{
//   width: 100%;
//   height: 100%;
//   border: none;
//   border-radius: 50px;
//   background: #ffffff4d;
//   outline: none;
//   padding: 0 60px 0 20px;
//   font-size: 15px;
//   opacity: 1;
//   color: white;
//   border: 1px solid rgba(0, 0, 0, 0.137);
//   transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
// }

// .header_container_head_search_bx_input::placeholder{
//   color: white;
// }
// .header_container_head_search_bx_iconBx{
//   position: absolute;
//   right: 5px;

//   top: 50%;
//   transform: translateY(-50%);
//   height: 35px;
//   width: 35px;
//   background: #434354;
//   border-radius: 50%;
//   text-align: center;
//   line-height: 35px;
//   font-size: 20px;
//   color: white;
//   cursor: pointer;
//   z-index: 1;
//   transform: translateY(-50%) rotate(360deg);
//   transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
// }

// .header_container_head_search_bx .cancel-icon{
//   position: absolute;
//   right: -40px;
//   top: 50%;
//   transform: translateY(-50%) rotate(360deg);
//   font-size: 28px;
//   color: white;
//   cursor: pointer;
//   transition: all 0.5s 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
// }
// .header_container_head_search_bx .search-data{
//   text-align: center;
//   padding-top: 7px;
//   color: #fff;
//   font-size: 18px;
//   word-wrap: break-word;
//   display: none;

// }

/* search end */



/* social  start */

.header_container_head_social_wrapper .header_container_head_social_wrapper_button{
  display: inline-block;
  height: 28px;
  width: 28px;
  float: left;
  margin: 0 8px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  border: 1px solid rgba(128, 128, 128, 0.24);
  /* box-shadow: 0px 10px 10px rgba(0,0,0,0.1); */
  transition: all 0.3s ease-out;
  color: black;
  /* color: white; */

}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:hover{
  width: 100px;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button .header_container_head_social_wrapper_button_iconBx{
  display: inline-block;
    height: 26px;
    width: 26px;
    text-align: center;
    border-radius: 50px;
    box-sizing: border-box;
    line-height: 24px;
    transition: all 0.1s ease-out;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:hover .header_container_head_social_wrapper_button_iconBx{ 
  line-height: 25px;

}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:nth-child(1):hover .header_container_head_social_wrapper_button_iconBx{  
  color: #0077B5;
  background: #0077B5;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:nth-child(2):hover .header_container_head_social_wrapper_button_iconBx{
  color: #E1306C;
  background: #E1306C;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:nth-child(3):hover .header_container_head_social_wrapper_button_iconBx{
  color: #1877F2;
  background: #1877F2;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:nth-child(4):hover .header_container_head_social_wrapper_button_iconBx{
  color: #FF0000;
  background: #FF0000;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:nth-child(5):hover .header_container_head_social_wrapper_button_iconBx{
  color: #ff0000;
  background: #ff0000;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button .header_container_head_social_wrapper_button_iconBx .header_container_head_social_wrapper_button_iconBx_icon{
  height: 14px;
  width: 14px;
  line-height: 28px;
  transition: all 0.3s ease-out;
}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button:hover .header_container_head_social_wrapper_button_iconBx .header_container_head_social_wrapper_button_iconBx_icon{
  color: white;

}
.header_container_head_social_wrapper .header_container_head_social_wrapper_button .header_container_head_social_wrapper_button_text{
  font-size: 11px;
  font-weight: 500;
  line-height: 28px;
  margin-left: 4px;
  transition: all 0.3s ease-out;
  color: #000;
  text-decoration: none;
}


/* social end */






/* ===== Tab content ===== */
.tab-content {
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
}

.tab {
	position: absolute;
	top: 0;
	right: auto;
	bottom: 0;
	left: auto;
	max-width: 1100px;
	padding: 15px 50px;
	opacity: 0;

	transform: translateX(25px);
	content-visibility: hidden;
}

.tab.active {
	transform: translateX(0);
	content-visibility: visible;
	opacity: 1;
	transition: opacity 1s ease, transform 1s ease;
}

.tab .row {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px 0;
	gap: 30px;
}

.tab .img-card {
	position: relative;
	width: 450px;
	max-width: 450px;
	height: 300px;
	max-height: 300px;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 25px rgb(2, 2, 2, 0.1);
}

.tab .img-card img {
	width: 100%;
	object-fit: cover;
}

.right-column {
	max-width: 800px;
}

.info .city,
.info .description p {
	color: #fff;
	margin-bottom: 10px;
}

.info .city {
	font-size: 2em;
}

.country {
	color: #434354;
	font-size: 5em;
	font-weight: 700;
	text-align: center;
	text-shadow: 0 5px 25px rgb(2, 2, 2, 0.1);
}



/* HEADER ACTIVE START */

.header_active{
  background-color: rgba(0,0,0,.6);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid #80808057;
  /* padding: 20px 30px 20px; */
}

/* HEADER ACTIVE END */

/* ===== Media queries (max-width: 1050px;) ===== */
@media screen and (max-width: 1050px) {
	section {
		margin: 0 0;
	}

	.tab-nav-bar {
		margin: 65px 20px 40px 25px;
	}

	.tab {
		padding: 15px 25px;
	}

	.tab .row {
		flex-direction: column;
	}

	.tab .img-card {
		width: auto;
		max-width: 600px;
	}

	.country {
		font-size: 10vw;
		padding-bottom: 50px;
	}

}

@media (max-width:1075px){
  .header{
    padding: 15px 32px;
  }
  .left-btn,
.right-btn {
  width: 38px;
}
  .header_container_head_search, .header_container_head_social{
    display: none;
  }

  .header_container_head_title{
    width: 100%;
    justify-content: space-between;
  }

  .hamburger {
    display: block;
  }

  .header_container_head_title_text{
    font-size: 22px;
  }

  .header_active .header_container_head_title_text{
    font-size: 20px;
  }
  .tab-menu{
    width: 79%;
  }
  .header_container_footer{
    margin: 0 auto;
    width: 100%;
  }
  .tab-btn{
    margin: 0 1px;
    padding: 2px 12px;
  }
}

@media screen and (max-width: 650px) {
  .header{
    padding: 5px 15px;
  }
  .header_container_head_title{
    align-items: center;
  }

  .header_container_head_subMenu{
    padding: 5px 0px;
  }
  

}
</style>