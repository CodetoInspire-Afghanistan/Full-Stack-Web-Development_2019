<template>
    <div>
        <!-- title page -->
     <!-- title page -->
    <div class="row">
        <div class="col">
            <div >
                <h4 class="display-4">Add A New Student</h4>
                
            </div>
        </div>
    </div>
    <!-- form -->
    <div class="row px-md-5">
        <div class="col px-5">
            <form class="px-md-5">


               
            
               
               <!-- name input -->
                <div class="form-group row">
                    <label for="idnumber" class="col-sm-3 col-form-label col-form-label-sm">ID</label>
                    <div class="col-sm-9">
                    <input v-model="n"  type="text" class="form-control form-control-sm" id="id"  name="id" placeholder="Enter ID" >
                    </div>
                </div>

                   <!-- lname input -->
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                    <div class="col-sm-9">
                    <input  v-model="names" type="text" class="form-control form-control-sm" id="name" name="name" placeholder="Enter Name" >
                    </div>
                </div>
                   <!-- lname input -->
                <div class="form-group row">
                    <label for="lname" class="col-sm-3 col-form-label col-form-label-sm">Last/Name</label>
                    <div class="col-sm-9">
                    <input  v-model="lnames" type="text" class="form-control form-control-sm" id="lname" name="lname" placeholder="Enter last/Name" >
                    </div>
                </div>
    


                <!-- classes dropdown -->
                <div class="form-group row">
                    <label for="class" class="col-sm-3 col-form-label col-form-label-sm">Class</label>
                    <div class="col-sm-9">
                    <select v-model="dp" class="form-control form-control-sm" id="dp"  name="class">
                        <option v-for="s in classe" :key="s._id" :value="s._id">{{s.type}}</option>
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
                <input @change="onSelectedFile" type="file">
              </label>
              <p>{{ fileName }}</p>
            </div>
          </div>
                
              
               
              
               
               
    <hr>
                <button  @click="addstudent" type="button" class="btn custom-btn-color px-3">save</button>
            </form>
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
              selectedFile:null,
                fileName:""
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
         onSelectedFile(event){
           this.selectedFile=event.target.files[0]
           this.fileName=event.target.files[0].name
           console.log(this.selectedFile)
       },
        async addstudent(){
            try{
            const data=new FormData()
                data.append('classID',this.dp)
                data.append('lname',this.lnames)
                data.append('name',this.names) 
                data.append('id',this.n) 
               data.append('photo',this.selectedFile,this.selectedFile.name)

            
            await this.$axios.$post(
                'http://localhost:3000/api/students',
                data
           
            )
             this. n=0,
            this.names="",
           this.lnames="",
             this.dp=null,
              this.selectedFile=null,
                 this.fileName=""
             const updateform=await this.$axios.$get('http://localhost:3000/api/students')
            this.students=updateform.students
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style>

</style>