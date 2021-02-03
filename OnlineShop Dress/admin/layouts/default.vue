<template>
  <div class="wrapper">
    <!-- Sidebar -->     
    <Sidebar/>
    <!-- Page Content -->
    <div id="content">
        <!-- top navbar -->
        <Navbar/>
        <!-- main section -->
        <Nuxt />
    </div>  
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
</style>
