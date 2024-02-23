<template>
  <main class="layoutDefault">
    <DefaultsHeaderAppHeader/>
    <section id="page" class="page">
      <slot/>
	</section>
  <DefaultsAppFooter/>
  </main>
</template>

<script setup>

</script>

<style >
.page{
  min-height: 100vh;
  overflow: hidden;
}



</style>