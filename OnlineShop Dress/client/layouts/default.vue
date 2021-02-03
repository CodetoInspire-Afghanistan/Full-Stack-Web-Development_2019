<template>
  <div>
    <headerVue/>
    <Nuxt />
    <footerVue/>
  </div>
</template>
<script>
import headerVue from '../components/header'
import footerVue from '../components/footer'
export default {
  components: {
    headerVue,
    footerVue,
  }
}
</script>
<style>
</style>
