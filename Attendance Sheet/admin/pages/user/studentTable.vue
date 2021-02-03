
<template>
  
    <div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
       

  <div  class="btn-toolbar mb-2 mb-md-0">
    <div  class="md-form md-outline input-with-post-icon datepicker">
      <input placeholder="Select date" type="date" id="my-datepicker"  class="form-control">
    </div>
  </div>
</div>
<!-- table -->
    <div class="row ">
        <div class="col  px-5 pt-5">

                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                     <th scope="col">ID</th>
                    <th scope="col">Name</th>
                     
                     <th class="d-none d-sm-table-cell">Last/Name</th>
                       


                     <th scope="col">Option</th>

                    </tr>
                </thead>
                <tbody>
                     <tr ng-repeat="n in data"  v-for="(s,index) in students" :key="s._id" >
                                    <td scope="col">{{index+1}}</td>
                                    <td scope="col">{{s.id}}</td>
                                    <td scope="col">{{s.name}}</td>
                                    <td class="d-none d-sm-table-cell">{{s.lname}}</td>
                                       
                                    <td> <a @click="onviewStudent(s._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                                        <a @click="onviewStudent(s._id)"  class="custom-btn openEditModal " data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                                        <a @click="onviewStudent(s._id)" class="custom-btn openDeleteModal" data-toggle="modal" data-target="#deleteModal"><i class="fa fa-trash" style="color: #dc3545"></i></a></td>
        
                  
                           
                                </tr>
                   
                   
                </tbody>
                </table>
        </div>
    </div>


<!-- View Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModelable" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" v-if="studentDetails">
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
                    <img :src="studentDetails.photo" alt=" product image"  width="100%">
                  </div>
                </div>
                <div class="col-9">
                  <!-- name-->
                  <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Name</label>
                    <div class="col-sm-8">
                        <label class=" col-form-label">{{studentDetails.name}}</label>
                    </div>
                  </div>

                  <!-- lname -->
                  <div class="form-group row">
                    <label for="owner" class="col-sm-4 col-form-label ">lastName</label>
                    <div class="col-sm-8">
                      <label class=" col-form-label">{{studentDetails.lname}}</label>
                    </div>
                  </div>
                   
                  <!-- Category dropdown -->
                  <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Class</label>
                    <div class="col-sm-8">
                        <label class=" col-form-label">{{studentDetails.class.type}}</label>
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
    <div class="modal-content" v-if="studentDetails">
     
      <div class="modal-body">
        <p>are you sure delete this?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
        <button @click="onDeleteStudent(studentDetails._id)" type="button" class="btn btn-primary">Yes</button>
      </div>
    </div>
  </div>
</div>

<!-- edit Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog   modal-lg">
    <div class="modal-content"  v-if="studentDetails">
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
                  
                  <!-- owner dropdown  -->
                <div class="form-group row">
                    <label for="owner" class="col-sm-3 col-form-label col-form-label-sm">Class</label>
                    <div class="col-sm-9">
                    <select v-model="studentDetails.class._id"  class="form-control form-control-sm" id="owner" >
                        <option 
                        v-for="c in classe"
                        :key="c._id"
                        :selected="c._id==studentDetails.class._id"
                        :value="c._id">{{c.type}}</option>
                    </select>
                    </div>
                </div>
               
                 
                <!-- name input -->
                <div class="form-group row">
                    <label for="id" class="col-sm-3 col-form-label col-form-label-sm">ID</label>
                    <div class="col-sm-9">
                    <input v-model="studentDetails.id" type="number" class="form-control form-control-sm" id="id" >
                    </div>
                </div>
                
               
                <!-- name input -->
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                    <div class="col-sm-9">
                    <input v-model="studentDetails.name" type="text" class="form-control form-control-sm" id="name" >
                    </div>
                </div>

                 <!-- lname input -->
                <div class="form-group row">
                    <label for="lname" class="col-sm-3 col-form-label col-form-label-sm">LastName</label>
                    <div class="col-sm-9">
                    <input v-model="studentDetails.lname" type="text" class="form-control form-control-sm" id="lname" >
                    </div>
                </div>
               

            
                  
                
                    </div>
                </div>
               
               
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="studentUpdate(studentDetails._id)" type="button" class="btn btn-primary">Save </button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>


              

<script>
export default {
    data(){
        return{
              n:0,
            names:"",
           lnames:"",
             dp:null,
           selectedFileUpdate:null,
          fileNameUpdate:""

        }
    },
    async asyncData({$axios}){
        try{
          const studentResponse=await $axios.$get('http://localhost:3000/api/students')
          const classResponse=await $axios.$get('http://localhost:3000/api/class')

            return{
                students:studentResponse.students,
                 classe:classResponse.classes,
                   studentDetails:null
            }
        }catch(err){
            console.log(err)
        }
    },

    methods:{

      async onDeleteStudent(id){
        try{
          const result =await this.$axios.$delete('http://localhost:3000/api/students/'+id)
          const updateStudent=await this.$axios.$get('http://localhost:3000/api/students')
          this.students=updateStudent.students
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

   
   
    async onviewStudent(id){
      try{
        const studentResponse=await this.$axios.$get('http://localhost:3000/api/students/'+id)
        this.studentDetails=studentResponse.students
      }catch(err){
        console.log(err)
      }
    },
    
    
         
          async studentUpdate(id){
            try{
                 const data=new FormData()
                   data.append('name',this.studentDetails.name)
                data.append('lname',this.studentDetails.lname)
                data.append('id',this.studentDetails.id)
                data.append('classID',this.studentDetails.class._id)
             
               // data.append('photo',this.userDetails.selectedFileUpdate,this.selectedFileUpdate.name)


            const studentResponse=await this.$axios.$put(
              'http://localhost:3000/api/students/'+id,
              data

            )
            this.selectedFileUpdate=null;
            this.fileNameUpdate=""
            $('#editModal').modal('hide')

              const updateStudent=await this. $axios.$get('http://localhost:3000/api/students')
            this.students=updateStudent.students
          }catch(err){
            console.log(err)
          }
        }
    
    }

}
</script>