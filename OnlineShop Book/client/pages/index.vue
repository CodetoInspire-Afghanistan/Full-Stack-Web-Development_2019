<template>
  <div class="container">
    <!-- feature book section -->
    <featureBookVue/>
    <!-- Best seller section -->
    <h4 class="mt-5 d-inline-block px-3 py-1 rounded custom-bg-orange">Best Seller</h4>
    <div class="row">
      <div class="col-md-4 pb-4" v-for="book in books" :key="book._id">
        <div class="card">
          <div class="card-img-top" style="height:300px; overflow:hidden;">
            <img :src="'/'+book.photo" alt="..." width="100%">
          </div>
          <div class="card-body">
            <div class="row">
              <h5 class="col card-title"><a href="" class="pr-3">{{ book.title }}</a></h5>
              <span class="col-4" style="font-size: 12px;">jan 18, 2021</span>
            </div>
            <p>by <a href="#">{{ book.author.name }}</a></p>
            <div class="row">
              <p class="col">${{ book.price }}</p>
              <a href="#" class="col-2 btn custom-bg-orange">cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import featureBookVue from '../components/featureBook.vue'

export default {
  components: {
    featureBookVue
  },
  async asyncData({$axios}) {
    const bookResponse = await $axios.$get('http://localhost:3000/api/books')
    return {
      books: bookResponse.books
    }
  }
}
</script>

<style>
</style>
