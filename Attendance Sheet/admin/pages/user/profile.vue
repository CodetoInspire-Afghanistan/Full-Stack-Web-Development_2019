<template>
  <div class="container">
      <div class="row my-5">
          <div class="col-md-4 mx-auto">
            <form>
                <h3 class="mt-5 mb-4">Profile Page</h3>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control form-control-sm" id="name" v-model="name"
                    :placeholder="$auth.$state.user.name">
                </div>
                <div class="form-group">
                    <label for="lname">Last Name</label>
                    <input type="text" class="form-control form-control-sm" id="name" v-model="lname"
                    :placeholder="$auth.$state.user.lname">
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="email" class="form-control form-control-sm" id="email" v-model="email"
                    :placeholder="$auth.$state.user.email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control form-control-sm" id="password" 
                    v-model="password">
                    <small id="emailHelp" class="form-text text-muted">
                        Password must be at least 6 characters</small>
                </div>
                <div class="form-group">
                    <label for="phoneNumber">phoneNumber</label>
                    <input type="text" class="form-control form-control-sm" id="phoneNumber" v-model="phoneNumber"
                    :placeholder="$auth.$state.user.phoneNumber">
                </div>


                
                <hr>
                <div class="form-group">
                    <button @click="onUpdateProfile" type="button" 
                    class="form-control form-control-sm btn custom-btn custom-bg-orange">
                    Update Profile</button>
                </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    layout: "defaultPage",
    data() {
        return {
            name: "",
            email: "",
            lname:"",
            password: "",
             phoneNumber:"",
           selectedFile:null,
           fileName:""
        }
    },
    methods: {
        async onUpdateProfile() {
            try {
               const data=new FormData()
                  data.append('name',this.name)
                  data.append('lname',this.lname)
                  data.append('email',this.email)
                  data.append('password',this.password)
                  data.append('phoneNumber',this.phoneNumber)
                  //data.append('photo',this.selectedFile,this.selectedFile.name)

                let response = await this.$axios.$put("/api/auth/user", data)
                if(response.success) {
                    this.name = ""
                     lname="",
                    this.email = ""
                    this.password = ""
                     phoneNumber="",
                      selectedFile=null,
                          fileName=""

                    await this.$auth.fetchUser()
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