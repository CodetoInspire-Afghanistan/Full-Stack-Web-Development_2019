<template>
   <nav id="sidebar">
          <div class="sidebar-header">
              <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">E-commerce Website</a>
              <div class="bottom-border pb-3">
              <img src="/images/admin.png" width="50" class="rounded-circle mr-3">
              <a href="#" class="text-white">Fatemeh Rezwani</a>
              </div>
          </div>

          <ul class="list-unstyled components">
              <li class="active nav-item"><a href="#" class="nav-link text-white p-3 mb-2 current"><i class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
              <li class="nav-item">
                  <a href="http://localhost:9000/" target="_blank" ><i class="fa fa-institution(alias) text-light fa-lg mr-3"></i>Web site</a>
              </li>
              <li class="nav-item">
                  <a href="/user/user" ><i class="fa fa-user text-light fa-lg mr-3"></i>Users</a>
              </li>
              <li class="nav-item">
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fas fa-shopping-cart text-light fa-lg mr-3"></i>Product</a>
                  <ul class="collapse list-unstyled" id="homeSubmenu">
                      <li>
                          <nuxt-link to="/product/add-product">Add New Product</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/product/all-product">All Products</nuxt-link>
                      </li>
                  </ul>
              </li>
              <li class="nav-item">
                  <a href="/category/category" ><i class="fas fa-list text-light fa-lg mr-3"></i>Category</a>
              </li>
              <li class="nav-item">
                  <a href="/vendor/vendor" ><i class="fas fa-user text-light fa-lg mr-3"></i>Vendors</a>
              </li>
          </ul>

      </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>