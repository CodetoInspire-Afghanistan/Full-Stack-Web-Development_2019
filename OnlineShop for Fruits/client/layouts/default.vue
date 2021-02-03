<template>
  <div>
    <headerVue/>
    <Nuxt />
    <footerVue/>
  </div>
</template>

<script>
import headerVue from '../components/header.vue'
import footerVue from '../components/footer.vue'

export default {
  components:{
    headerVue,
    footerVue
  }
}
</script>
<style>
</style>
