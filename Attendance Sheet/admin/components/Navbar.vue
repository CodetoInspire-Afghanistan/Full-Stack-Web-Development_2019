<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                    <nuxt-link v-if="$auth.$state.loggedIn" class="nav-link" to="/user/u">{{$auth.$state.user.name}}</nuxt-link>
                    <nuxt-link v-else class="nav-link" to="/user/login">Login</nuxt-link>
                </li>
               
                 <li class="nav-item" v-if="$auth.$state.loggedIn">
                 <a class="nav-link" href="#" @click="onLogout">Logout</a>
                 </li> 
              </ul>
            </div>
          </div>
        </nav>
</template>

<script>
export default {
 methods: {
    async onLogout() {
      await this.$auth.logout()
      this.$router.push("/user/login")
    }
  }
}
</script>

<style>

</style>