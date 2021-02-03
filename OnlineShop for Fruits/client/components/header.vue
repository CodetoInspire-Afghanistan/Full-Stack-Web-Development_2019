<template>
<div>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
  <div class="row">
    <div class="span12">
      <div class="head">
        <div class="row-fluid">
            <div class="span12">
                <div class="span6">
                    <h1 class="muted">CodeToInspire</h1>
                </div>
            </div>
        </div>

        <div class="navbar">
            <div class="navbar-inner">
                <div class="container">

                    <ul class="nav">
                        <li class="nav-item">
                            <nuxt-link to="#" class="nav-link">Home</nuxt-link>
                        </li>

                        <li class="nav-item">
                            <nuxt-link to="#" class="nav-link">Product</nuxt-link>
                        </li>

                        <li class="nav-item">
                            <nuxt-link to="#" class="nav-link">Cart</nuxt-link>
                        </li>
                        <li class="nav-item">
                                 <nuxt-link v-if="$auth.$state.loggedIn" class="nav-link" to="/profile">{{ $auth.$state.user.name }}</nuxt-link>
                                 <nuxt-link v-else class="nav-link" to="/login">Login</nuxt-link>
                        </li>

                         <li class="nav-item" v-if="$auth.$state.loggedIn">
                             <a class="nav-link" href="#" @click="onLogout">Logout</a>
                         </li> 
                    </ul>

                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
      methods: {
    async onLogout() {
      await this.$auth.logout()
    },
    onSearch(){
      this.$router.push({
        path: "/search",
        query: {title: this.query}
      })
    }
  }   
}
</script>

<style lang="scss" scoped>

</style>