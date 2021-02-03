<template>
  <div class="container">
     <!-- <div class="row"> -->
        <nav class=" navbar-default navbar-expand-sm logo">
          <div class=" col-md-2 col-sm-3 col-xs-4"> <a href="index-2.html" class="logo"><img src="/images/logo.png" alt="" width="200" style="width: 100%"/></a>
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- Links -->
          <div class="col-md-10 col-sm-12 col-xs-12 link">
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="nav-item dropdown active"><a class="nav-link" href="/">Home</a> 

                  <li class="nav-item"><a class="nav-link"  href="/api/about">About us</a></li>
                  <li class="nav-item dropdown"><a class="nav-link" href="#">Ads <span class="caret"></span></a> 
                      <!-- dropdown start -->
                      <ul class="nav-item dropdown-menu">
                        <li class="nav-item"><a class="nav-link" href="/api/add-product">Add Product</a></li>
                        <li class="nav-item"><a class="nav-link" href="/api/productList">Products List</a></li>
                      </ul>
                      <!-- dropdown end --> 
                    </li>
                    <li class="nav-item"><a class="nav-link" href="/api/contact">Contact</a></li>
                    <li class=" nav-item postad">
                      <!-- <nuxt-link v-if="$auth.$state.loggedIn" class="nav-link" to="/api/dashboard">{{$auth.$state.user.name}}</nuxt-link> -->
                      <!-- <nuxt-link v-else class="nav-link" to="/register/Login">LogIn</nuxt-link> -->

                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/api/dashboard">Dashboard</a>
                    </li>
                    <li class="nav-item register"><a class="nav-link" href="/register/Login">Login</a></li>
                    <li class="nav-item register"><a class="nav-link" href="/register/signup">Sign Up</a></li>

                </ul>
            </div>
          </div>
        </nav>
     <!-- </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>