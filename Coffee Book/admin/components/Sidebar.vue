<template>
  <nav id="sidebar">
        <div class="sidebar-header">
            <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">CoffeBook</a>
            <!-- <div class="bottom-border pb-3">
            </div> -->
        </div>

        <ul class="list-unstyled components">
            <li class="active nav-item"><a href="#" class="nav-link text-white p-3 mb-2 current"><i class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
            
            <li class="nav-item">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="text-light fa-lg mr-3"></i>User</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <nuxt-link to="/userList/addUser">Add New User</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/userList/allUser">All Users</nuxt-link>
                    </li>
                </ul>
            </li>
            
            <li class="nav-item">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="text-light fa-lg mr-3"></i>Books</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <nuxt-link to="/listBook/addBook">Add New Book</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/listBook/allBook">All Books</nuxt-link>
                    </li>
                </ul>
            </li>
           
                <li>
                    <nuxt-link to="/amanat">Amanat Book</nuxt-link>
                </li>

                <li>
                    <nuxt-link to="/category">Categories</nuxt-link>
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