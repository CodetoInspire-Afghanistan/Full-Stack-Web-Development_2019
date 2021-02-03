<template>
    <div class="container-fluid">
        <!-- Title Page -->
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-4">Category</h1>
                </div>
            </div>
        </div>

        
        <div class="row px-md-5">
            <div class="col px-5">
                <form class="px-md-5 pt-5">
                    <div class="form-group row">
                        <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Categiry</label>
                        <div class="col-sm-9">
                            <input v-model="category" name="type" type="text" class="form-control form-control-sm" id="category">
                        </div>
                    </div>
                    <br>
                    <hr>
                    <button @click="onAddProduct" type="button" class="btn custom-btn-color px-3">Save</button>
                </form>
            </div>
        </div>

    </div>
</template>

 <script>
export default {
    data() {
        return{
            category: null // v-model="type"
        }
    },
   
    methods:{
       async onAddProduct() {
           try{
                const data = {
                    type: this.category
                }

               await this.$axios.$post(
                   'http://localhost:3000/api/categories',
                   data
               )

               this.category= null
               const updateCategory =  await $axios.$get('http://localhost:3000/api/categories')
               this.category= updateCategory.category

           } catch(err){
               console.log(err)
           }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>