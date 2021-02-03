<template>
  <div class="wrapper d-flex align-items-stretch">
    <!-- sidebar -->
        <SidebarVue />

      <!-- Page Content  -->
    <div id="content" class="p-4 p-md-5">
      <!-- top navbar -->
          <NavbarVue />
      <!-- main section -->
        <Nuxt />
    </div>
  </div>
</template>

<script>
import NavbarVue from '../components/Navbar.vue'
import SidebarVue from '../components/Sidebar.vue'

export default {
  components: {
    SidebarVue,
    NavbarVue
  }
}
</script>
<style>
</style>
