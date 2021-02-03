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

         <!-- Form Category dropdown -->
        <div class="row px-md-5">
            <div class="col px-5">
                <form class="px-md-5 pt-5">
                    <div class="form-group row">
                        <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Type For Category</label>
                        <div class="col-sm-9">
                            <input v-model="category" name="type" type="text" class="form-control form-control-sm" id="category">
                        </div>
                    </div>
                    <br>
                    <hr>
                    <button @click="onAddCategory" type="button" class="btn custom-btn-color px-3">Save</button>
                </form>
            </div>
        </div>

        <!-- Table -->
        <div class="row">
            <div class="col px-5 pt-5">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Catgory</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category, index) in categories" :key="category._id">
                            <td scope="row">{{ index+1 }}</td>
                            <td>{{ category.type }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

// <script>
export default {
    data() { // it is just for front-end in browser
        return{
            category: null // v-model="type"
        }
    },
    async asyncData({$axios }) {  // it is just for back-end in vscode
        try {
            const categoryResponse = await $axios.$get('http://localhost:3000/api/categories') // without doing action and just show
            // console.log(categoryResponse.categories)

            return {
                categories: categoryResponse.categories
            }
        } catch(err) {
            console.log(err)
        }
    },
    methods:{
       async onAddCategory() {
           try{
                const data = {
                    type: this.category // type is the attribute that we define in rout of category our server
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