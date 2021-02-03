<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <button type="button" id="sidebarCollapse" class="btn btn-primary">
            <i class="fa fa-bars"></i>
            <span class="sr-only">Toggle Menu</span>
          </button>
            <ul class="nav navbar-nav ml-auto">
              <li class="active">
                  <!-- <a href="/login" @click="logout" class="nav-link btn btn-warning" style="color: white;">logOut</a> -->
                  <span @click="logout" class="nav-link btn btn-warning" style="color: white;">logOut</span>
              </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
   methods: {
    async logout() {
      await this.$auth.logout();
       this.$router.push("/login")
    }
  } 
}

</script>

<style lang="scss" scoped>

</style>