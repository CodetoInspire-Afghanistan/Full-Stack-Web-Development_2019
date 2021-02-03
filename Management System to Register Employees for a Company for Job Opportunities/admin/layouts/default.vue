<template>
    <div>
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
    </div>
</template>
<script>
    import SidebarVue from '../components/Sidebar'
    import NavbarVue from '../components/Navbar'

    export default {
        components: {
            SidebarVue,
            NavbarVue
        }
    }   
</script>
<style>

</style>
