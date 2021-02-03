<template>
    <div class="container-fluid">
        <!-- Title Page -->
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-4">Owner</h1>
                </div>
            </div>
        </div>

         <!-- Form Owner dropdown -->
        <div class="row px-md-5">
            <div class="col px-5">
                <form class="px-md-5 pt-5">
                    <div class="form-group row">
                        <label for="owner" class="col-sm-3 col-form-label col-form-label-sm">Owner_Name</label>
                        <div class="col-sm-9">
                            <input v-model="name" name="type" type="text" class="form-control form-control-sm" id="owner">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="owner" class="col-sm-3 col-form-label col-form-label-sm">About_Owner</label>
                        <div class="col-sm-9">
                            <input v-model="about" name="type" type="text" class="form-control form-control-sm" id="owner">
                        </div>
                    </div>

                    <br>
                    <hr>
                    <button @click="onAddProduct" type="button" class="btn custom-btn-color px-3">Save</button>
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
                        <th scope="col">Owner_Name</th>
                        <th scope="col">About_Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(owner, index) in owners" :key="owner._id">
                            <td scope="row">{{ index+1 }}</td>
                            <td>{{ owner.name }}</td>
                            <td>{{ owner.about }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

// <script>
export default {
    data() {
        return{
            name: null, // v-model="name"
            about: null
        }
    },
    async asyncData({$axios }) {
        try {
            const ownerResponse = await $axios.$get('http://localhost:3000/api/owners')

            return {
                owners: ownerResponse.owners
            }
        } catch(err) {
            console.log(err)
        }
    },
    methods:{
       async onAddProduct() {
           try{

               const data = {
                    name: this.name,
                    about: this.about
                }

               await this.$axios.$post(
                   'http://localhost:3000/api/owners',
                   data
               )

               this.name= null
               this.about= null

               const updateOwner= await $axios.$get('http://localhost:3000/api/owners')
               this.name = updateOwner.name
               this.about= updateOwner.about
               console.log("ppppppppppppppppppppppppppppppp", updateOwner.owners)

           } catch(err){
               console.log(err)
           }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>