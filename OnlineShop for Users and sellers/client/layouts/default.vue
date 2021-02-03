<template>
  <div>
    <!-- Header start -->
    <TopHeaderVue/>
    <!-- Header end --> 
      <Nuxt />
    <!-- footer start -->
    <footerVue/>
    <!-- footer end -->
    
  </div>
</template>
<script>
import footerVue from '../components/footer.vue'
import TopHeaderVue from '../components/TopHeader.vue'

export default {
  components:{
    TopHeaderVue,
    footerVue
  }
  
}
</script>
<style>

</style>
