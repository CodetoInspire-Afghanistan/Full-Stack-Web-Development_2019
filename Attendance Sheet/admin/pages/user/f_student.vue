
<template>
  
    <div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
       

  <div  class="btn-toolbar mb-2 mb-md-0">
    <div  class="md-form md-outline input-with-post-icon datepicker">
      <input placeholder="Select date" type="date" id="my-datepicker"  class="form-control">
    </div>
  </div>

          <!-- Search form -->
              <form class="form-inline active-pink-4">
                <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
           aria-label="Search">
            <i class="fas fa-search" aria-hidden="true"></i>
              </form>
       
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
                        <th scope="col" >Status</th>


                     <th scope="col">Absences</th>

                    </tr>
                </thead>
                <tbody>
                     <tr ng-repeat="n in data"  v-for="(s,index) in students" :key="s._id" >
                                    <td scope="col">{{index+1}}</td>
                                    <td scope="col">{{s.id}}</td>
                                    <td scope="col">{{s.name}}</td>
                                    <td class="d-none d-sm-table-cell">{{s.lname}}</td>
                                       <td>
                  <div class="form-check-inline">
                    <input class="form-check-input"   @click="attedace(s._id)" type="radio" name="status1" id="present" value="Present" >
                    <label class="form-check-label" for="present"> Present </label>
                  </div>
                  <div class="form-check-inline">
                    <input class="form-check-input"  @click="attedace(s._id)" type="radio" name="status1" id="absence" value="absence" > 
                    <label class="form-check-label" for="late"> Absence </label> 
                  </div>
                  <div class="form-check-inline">
                    <input class="form-check-input"  @click="attedace(s._id)" type="radio" name="status1" id="sick"  value="sick"> 
                    <label class="form-check-label" for="absences"> sick </label> 
                  </div>
            </td>
            
               <td>
                <span>2</span>

            </td>
        
                  
                           
                                </tr>
                   
                   
                </tbody>
                </table>
        </div>
    </div>






    </div>
</template>


              
</template>
<script>
export default {
  layout: "none",    
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
                  
            }
        }catch(err){
            console.log(err)
        }
    },

    methods:{

        // attedace(id){
        //   try{
        //       var s=document.getElementsByName("status1");
             
                
        //      console.log(id)  

        //   }catch(err){
        //     console.log(err)
        //   }
        // },


          
          async attedace(id){
            try{
                 
               var s=document.getElementsByName("status1");
               await this.$axios.$put(
              'http://localhost:3000/api/attendace/'+id)

            
           
          }catch(err){
            console.log(err)
          }
        }
        
    }

}
</script>
<style >

</style>