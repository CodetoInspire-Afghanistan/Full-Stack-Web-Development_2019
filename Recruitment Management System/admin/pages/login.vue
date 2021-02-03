<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(images/bg-01.jpg);">
          <span class="login100-form-title-1">
            Sign In
          </span>
        </div>

        <form>
          <h3>Log In</h3>
          <!-- email -->
          <div class="form-group">
              <label for="name">Email</label>
              <input type="email" class="form-control form-control-sm" id="email" v-model="email">
          </div>
          <!-- password -->
          <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control form-control-sm" id="password" v-model="password">
              <small id="emailHelp" class="form-text text-muted">
                  Password must be at least 6 characters</small>
          </div>
          <!-- signin btn -->
          <div class="form-group">
              <button @click="onLogin" type="button" 
              class="form-control form-control-sm btn custom-btn custom-bg-orange">
              Sign In</button>
          </div>
          <hr>
          Don't have an account? <nuxt-link to="/signup" class="custom-link-color">Sign Up</nuxt-link>
         </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    middleware: "auth",
    auth: "guest",
    layout: "none",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async onLogin() {
            try {
                this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this.password
                         }
                })

                this.$router.push("/")
            } catch (err) {
                console.log(err)
            }
        }
    }
}


</script>

<style>
</style>
