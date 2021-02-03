<template>
	<div class="wrapper d-flex align-items-stretch">
    <!-- sidebar section -->
    
        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5">
        
        <!-- navbar section -->
          <NavbarVue/>

       <!-- main section -->
        <Nuxt />

      </div>
		</div>
</template>

<script>
import NavbarVue from '../components/Navbar.vue'


export default {
  components:{
      NavbarVue

  }
}
</script>

<style>

</style>