<template>
    <div class="container">
        <div class="row">
            <div class="col md-4 mx-auto">
                 <div class="container-login100">
                     <div class="wrap-login100">
                         <div class="login100-form-title" style="background-image: url(images/bg-01.jpg);">
                                <span class="form-title-1">
                                    Sign Up
                                </span>
                            </div>
                        <form>
                            <div class="form-group">
                            <label for="email">Name:</label>
                            <input type="text" class="form-control form-control-sm" id="name" v-model="name">
                            </div>
                            <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control form-control-sm" id="email" v-model="email">
                            </div>
                            <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control form-control-sm" id="pwd" v-model="password">
                            </div>
                            <div class="form-group">
                            <button @click="onSignup" type="button" class="form-control form-control-sm btn btn-primary">Sign up</button>
                            </div>
                            <hr>
                            Already have account?<nuxt-link to="/login"> Login</nuxt-link>
                        </form>
                 </div>
                </div>
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

                let response = await this.$axios.$post("http://localhost:3000/api/auth/signup", data)
                
                console.log(response)

                if(response.success) {
                    this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    })

                    this.$router.push("/")
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