<template>

    <div class="login-dark">
        <form method="post">
            <h2 class="sr-only">Login Form</h2>
            <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"></div>
            <div class="form-group"><button @click="onLogin" class="btn btn-primary btn-block" type="submit">Log In</button></div>
            </form>
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
                        Email: this.Email,
                        Password: this.Password
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
