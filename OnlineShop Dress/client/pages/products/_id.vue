<template>
	<div class="container">
		<br>
		<br>
		<br>
		<br>
		<h4 class="mt-5 d-inline-block rounded pt-5" style="color: #ffc107;">Products Details</h4>
		<div class="row" id="top-bar">
			<div class="col-md-8">
			<br>
			<!-- product item -->
			<div class="row">
				<div class="col-md-6">
                	<div class="span4">
                   	 <img width="100%" class="thumbnail" :src="products.image" alt="">
                	</div>
				</div>
				<div class="col-md-6 pl-md-5">
					<div class="row">
						<div class="col"><b style="font-size: 23px;">{{products.title}} </b></div>
					</div>
				    <hr>
				    <div class="p-2">
						<p> See all properties of this product</p>
						<div class="row pt-3">
							<div class="span5">
								<address>
									Product Color: <span>{{products.color}}</span><br>
									Product Code: <span>#{{products.code}}</span><br>
									Availability: <span>{{products.stockQuantity}}</span><br>
									<h6><strong>Price: {{products.price}} AF</strong></h6>		
								</address>	
								<div class="form-group row">
									<div class="col-sm">
										<button @click="incrementCartNumber" class="form-control">
										<span class="pull-left" id="basic-addon1">@</span>
										Add to Cart
										</button>
									</div>
									<label class="mr-1">Qty:</label>
									<div class="card p-2">{{cartNumber}}</div>
								</div>	
							</div>
						</div>
				    </div>
				    <hr>
				    <div>
					   Size:
					   <span>{{products.size}}</span>
				    </div>
					<br>
					<div class="form-group row">
						<div class="col-sm">
							<button class="form-control">
								<span class="pull-left" id="basic-addon1">@</span>Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
			</div>
			<!-- cart sidebar -->
			<!-- <div class="col-md-4">
				<br>
					<div class="block">
							<h4 class="title">
								<span class="pull-left"><span class="text">Randomize</span></span>
								<span class="pull-right">
									<a class="left button" href="#myCarousel" data-slide="prev"></a><a class="right button" href="#myCarousel" data-slide="next"></a>
								</span>
							</h4>
							<div id="myCarousel" class="carousel slide">
								<div class="carousel-inner">
									<div class="active item">
										<ul class="thumbnails listing-products">
											<li class="span3">
												<div class="product-box">
													<span class="sale_tag"></span>												
													<a href="/"><img width="100%" class="thumbnail" :src="products.image" alt=""></a><br/>
													<a href="/" class="title">Fusce id molestie massa</a><br/>
													<a href="/" class="category">Suspendisse aliquet</a>
													<p class="price">{{products.price}}AF</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
				<br>
			</div> -->
	    </div>
	</div>
</template>

<script>

export default {
  layout: "defaultPage",
  data(){
      return{
          cartNumber:0
      }
  },
  async asyncData({$axios, params}) {
	const productResponse = await $axios.$get('/api/products/'+ params.id)
    return {
	  products: productResponse.product,
    }
  },
  methods:{
      async incrementCartNumber(){
          this.cartNumber++;
      }
  }
}
</script>

<style>
</style>