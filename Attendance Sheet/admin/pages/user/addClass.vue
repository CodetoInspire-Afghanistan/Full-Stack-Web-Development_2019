<template>
    <div>
        <!-- title page -->
    <!-- title page -->
    <div class="row">
        <div class="col">
            <div >
                <h4 class="display-4">Add A New Class!</h4>
                
            </div>
        </div>
    </div>



        <form class="form-info">
            <div class="form-group">
                 <div class="col-sm-3">
                <label for="exampleInputEmail1">Department name</label>
                     </div>
                    <div class="col-sm-9">
                         <input  v-model="category"  class="form-control form-control-lg" type="text" placeholder="Enter name">   
                     </div>
             </div>
  <hr>
 
                <button  @click="addclass" type="button" class="btn custom-btn-color px-3">save</button>
</form>
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            category:null
        }
    },
    methods:{
        async addclass(){
            try{
            const data={
                type:this.category
            }
            await this.$axios.$post(
                'http://localhost:3000/api/class',
                data
            
            )
            this.category=null
            const updateform=await this.$axios.$get('http://localhost:3000/api/class')
            this.classes=updateform.classes

            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style>

</style>