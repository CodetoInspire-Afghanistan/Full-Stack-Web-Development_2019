<template>
 <div>
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-4">Add Teachers</h1>
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
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Subject</label>
                  <div class="col-sm-9">
                 <input v-model="subject" type="text" class="form-control form-control-sm" id="gender">
                 </div>
                  </div>
                  <hr>
                  <button @click="onAddteacher" class="btn custom-btn-color px-3">save</button>
                     </form>
               </div>
          </div>

          <div class="row px-md-5">
            <div class="col px-5 pt-sm-3 pt-md-5">
                <table class="table caption-top">
  <caption>List of Teachers</caption>
  <thead class="thead-dark">
    <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">LastName</th>
    <th scope="col" class="d-none d-sm-table-cell" >phoneNumber</th>
    <th scope="col" class="d-none d-sm-table-cell">Subject</th>
    <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(teacher,index) in teachers" :key="teacher._id">
    <th scope="row">{{index}}</th>
    <td>{{teacher.name}}</td>
    <td>{{teacher.lastname}}</td>
    <td class="d-none d-sm-table-cell">{{teacher.phone}}</td>
    <td class="d-none d-sm-table-cell">{{teacher.subject}}</td>
    <td>
        <a @click="onviewStudent(teacher._id)" class="custom-btn "><i class="fa fa-flag" style="color:#ffc107" ></i></a>
        <a @click="onviewTeacher(teacher._id)" class="custom-btn openEditModal " data-toggle="modal" data-target="#editModal" ><i class="fa fa-edit" style="color:#343a40" ></i></a>
        <a @click="onDeleteTeacher(teacher._id,index)" class="custom-btn"><i class="fa fa-trash" style="color:#dc3545" ></i></a>
    </td>
    </tr>
  
  </tbody>
</table>
            </div>
        </div>
        <!-- edit Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl" >
    <div class="modal-content" v-if="teacherDetails">
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
                 <input v-model="teacherDetails.name" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>
         <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">LastName</label>
                  <div class="col-sm-9">
                 <input v-model="teacherDetails.lastname" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div> 
          <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">phoneNumber</label>
                  <div class="col-sm-9">
                 <input v-model="teacherDetails.phone" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>
          <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Subject</label>
                  <div class="col-sm-9">
                 <input v-model="teacherDetails.subject" type="text" class="form-control form-control-sm" id="name">
                 </div>
                  </div>
                                          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="teacherUpdate(teacherDetails._id)" type="button" class="btn btn-primary">Save changes</button>
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
    subject:""

  }
},
async asyncData({$axios}){
try {
  const teacherResponse = await $axios.$get('http://localhost:3000/api/teachers');
  return{
    teachers:teacherResponse.teachers,
    teacherDetails:null
  }

} catch (err) {
  console.log(err)
}
},
methods:{
  async onAddteacher(){
    try {
      const data ={
    name:this.name,
    lastname:this.lastname,
    phone:this.phone,
    subject:this.subject,
    
     }
      await this.$axios.$post('http://localhost:3000/api/teachers',data)
    } catch (err) {
      console.log(err)
    }
     
    
  },
  async onDeleteTeacher(id,index){
     try {
      const result = await this.$axios.$delete('http://localhost:3000/api/teachers/'+id)
      if(result.status){
        this.teachers.splice(index, 1)
      }
    } catch (err) {
      console.log(err)
      
    }
  },
   async onviewTeacher(id){
    try {

      const teacherResponse=await this.$axios.$get('http://localhost:3000/api/teachers/'+id)
      this.taecherDetails=teacherResponse.teachers
    } catch (err) {
      console.log(err)
    }
  },
  async teacherUpdate(id){
   try {
        const data ={
    name:this.teacherDetails.name,
    lastname:this.teacherDetails.lastname,
    phone:this.teacherDetails.phone,
    subject:this.teacherDetails.subject,
    
     }
      const teacherResponse=await this.$axios.$put('http://localhost:3000/api/teachers/'+id,
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
