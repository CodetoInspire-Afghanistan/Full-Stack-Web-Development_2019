<template>
  <nav id="sidebar">
        <div class="sidebar-header">
            <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Online Shop</a>
            <div class="bottom-border pb-3">
            <img src="/images/admin.png" width="50" class="rounded-circle mr-3">
            <a href="#" class="text-white">Admin</a>
            </div>
        </div>

        <ul class="list-unstyled components">
            <li class="nav-item"><nuxt-link to="/" class="nav-link text-white p-3 mb-2 current"><i class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</nuxt-link></li>
            
            <li class="nav-item">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fas fa-shopping-cart text-light fa-lg mr-3"></i>Product</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <nuxt-link to="/products">Add New</nuxt-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <nuxt-link to="/categories/" ><i class="fas fa-list text-light fa-lg mr-3"></i>Category</nuxt-link>
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