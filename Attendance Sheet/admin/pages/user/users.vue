
<template>
  
    <div>
        <!-- title page 
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-4">List Of User!</h1>
                
            </div>
        </div>
    </div>
   -->
   
<!-- table -->
    <div class="row ">
        <div class="col  px-5 pt-5">

                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" >Last/Name</th>
                        <th scope="col" >Class</th>


                     <th scope="col">Option</th>

                    </tr>
                </thead>
                <tbody>
                     <tr ng-repeat="n in data"  v-for="(u ,index) in users" :key="u._id" >
                                    <td scope="col">{{index+1}}</td>
                                    <td scope="col">{{u.name}}</td>
                                    <td scope="col">{{u.lname}}</td>
                                    <td scope="col">{{u.class.type}}</td>

                                    <td> <a @click="onviewUser(u._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                                        <a @click="onviewUser(u._id)"  class="custom-btn openEditModal " data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                                        <a @click="onviewUser(u._id)" class="custom-btn openDeleteModal" data-toggle="modal" data-target="#deleteModal"><i class="fa fa-trash" style="color: #dc3545"></i></a></td>
        
                  
                           
                                </tr>
                   
                   
                </tbody>
                </table>
        </div>
    </div>


<!-- View Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModelable" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" v-if="userDetails">
          <div class="modal-header">
            <h5 class="modal-title" id="viewModelable">user details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="px-md-5">
              <div class="row">
                <div class="col-3">
                
                  <!-- file input -->
                  <div>
                    <img :src="userDetails.photo" alt=" product image"  width="100%">
                  </div>
                </div>
                <div class="col-9">
                  <!-- name-->
                  <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Name</label>
                    <div class="col-sm-8">
                        <label class=" col-form-label">{{userDetails.name}}</label>
                    </div>
                  </div>

                  <!-- lname -->
                  <div class="form-group row">
                    <label for="owner" class="col-sm-4 col-form-label ">lastName</label>
                    <div class="col-sm-8">
                      <label class=" col-form-label">{{userDetails.lname}}</label>
                    </div>
                  </div>
                   <!-- lname -->
                  <div class="form-group row">
                    <label for="owner" class="col-sm-4 col-form-label ">E-mail</label>
                    <div class="col-sm-8">
                      <label class=" col-form-label">{{userDetails.email}}</label>
                    </div>
                  </div>
                   <!-- lname -->
                  <div class="form-group row">
                    <label for="owner" class="col-sm-4 col-form-label ">PhoneNumber</label>
                    <div class="col-sm-8">
                      <label class=" col-form-label">{{userDetails.phoneNumber}}</label>
                    </div>
                  </div>

                
                    <!-- Category dropdown -->
                  <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Class</label>
                    <div class="col-sm-8">
                        <label class=" col-form-label">{{userDetails.class.type}}</label>
                    </div>
                  </div>
               
                </div>
              </div>
              
            </form> 
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

<!-- delet Modal -->
<div  class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModelable" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" v-if="userDetails">
     
      <div class="modal-body">
        <p>are you sure delete this?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
        <button @click="onDeleteUser(userDetails._id)" type="button" class="btn btn-primary">Yes</button>
      </div>
    </div>
  </div>
</div>

