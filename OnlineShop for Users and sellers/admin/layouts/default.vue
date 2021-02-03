<template>
    <div class="wrapper">
      <!-- Sidebar -->     
     <SidebarVue/>
      <!-- Page Content -->
      <div id="content">
          <!-- top navbar -->
         <NavbarVue/>
          <!-- main section -->
          <Nuxt />
      </div>  
  </div> 

</template>
<script>
import NavbarVue from '../components/Navbar.vue'
import SidebarVue from '../components/Sidebar.vue'

export default {
  components:{
    NavbarVue,
    SidebarVue

  }
}
</script>

<style>

</style>
