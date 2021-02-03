<template>
    <div>
        <!-- Page Title start -->
        <div class="pageTitle">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-sm-6">
                    <h1 class="page-heading">Dashboard</h1>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="breadCrumb"><span>Welcome Jhon</span></div>
                </div>
                </div>
            </div>
        </div>
        <!-- Page Title End -->

        <div class="inner-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-4">
                        <ul class="usernavdash">
                        <li class="active"><a href="#"><i class="fa fa-tachometer" aria-hidden="true"></i>Dashboard</a></li>
                        <li><a href="add-product"><i class="fa fa-plus" aria-hidden="true"></i> Ads</a></li>
                        <li><a href="pending-ads"><i class="fa fa-desktop" aria-hidden="true"></i>Pending Ads</a></li>
                        <li><a href="#"><i class="fa fa-commenting" aria-hidden="true"></i>Feedback</a></li>
                        <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i> Favorite</a></li>
                        <li><a href="#"><i class="fa fa-paper-plane" aria-hidden="true"></i>Contact</a></li>
                        <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i> Account Setting</a></li>
                        <li><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
                        </ul>
                        <div class="adimages"> <img src="/images/large-ad.jpg" alt="google ad"> </div>
                    </div>
                    <div class="col-md-9 col-sm-8">
                        <ul class="row profilestat">
                        <li class="col-md-2 col-sm-4 col-xs-6">
                            <div class="inbox"> <i class="fa fa-eye" aria-hidden="true"></i>
                            <h6>10</h6>
                            <strong>Ad Views</strong> </div>
                        </li>
                        <li class="col-md-2 col-sm-4 col-xs-6">
                            <div class="inbox"> <i class="fa fa-tachometer" aria-hidden="true"></i>
                            <h6>2 <span>hr</span></h6>
                            <strong>Respond Time</strong> </div>
                        </li>
                        <li class="col-md-2 col-sm-4 col-xs-6">
                            <div class="inbox"> <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <h6>10</h6>
                            <strong>Ad Expire</strong> </div>
                        </li>
                        <li class="col-md-2 col-sm-4 col-xs-6">
                            <div class="inbox"> <i class="fa fa-user-o" aria-hidden="true"></i>
                            <h6>21</h6>
                            <strong>Followers</strong> </div>
                        </li>
                        <li class="col-md-2 col-sm-4 col-xs-6">
                            <div class="inbox"> <i class="fa fa-briefcase" aria-hidden="true"></i>
                            <h6>2</h6>
                            <strong>Business Pro</strong> </div>
                        </li>
                        <li class="col-md-2 col-sm-4 col-xs-6">
                            <div class="inbox"> <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <h6>8</h6>
                            <strong>Messages</strong> </div>
                        </li>
                        </ul>
                        <div class="instoretxt">
                            <div class="credit">Your on site available credit is: <strong>$99.00</strong></div>
                            <a href="#.">Update Package</a> <a href="#." class="history">Payment History</a> 
                        </div>
                        <div class="myads">
                            <h3>My Recent Ads</h3>
                            <ul class="searchList" v-for="product in products" :key="product._id">
                                <!-- ad start -->
                                <li>
                                <div class="row">
                                    <div class="col-md-2 col-sm-4">
                                    <div class="adimg"><img src="/images/ads/02.jpg" alt="Ad Name"></div>
                                    </div>
                                    <div class="col-md-10 col-sm-8">
                                    <div class="jobinfo">
                                        <div class="row">
                                        <div class="col-md-8 col-sm-7">
                                            <h3><a href="#.">{{product.title}}</a></h3>
                                            <div class="cateName"> <a href="#.">Cars</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="#.">{{product.category.type}}</a> </div>
                                            <div class="location"><i class="fa fa-user" aria-hidden="true"></i><span>{{product.vendor.name}}</span></div>
                                            <div class="clearfix"></div>
                                            <p class="mb-5">{{product.description}}</p>
                                            <div class="adverify"><a @click="onDeleteProduct(product._id, index)" href=""><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></div>
                                            <div class="adverify"><a @click="onEditProduct(product._id)" href="editProduct"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a></div>                      </div>
                                            <div class="col-md-4 col-sm-5 text-right">
                                                <div class="adprice">${{product.price}}</div>
                                                <div class="adverify"><i class="fa fa-check-square-o" aria-hidden="true"></i> Verified Seller</div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </li>
                                <!-- ad end --> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },

    async asyncData({$axios}){
        try{
            const productResponse = await $axios.$get('http://localhost:3000/api/products')
            return{
                products: productResponse.products
            }

        }catch(err){
            console.log(err)
        }
    },
    methods:{
        async onDeleteProduct(id, index){
            try{
            const result =await this.$axios.$delete('http://localhost:3000/api/products/'+id)
            if(result.status){
                this.products.splice(index, 1)
            }
            }catch(err){
            console.log(err)
            }
        
        },
        async onEditProduct(id){
            try{

            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>