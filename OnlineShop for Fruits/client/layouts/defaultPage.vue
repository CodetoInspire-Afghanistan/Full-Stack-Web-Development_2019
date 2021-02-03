<template>
  <div>
    <headerVue/>
    <Nuxt class="mt-5" />
    <footerVue/>
  </div> 
</template>

<script>
import headerVue from '../components/deafultHeader.vue'
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
