<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="">
      <div class="container-fluid">
      <!-- Brand -->
      <nuxt-link class="navbar-brand" to="/"><span>Online</span> Shop</nuxt-link>

      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto col-md-6">
          <li class="nav-item col-md-12">
            <span class="oi" data-glyph="magnifying-glass"></span>
            <input placeholder="Search..." type="text" class="custom-search-box">
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
           
          <li class="nav-item">
            <nuxt-link v-if="$auth.$state.loggedIn" class="nav-link" to="/profile">{{ $auth.$state.user.name }}</nuxt-link>
            <nuxt-link v-else class="nav-link" to="/login">LogIn</nuxt-link>
          </li> 
          <li class="nav-item" v-if="$auth.$state.loggedIn">
            <a class="nav-link" href="#" @click="onLogout">Logout</a>
          </li> 
        
        </ul>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    async onLogout() {
      await this.$auth.logout()
      this.$router.push("/login")
    }
  }
}
</script>

<style>
</style>