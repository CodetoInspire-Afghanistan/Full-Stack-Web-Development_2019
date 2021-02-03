<template>
     <div class="container">
        <div class="row">
            <div class="col md-4 mx-auto">
                 <div class="container-login100">
                     <div class="wrap-login100">
                         <div class="login100-form-title" style="background-image: url(images/bg-01.jpg);">
                                <span class="form-title-1">
                                    Sign In
                                </span>
                            </div>
                        <form>
                            <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control form-control-sm" id="email" v-model="email">
                            </div>
                            <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control form-control-sm controls" id="pwd" v-model="password">
                            </div>
                            <div class="form-group">
                            <button @click="onLogin" type="button" class="form-control form-control-sm btn btn-primary">Login</button>
                            </div>
                            <hr>
                            Don't have an account<nuxt-link to="/signup"> SignUp</nuxt-link>
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
            email: "",
            password: ""
        }
    },
    methods: {
        async onLogin() {
            try {
                console.log("before")
                this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this. password
                    }
                })
                let result = this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this. password
                    }
                })
                if($auth.$state.loggedIn) {
                    console.log("correct")
                    this.$router.push("/")
                }
                else{
                    console.log("wrong")
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