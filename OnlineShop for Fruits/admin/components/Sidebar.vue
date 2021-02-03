<template>
    	<nav id="sidebar">
				<div class="p-4 pt-5">
		  		<a href="#" class="img logo rounded-circle mb-5" style="background-image: url(/images/logo.jpg);"></a>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">
				<nuxt-link to="/" class="nav-link text-white p-3 mb-2 current"><i class="text-light fa-lg mr-3"></i>Home</nuxt-link>
	          </li>
            
	          <li>
	              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="text-light fa-lg mr-3"></i>Shop Pages</a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <nuxt-link to="/products">Add New Product</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/products/report">All Products</nuxt-link>
                </li>
              </ul>
	          </li>
            
	          <li>
				  <nuxt-link to="/category" ><i class="text-light fa-lg mr-3"></i>Category</nuxt-link>
	          </li>

             <li>
				  <nuxt-link to="/owner" ><i class="text-light fa-lg mr-3"></i>Owner</nuxt-link>
            </li>
            
	        </ul>

	        <div class="footer">
	        	
	        </div>

	      </div>
    	</nav>
</template>

<script>
export default {
    
}
</script>

<style>

</style>