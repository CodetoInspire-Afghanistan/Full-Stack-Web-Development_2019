<template>
  	<!-- start body -->
		<div class="wrapper d-flex align-items-stretch">
		<!-- Side Bar -->
      <SidebarVue />

        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5">
        <!--  Navbar -->
          <NavbarVue/>
          
        <!-- Main Section  -->
          <Nuxt />
      </div>
		</div>
</template>

<script>
import SidebarVue from '@/components/Sidebar.vue'
import NavbarVue from '@/components/Navbar.vue';
export default {
  components: {
    SidebarVue,
    NavbarVue
  }
}
</script>

<style>
</style>