<!-- edit Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog   modal-lg">
    <div class="modal-content"  v-if="userDetails">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit Modal Title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form class="px-md-5">

             <div class="row">
                  <div class="col-3">
                  <!-- input file -->
                  <div> 
                      <label >Add A Photo</label>
                 </div>
                <div class="form-group row">
                    <div class="col-sm-9">
                       <label class="custom-choosefile-button">
                              <i class="fa fa-plus" style="color:#ddd; font-size:3rem"></i>
                              <input @change="onselectedFileUpdate" type="file" >
                        </label>
                      <p>{{fileNameUpdate}}</p>
                  
                    </div>
                </div></div>
                 <div class="col-9"> 
                  
                  <!-- owner dropdown -->
                <div class="form-group row">
                    <label for="owner" class="col-sm-3 col-form-label col-form-label-sm">Class</label>
                    <div class="col-sm-9">
                    <select v-model="userDetails.class._id"  class="form-control form-control-sm" id="owner" >
                        <option 
                        v-for="c in classe"
                        :key="c._id"
                        :selected="c._id==userDetails.class._id"
                        :value="c._id">{{c.type}}</option>
                    </select>
                    </div>
                </div>
               
                <!-- name input -->
                <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                    <div class="col-sm-9">
                    <input v-model="userDetails.name" type="text" class="form-control form-control-sm" id="name" >
                    </div>
                </div>

                 <!-- lname input -->
                <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label col-form-label-sm">LastName</label>
                    <div class="col-sm-9">
                    <input v-model="userDetails.lname" type="text" class="form-control form-control-sm" id="lname" >
                    </div>
                </div>
               

                <!-- email input -->
                <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label col-form-label-sm">E-mail</label>
                    <div class="col-sm-9">
                    <input v-model="userDetails.email" type="email" class="form-control form-control-sm" id="email" >
                    </div>
                </div>
                  
                
                <!-- phoneNumber input -->
                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label col-form-label-sm">PhoneNumber</label>
                    <div class="col-sm-9">
                    <input v-model="userDetails.phoneNumber" type="number" class="form-control form-control-sm" id="PhoneNumber" >
                    </div>
                </div>

                  
                
                    </div>
                </div>
               
               
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="userUpdate(userDetails._id)" type="button" class="btn btn-primary">Save </button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>


              
</template>
<script>
export default {
    data(){
        return{
      name:"",
      lname:"",
        email:"",
        password:"",
        phoneNumber:0,
        dp:null,
        
         fileName:"",
        selectedFile:null,
         selectedFileUpdate:null,
          fileNameUpdate:""


        }
    },
    async asyncData({$axios}){
        try{
          const classResponse=await $axios.$get('http://localhost:3000/api/class')
           const userResponse=await $axios.$get('http://localhost:3000/api/user')
            return{
                users:userResponse.users,
                    classe:classResponse.classes,
                   userDetails:null
            }
        }catch(err){
            console.log(err)
        }
    },

    methods:{

      async onDeleteUser(id){
        try{
          const result =await this.$axios.$delete('http://localhost:3000/api/user/'+id)
          const updateUser=await this.$axios.$get('http://localhost:3000/api/user')
          this.users=updateUser.users
           $('#deleteModal').modal('hide')
           console.log(id)
        }catch(err){
          console.log(err)
        }
      },

         onselectedFileUpdate(event){
        this.selectedFileUpdate=event.target.files[0]
        this.fileNameUpdate=event.target.files[0].name
        
      },

    async onviewUser(id){
      try{
        const userResponse=await this.$axios.$get('http://localhost:3000/api/user/'+id)
        this.userDetails=userResponse.users
      }catch(err){
        console.log(err)
      }
    },
   
   
     async userUpdate(id){

          try{

            const data=new FormData()
                   data.append('name',this.userDetails.name)
                data.append('lname',this.userDetails.lname)
                data.append('email',this.userDetails.email)
                data.append('password',this.userDetails.password)
                data.append('phoneNumber',this.userDetails.phoneNumber)
                data.append('classID',this.userDetails.class._id)
                data.append('types',this.userDetails.type)
               // data.append('photo',this.userDetails.selectedFileUpdate,this.selectedFileUpdate.name)


            const userResponse=await this.$axios.$put(
              'http://localhost:3000/api/user/'+id,
              data

            )
            this.selectedFileUpdate=null;
            this.fileNameUpdate=""
            $('#editModal').modal('hide')

              const updateProduct=await this. $axios.$get('http://localhost:3000/api/user')
            this.users=updateProduct.users
          }catch(err){
            console.log(err)
          }
        }
         
    
    }

}
</script>