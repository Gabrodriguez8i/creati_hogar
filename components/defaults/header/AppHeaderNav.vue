<template>
        <ClientOnly>
            <Icon class="left-btn" name="ic:outline-keyboard-arrow-left" size="30px"  />
        </ClientOnly>

        <ClientOnly>
            <Icon class="right-btn" name="ic:outline-keyboard-arrow-right" size="30px" />
        </ClientOnly>

        <ul class="tab-menu"  v-if="data?.categories">
            <!-- hay que poner la clase active si se le da click -->
            <li  class="tab-btn ">
                <ClientOnly>
                    <Icon name="material-symbols:background-grid-small-sharp" size="14px" color="white"  />
                </ClientOnly>
                <span class="tab_btn_text">Todos</span>
            </li>

            <li v-for="(category) in data.categories" class="tab-btn " :key="category.id">
                <ClientOnly>
                    <Icon :name="category.icon" size="14px" color="white"  />
                </ClientOnly>
                <span class="tab_btn_text">{{ category.name }}</span>
            </li>

        </ul>
</template>

<script setup lang="ts">

const {data} = await useFetch('/api/categories');

// ejecutar js que maneje el DOOM
onMounted(() => {
  useHead({
    script:[
      {
        src: "/jsDOM/tabMenuHeader.js",
        async: true
      }
    ]
  })
})


onMounted(()=>{
  window.addEventListener('scroll', function () {
      const header = document.getElementById('header');
      const navbar = document.querySelector('#navbarDown');
  
      // Verifica si los elementos existen antes de intentar acceder a sus propiedades
      if (header && navbar) {
          const height = header.clientHeight;
          header.classList.toggle('header_active', window.scrollY + 90 > height);
      }
  });
})
</script>

<style lang="scss" scoped>
    /* ===== Tab navigation content ===== */

.tab-menu {
  color: #434354;
    list-style: none;
    max-width: 800px;
    white-space: nowrap;
    border-radius: 50px;
    scroll-behavior: smooth;
    user-select: none;
    overflow: hidden;
    width: 94%;
    margin: 0 auto;
    padding: 0;
}

.tab-menu.dragging {
	scroll-behavior: unset;
	cursor: grab;
}

.tab-menu::-webkit-scrollbar {
	display: none;
}

.tab-btn {
	display: inline-block;
	margin: 0 4px;
	padding: 2px 20px;
	cursor: pointer;
	user-select: none;
	transition: background-color .3s ease;
  border-bottom: 1px solid  #2e2e4100;
}

.tab_btn_text{
	font-size: 14px;
	font-weight: 300;
  margin-left: 2px;
}

.tab-menu.dragging .tab-btn {
	pointer-events: none;
}

.tab-btn:hover {
	/* background-color: #2e2e41; */
  /* color: white; */
  border-bottom: 1px solid  white;
}

.tab-btn.active {
	/* background-color: #5b85ff; */
  border-bottom: 1px solid  white;


}

.left-btn,
.right-btn {
	position: absolute;
	color: #fff;
	font-size: 1.8em;
	padding: 5px;
	cursor: pointer;
  display: block;

}

.left-btn {
	left: -8px;
	background: linear-gradient(to left, transparent, #ffffff2f 80%);
	border-top-left-radius: 30px;
	border-bottom-left-radius: 30px;
	/* display: none; */
}

.right-btn {
	right: -8px;
	background: linear-gradient(to right, transparent, #ffffff2f 80%);
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}


</style>