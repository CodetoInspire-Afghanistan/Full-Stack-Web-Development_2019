<template>
  <div>
     <h4 class="mt-5 d-inline-block px-3 py-1 rounded custom-bg-orange">All products</h4>
        <div class="row">
          <div class="col-md-4 pb-4 pt-5" v-for="product in products" :key="product._id">
             <div class="myCarousel">
                <ul class="thumbnails">												
                    <li class="span3">
                        <div class="product-box">
                            <p><nuxt-link :to="'/products/'"><img width="100%" :src="product.image" alt="product img" /></nuxt-link></p>
                            <p class="title">{{product.title}}</p><br/>
                            <p class="category">#{{product.code}}</p>
                            <p class="price">{{product.price}}AF</p>
                        </div>
                    </li>
                </ul>
			 </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  async asyncData({$axios}) {
    const productResponse = await $axios.$get("http://localhost:3000/api/products")
    return {
      products: productResponse.products
    }
  }
}
</script>

<style>
</style>

