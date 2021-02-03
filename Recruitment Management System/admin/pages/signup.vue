<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(images/bg-01.jpg);">
          <span class="login100-form-title-1">
            Sign Up
          </span>
        </div>
        <form>
          <h3>Create account</h3>
          <div class="form-group">
              <label for="name">Your name</label>
              <input type="text" class="form-control form-control-sm" id="name" v-model="name">
          </div>
          <div class="form-group">
              <label for="name">Email</label>
              <input type="email" class="form-control form-control-sm" id="email" v-model="email">
          </div>
          <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control form-control-sm" id="password" v-model="password">
              <small id="emailHelp" class="form-text text-muted">
                  Password must be at least 6 characters</small>
          </div>
          <div class="form-group">
              <button @click="onSignup" type="button" 
              class="form-control form-control-sm btn custom-btn custom-bg-orange">
              Create an Account</button>
          </div>
          <hr>
          Already have an account? <nuxt-link to="/login" class="custom-link-color">Sign In</nuxt-link>
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
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
  async onSignup() {
    try {
        let data = {
            name: this.name,
            email: this.email,
            password: this.password
        }

        let response = await this.$axios.$post("/api/auth/signup", data)
        
        console.log("--------------",response.success)

        if(response.success) {
          this.$router.push("/")
          
            this.$auth.loginWith("local", {
                data: {
                    email: this.email,
                    password: this.password
                }
            })

            
        }
    } catch (err) {
        console.log(err)
    }
  }

}
}
</script>

<style>
</style>
