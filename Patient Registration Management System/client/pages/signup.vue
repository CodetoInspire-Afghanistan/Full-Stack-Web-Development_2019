<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <form>
                        <h3>Properties of Doctors</h3>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control form-control-sm" id="Name" v-model="Name">
                        </div>
                        <div class="form-group">
                            <label for="name">LastName</label>
                            <input type="text" class="form-control form-control-sm" id="LastName" v-model="LastName">
                        </div>
                        <div class="form-group">
                            <label for="name">Phone</label>
                            <input type="number" class="form-control form-control-sm" id="Phone" v-model="Phone">
                        </div>
                        <div class="form-group">
                            <label for="name">Field</label>
                            <input type="text" class="form-control form-control-sm" id="Field" v-model="Field">
                        </div>
                        <div class="form-group">
                            <label for="name">Email</label>
                            <input type="email" class="form-control form-control-sm" id="Email" v-model="Email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control form-control-sm" id="Password" v-model="Password">
                            <small id="emailHelp" class="form-text text-muted">
                                Password must be at least 6 characters</small>
                        </div>
                          <fieldset class="form-group">
                      <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div class="col-sm-10">
                          <div class="form-check">
                            <input v-model="Gender" class="form-check-input" type="radio" name="Gender" id="gridRadios1" value="option1" checked>
                            <label class="form-check-label" for="gridRadios1">
                              Femal
                            </label>
                          </div>
                          <div class="form-check">
                            <input v-model="Gender" class="form-check-input" type="radio" name="Gender" id="gridRadios2" value="option2">
                            <label class="form-check-label" for="gridRadios2">
                              Male
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                        <div class="form-group">
                            <button @click="onSignup" type="button" 
                            class="form-control form-control-sm btn custom-btn custom-bg-orange">
                            Create an Account</button>
                        </div>
                        <hr>
                        Already have an account? <nuxt-link to="/login" class="custom-link-color">login</nuxt-link>
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
            Name: "",
            LastName: "",
            Phone:0,
            Field: "",
            Email: "",
            Password: "",
            Gender: ""
        }
    },
    methods: {
        async onSignup() {
            try {
                let data = {
                    'Name': this.Name,
                    'LastName': this.LastName,
                    'Phone': this.Phone,
                    'Field': this.Field,
                    'Email': this.Email,
                    'Password': this.Password,
                    'Gender': this.Gender
                }

                let response = await this.$axios.$post("/api/auth/signup", data)
                
                console.log(response)

                if(response.success) {
                    this.$auth.loginWith("local", {
                        data: {
                            Email: this.Email,
                            Password: this.Password
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