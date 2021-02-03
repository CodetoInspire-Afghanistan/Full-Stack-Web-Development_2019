<template>
    
<div>
       <!-- title page -->
    <div class="row">
        <div class="col">
            <div >
                <h4 class="display-4">Add A New User!</h4>
                
            </div>
        </div>
    </div>



     <!-- form -->
    <div class="row px-md-5">
        <div class="col px-5">
            <form class="px-md-5">

                <!-- name input -->
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                    <div class="col-sm-9">
                    <input  v-model="name" type="text" class="form-control form-control-sm" id="name"  >
                    </div>
                </div>
               
                <!-- lname input -->
                <div class="form-group row">
                    <label for="lname" class="col-sm-3 col-form-label col-form-label-sm">Last/Name</label>
                    <div class="col-sm-9">
                    <input  v-model="lname" type="text" class="form-control form-control-sm" id="lname" >
                    </div>
                </div>

                    <!-- email input -->
                <div class="form-group row">
                    <label for="email" class="col-sm-3 col-form-label col-form-label-sm">E-mail</label>
                    <div class="col-sm-9">
                    <input  v-model="email" type="email" class="form-control form-control-sm" id="email" >
                    </div>
                </div>
                <!-- password input -->
                <div class="form-group row">
                    <label for="password" class="col-sm-3 col-form-label col-form-label-sm">Password</label>
                    <div class="col-sm-9">
                    <input v-model="password" type="password" class="form-control form-control-sm" id="password" >
                    </div>
                </div>
                   <!-- phoneNumber input -->
                <div class="form-group row">
                    <label for="phoneNumber" class="col-sm-3 col-form-label col-form-label-sm">phoneNumber</label>
                    <div class="col-sm-9">
                    <input  v-model="phoneNumber" type="number" class="form-control form-control-sm" id="phoneNumber" >
                    </div>
                </div>

                
                <!-- dp dropdown -->
                <div class="form-group row">
                    <label for="dp" class="col-sm-3 col-form-label col-form-label-sm">Department</label>
                    <div class="col-sm-9">
                    <select v-model="dp" class="form-control form-control-sm" id="dp" >
                        <option  v-for="c in classe" :key="c._id" :value="c._id">{{c.type}}</option>
                    </select>
                    </div>
                </div>
               
                  <!-- input file -->
                 
                 <div>
            <label>Add a photo</label>
          </div>
          <div class="form-group row">
            <div class="col-sm-9">
              <label class="custom-choosefile-button">
                <i class="fa fa-plus" style="color: #ddd; font-size:3rem;"></i>
                <input @change="onSelectedImage" type="file" name="photo" id="photo">
              </label>
              <p>{{ imageName }}</p>
            </div>
          </div>
    <hr>
                <button  @click="addUser" type="button" class="btn custom-btn-color px-3">save</button>
                    <br>
              <span>Already  have an acount?</span>  <nuxt-link  class="form-control-sm btn custom-btn custom-btn-color px-3 "  to="/user/login" >Sign in</nuxt-link>

            </form>
        </div>
    </div>
</div>


    
</template>
<script>
export default {

    middleware:"auth",
    auth:"guest",
     layout: "none",
    data(){
        return{
        name:"",
      lname:"",
        email:"",
        password:"",
        phoneNumber:0,
        dp:null,
         selectedFile:null,
         imageName:""
        }
    },
    async asyncData({$axios}){
try{

const classResponse=await $axios.$get('http://localhost:3000/api/class')
return{
    classe:classResponse.classes
}
}catch(err){
console.log(err)
}
},


methods:{
     onSelectedImage(event){
           this.selectedFile=event.target.files[0]
           this.imageName=event.target.files[0].name
           console.log(this.selectedFile)
       },
        onSelectedFile(data){
           this.selectedFile=data.target.files[0]
           this.fileName=data.target.files[0].name
           console.log(this.selectedFile)
       },

        async addUser(){
        try{
            const data=new FormData()
                data.append('name',this.name)
                data.append('lname',this.lname)
                data.append('email',this.email)
                data.append('password',this.password)
                data.append('phoneNumber',this.phoneNumber)
                data.append('classID',this.dp)
               data.append('photo',this.selectedFile,this.selectedFile.name)

         let respons=  await this.$axios.$post(
                '/api/auth/signup',
                data
                 )
                 console.log(respons)

                 
                 if(respons.success){
                     this.$auth.loginWith("local",{
                         data:{
                                    email:this.email,
                                    password:this.password
                         }
                     })
                     this.$router.push("/")
                 }

                         this.name="",
                         this.lname="",
                        this.email="",
                        this.password="",
                        this.phoneNumber=0,
                        this.dp=null,
                        this.selectedFile=null,
                        this.fileName=""

                         const updateform=await this.$axios.$get('http://localhost:3000/api/user')
                        this.users=updateform.users
        }catch(err){
            console.log(err)
        }

        }

}

}
</script>