<template>
  <div>
    <headerVue/>
    <Nuxt />
    <footerVue/>
  </div>
</template>
<script>
import footerVue from '../components/footer'
import headerVue from '../components/header.vue'
export default {
  components:{
    headerVue,
    footerVue
  }
}
</script>
<style>

</style>
