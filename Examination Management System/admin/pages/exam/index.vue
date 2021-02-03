<template>
 <div>
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-4">Add Exams</h1>
                 </div>
            </div>
        </div>

        <div class="row px-md-5">
            <div class="col px-5">
                <!--form -->
                <form class="px-md-5">
                    <!--name-->
                 <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Student</label>
                  <div class="col-sm-9">
                 <select v-model="student"  class="form-control form-control-sm" id="studentname">
                   <option v-for="student in students" :key="student._id" :value="student._id">{{student.name}}</option>
                 </select>
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Teacher</label>
                  <div class="col-sm-9">
                 <select v-model="teacher" class="form-control form-control-sm" id="lastname">
                   <option v-for="teacher in teachers " :key="teacher._id" :value="teacher._id">{{teacher.name}}</option>
                 </select>
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Subject</label>
                  <div class="col-sm-9">
                 <input v-model="subject" type="text" class="form-control form-control-sm" id="subject">
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Room</label>
                  <div class="col-sm-9">
                 <input v-model="room" type="text" class="form-control form-control-sm" id="gender">
                 </div>
                  </div>

                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Day</label>
                  <div class="col-sm-9">
                 <select v-model="day" class="form-control form-control-sm" id="day" >
                     <option value="saturday">saturday</option>
                     <option value="saturday">sunday</option>
                     <option value="saturday">Monday</option>
                     <option value="saturday">tuesday</option>
                     <option value="saturday">wedenseday</option>
                     <option value="saturday">tharsday</option>
                     <option value="saturday">friday</option>
                 </select>
                 </div>
                  </div>
                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">DaTe</label>
                  <div class="col-sm-9">
                 <input v-model="date" type="date" class="form-control form-control-sm" id="date" >
                 </div>
                  </div>
                  <div class="form-group row">
                   <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Time</label>
                  <div class="col-sm-9">
                 <input v-model="time" type="time" class="form-control form-control-sm" id="time" >
                 </div>
                  </div>
  <hr>
  
      <button @click="onAddExam"  class="btn custom-btn-color px-3">save</button>
</form>
            </div>
        </div>

        <div class="row px-md-5">
            <div class="col px-5 pt-sm-3 pt-md-5">
                <table class="table caption-top">
  <caption>List of users</caption>
  <thead class="thead-dark">
    <tr>
    <th scope="col">#</th>
    <th scope="col">Student Name</th>
    <th scope="col">Teacher Name</th>
    <th scope="col">Subject</th>
    <th scope="col">Room</th>
    <th scope="col">Date</th>
    <th scope="col">Day</th>
     <th scope="col">Time</th>
    <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="exam in exams" :key="exam._id">
      <th scope="row">1</th>
      <td>{{exam.student}}</td>
      <td>{{exam.teacher}}</td>
      <td>{{exam.subject}}</td>
      <td>{{exam.room}}</td>
      <td>{{exam.day}}</td>
      <td>{{exam.date}}</td>
      <td>{{exam.time}}</td>
       <td>
        <a class="custom-btn"><i class="fa fa-flag" style="color:#ffc107" ></i></a>
        <a class="custom-btn"><i class="fa fa-edit" style="color:#343a40" ></i></a>
        <a @click="onDeleteExam(exam._id,index)" class="custom-btn"><i class="fa fa-trash" style="color:#dc3545" ></i></a>
    </td>
    </tr>
  
  </tbody>
</table>
            </div>
        </div>
 </div>
</template>

<script>
export default {
data(){
  return{
   student:"",
   teacher:"",
   subject:" ",
   room:" ",
   date:null,
   day:"",
   time:null
  }
},
async asyncData({$axios}){
try {
  const studentResponse = await $axios.$get('http://localhost:3000/api/students')
   const teacherResponse = await $axios.$get('http://localhost:3000/api/teachers')
   const examResponse = await $axios.$get('http://localhost:3000/api/exams')

  return{
    students : studentResponse.students,
    teachers :teacherResponse.teachers,
     exams :examResponse.exams
  }
} catch (err) {
  console.log(err)
}
},
methods:{
  async onAddExam(){
    try {
      const data = {
        studentID:this.student,
        teacherID:this.teacher,
        subject:this.subject,
        room:this.room,
        date:this.date,
        day:this.day,
        time:this.time
      }
      await this.$axios.$post('http://localhost:3000/api/exams',data)
    } catch (err) {
      console.log(err)
    }
  },
  async onDeleteExam(id, index){
    try {
      const result = await this.$axios.$delete('http://localhost:3000/api/exams/'+id)
      if(result.status){
        this.exams.splice(index, 1)
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
