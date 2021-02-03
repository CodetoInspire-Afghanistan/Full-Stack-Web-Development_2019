<template>
  <div class="container-fluid">
     <div class="jumbotron">
        <h3 class="display-4">Category Form</h3>
      </div>
     <!-- Form -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">

        
          <!-- Type input -->
          <div class="form-group row">
            <label for="type" class="col-sm-3 col-form-label col-form-label-sm">Type</label>
            <div class="col-sm-9">
              <input v-model="category" name="type" type="text" class="form-control form-control-sm" id="title">
            </div>
          </div>
          <hr>
          <button @click="onAddcategory" type="button" class="btn custom-btn-color px-3">Save</button>
        </form>
      </div>
    </div>

     <!-- table -->
    <div class="row">
      <div class="col px-5 pt-5">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Option</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="category._id">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ category.type }}</td>
              <td>
                  <a @click="onDeleteCategory(category._id, index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
              </td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
    <!-- Edit  Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content" v-if="categoryDetails">
              <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">{{ categoryDetails.type }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="px-md-5">
                 <!-- Type input -->
                  <div class="form-group row">
                    <label for="type" class="col-sm-3 col-form-label col-form-label-sm">{{ categoryDetails.type}}</label>
                    <div class="col-sm-9">
                      <input name="type" type="text" class="form-control form-control-sm" id="title">
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="onCategoryUpdate(categoryDetails._id)" type="button" class="btn custom-btn-color px-3">Save</button>
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
      type: "",
      category:null
    }

},
  async asyncData({$axios}){
      const respons= await $axios.$get('http://localhost:3000/api/category')
      return{
          categories:respons.category,
          categoryDetails: null
      }
  },
  
methods:{
   async onAddcategory(){
    try{
        const data={
            type:this.category
        }
    await this.$axios.$post(
        'http://localhost:3000/api/category',
        data
    )
    this.category = ""
    const updateCategory = await this.$axios.$get('http://localhost:3000/api/category/')
    this.categories = updateCategory.category
    }catch(err){
            console.log(err)
    }
  },
   async onDeleteCategory(id, index) {
    try {
      const result = await this.$axios.$delete('http://localhost:3000/api/category/'+id)
      if(result.status) {
          this.categories.splice(index, 1)
        }
    } catch (error) {
      console.log(error)
    }
  }
}

}
</script>

<style>

</style>