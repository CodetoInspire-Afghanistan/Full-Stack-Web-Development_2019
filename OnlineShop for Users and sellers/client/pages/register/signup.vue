<template>
    <div>
        <!-- Page Title start -->
        <div class="pageTitle">
        <div class="container">
            <div class="row">
            <div class="col-md-6 col-sm-6">
                <h1 class="page-heading">Sign Up</h1>
            </div>
            <div class="col-md-6 col-sm-6">
                <div class="breadCrumb"><a href="../">Home</a> / <span>Sign-up</span></div>
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
                <h5>User Sign up</h5>
                <!-- Sign up form -->
               <form action="/register/login" method="post">
                    <div class="formpanel">
                        <div class="formrow">
                        <input type="text" class="form-control" placeholder="name" v-model="name">
                        </div>
                        <div class="formrow">
                        <input type="text" class="form-control" placeholder="last name" v-model="lastName">
                        </div>
                        <div class="formrow">
                        <input type="email" class="form-control" placeholder="email" v-model="email">
                        </div>
                        <div class="formrow">
                        <input type="text" class="form-control" placeholder="Password" v-model="password">
                        </div>
                        <input @click="onSignup" type="submit" class="btn" value="Sign Up">
                    </div>
               </form>
                <!-- Sign up form  end--> 
                
                <!-- sign up form -->
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
            name: "",
            lastName:"",
            email: "",
            password: ""
        }
    },
    methods: {
        async () {
            try {
                let data = {
                    name: this.name,
                    lastName:this.lastName,
                    email: this.email,
                    password: this.password
                }

                let response = this.$axios.$post("/api/auth/signup", data)
                
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