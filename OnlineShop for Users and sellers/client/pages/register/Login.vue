<template>
    <div>
        <!-- Page Title start -->
        <div class="pageTitle">
        <div class="container">
            <div class="row">
            <div class="col-md-6 col-sm-6">
                <h1 class="page-heading">Login</h1>
            </div>
            <div class="col-md-6 col-sm-6">
                <div class="breadCrumb"><a href="../">Home</a> / <span>Login</span></div>
            </div>
            </div>
        </div>
        </div>
        <!-- Page Title End -->

        <div class="listpgWraper">
        <div class="container">
            <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="userccount">
                <h5>User Login</h5>
                <!-- login form -->
                <form action="/" method="post">
                    <div class="formpanel">
                        <div class="formrow">
                        <input type="email" class="form-control" placeholder="email"  >
                        </div>
                        <div class="formrow">
                        <input type="text" class="form-control" placeholder="Password" >
                        </div>
                        
                        <input @click="onLogin" type="submit" class="btn" value="Login">
                    </div>
                </form>
                <!-- login form  end--> 
                
                <!-- sign up form -->
                <div class="newuser"><i class="fa fa-user" aria-hidden="true"></i> New User? <nuxt-link to="/register/signup">Register Here</nuxt-link></div>
                <!-- sign up form end-->
                
                <div class="socialLogin">
                    <h5>Login Or Register with Social</h5>
                    <a href="#." class="fb"><i class="fa fa-facebook" aria-hidden="true"></i></a> <a href="#." class="gp"><i class="fa fa-google-plus" aria-hidden="true"></i></a> <a href="#." class="tw"><i class="fa fa-twitter" aria-hidden="true"></i></a> </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {

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