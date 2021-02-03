<template>
 <div>
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-4">Add Students</h1>
                 </div>
            </div>
        </div>

        <div class="row px-md-5">
            <div class="col px-5">
                <!--form -->
                <form class="px-md-5">
                    <!--name-->
                 <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                  <div class="col-sm-9">
                 <input v-model="name" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Last Name</label>
                  <div class="col-sm-9">
                 <input v-model="lastname" type="text" class="form-control form-control-sm" id="lastname">
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Phone Number</label>
                  <div class="col-sm-9">
                 <input v-model="phone" type="text" class="form-control form-control-sm" id="phone">
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Gender</label>
                  <div class="col-sm-9">
                 <input v-model="gender" type="text" class="form-control form-control-sm" id="gender">
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Grade</label>
                  <div class="col-sm-9">
                 <input v-model="grade" type="text" class="form-control form-control-sm" id="grade" >
                 </div>
                  </div>
 <hr>
 <button @click="onAddstudent" class="btn custom-btn-color px-3">save</button>
</form>
            </div>
        </div>


        <div class="row px-md-5">
            <div class="col px-5 pt-sm-3 pt-md-5">
                <table class="table caption-top">
  
  <thead class="thead-dark">
    <tr >
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">LastName</th>
      <th scope="col">phone</th>
      <th scope="col">Gender</th>
      <th scope="col">Grade</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="student in students" :key="student._id">
    <th scope="row">1</th>
    <td>{{student.name}}</td>
    <td>{{student.lastname}}</td>
    <td>{{student.phone}}</td>
    <td>{{student.gender}}</td>
    <td>{{student.grade}}</td>
    <td>
        <a @click="onviewStudent(student._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color:#ffc107" ></i></a>
        <a @click="onviewStudent(student._id)" class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal" ><i class="fa fa-edit" style="color:#343a40" ></i></a>
        <a @click="onDeleteStudent(student._id,index)" class="custom-btn"><i class="fa fa-trash" style="color:#dc3545" ></i></a>
    </td>
    </tr>
   
  </tbody>
</table>
            </div>
        </div>


<!--Modal -->


<!-- Modal -->
<div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" >
      <div class="modal-header">
        <h5 class="modal-title" id="viewModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- edit Model -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl" >
    <div class="modal-content" v-if="studentDetails">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                  <div class="col-sm-9">
                 <input v-model="studentDetails.name" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>
         <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">LastName</label>
                  <div class="col-sm-9">
                 <input v-model="studentDetails.lastname" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div> 
          <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">phoneNumber</label>
                  <div class="col-sm-9">
                 <input v-model="studentDetails.phone" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>
          <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Gender</label>
                  <div class="col-sm-9">
                 <input v-model="studentDetails.gender" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>
          <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Grade</label>
                  <div class="col-sm-9">
                 <input v-model="studentDetails.grade" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>                                
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="studentUpdate(studentDetails._id)" type="button" class="btn btn-primary">Save changes</button>
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
    name:"",
    lastname:"",
    phone:null,
    gender:"",
    grade:""
  }
},
async asyncData({$axios}){
try {
  const studentResponse = await $axios.$get('http://localhost:3000/api/students');
  return{
    students:studentResponse.students,
    studentDetails:null
  }

} catch (err) {
  console.log(err)
}
},
methods:{
  async onAddstudent(){
    try {
      const data ={
    name:this.name,
    lastname:this.lastname,
    phone:this.phone,
    gender:this.gender,
    grade:this.grade
     }
      await this.$axios.$post('http://localhost:3000/api/students',data)
    } catch (err) {
      console.log(err)
    }
     
    
  },
  async onDeleteStudent(id,index){
    try {
      const result = await this.$axios.$delete('http://localhost:3000/api/students/'+id)
      if(result.status){
        this.students.splice(index, 1)
      }
    } catch (err) {
      console.log(err)
      
    }
  },
  async onviewStudent(id){
    try {

      const studentResponse=await this.$axios.$get('http://localhost:3000/api/students/'+id)
      this.studentDetails=studentResponse.students
    } catch (err) {
      console.log(err)
    }
  },
  async studentUpdate(id){
     try {
        const data ={
    name:this.studentDetails.name,
    lastname:this.studentDetails.lastname,
    phone:this.studentDetails.phone,
    gender:this.studentDetails.gender,
    grade:this.studentDetails.grade
     }
      const studentResponse=await this.$axios.$put('http://localhost:3000/api/students/'+id,
      data
      )
      $('#editModal').modal('hide')
     
    } catch (err) {
      console.log(err)
    }
  }
}
}
</script>

<style>
</style>
