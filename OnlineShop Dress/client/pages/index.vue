<template>
  <div class="container">
    <featureProductVue/>
        <div class="row" id="top-bar">
          <div class="col-md-4 pb-4 pt-5" v-for="product in products" :key="product._id">
             <div class="myCarousel">
								<ul class="thumbnails">												
									<li class="span3">
										<div class="product-box">
											<span class="sale_tag"></span>
											<p><nuxt-link :to="'/products/'+product._id"><img width="100%" :src="product.image" alt="product img" /></nuxt-link></p>
											<a href="" class="title">{{product.title}}</a><br/>
											<a href="" class="category">#{{product.code}}</a>
											<p class="price">{{product.price}}AF</p>
										</div>
									</li>
								</ul>
						 </div>
          </div>

              <pagination/>

        </div>
    </div>

</template>

<script>
import featureProductVue from '../components/featureProduct'
import pagination from '../components/pagination'

export default {
  components: {
    featureProductVue,
    pagination
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
