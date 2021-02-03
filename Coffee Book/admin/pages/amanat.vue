<template>
<!-- Tittle page-->
    <div>
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                <h1 class="display-4">Add news Amanat</h1>
                </div>
            </div>
        </div>
        <!--form-->
            <div class="row px-md-5">
                <div class="col px-5">
                    <form class="px-md-5">
                        <!--Cateagory dropdown-->
                        <div class="form-group row">
                            <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                            <div class="col-sm-9">
                            <select v-model="category" class="form-control form-control-sm" id="category" >
                                <option v-for="category in categories" :key="category._id" :value="category._id">{{category.type}}</option>
                            </select>
                            </div>
                        </div>

                           <!--user name dropdown-->
                        <div class="form-group row">
                            <label for="user" class="col-sm-3 col-form-label col-form-label-sm">userName</label>
                            <div class="col-sm-9">
                            <select v-model="userId" class="form-control form-control-sm" id="user" >
                                <option v-for="user in users" :key="user._id" :value="user._id">{{user.fname}}</option>
                            </select>
                            </div>
                        </div>

                           <!--book name dropdown-->
                        <div class="form-group row">
                            <label for="book" class="col-sm-3 col-form-label col-form-label-sm">bookName</label>
                            <div class="col-sm-9">
                            <select v-model="bookId" class="form-control form-control-sm" id="book" >
                                <option
                                 :value="book._id"
                                 v-for="book in books"
                                 :key="book._id">{{book.title}}</option>
                            </select>
                            </div>
                        </div>

                            <!--time input-->
                        <div class="form-group row">
                            <label for="time" class="col-sm-3 col-form-label col-form-label-sm">time</label>
                            <div class="col-sm-9">
                            <input v-model="time"  type="text" class="form-control form-control-sm" id="time" >
                            </div>
                        </div>

                           <!--Add a photo-->
                           <div>
                                <label for="image" class="col-sm-3 col-form-label col-form-label-sm">Add a photo</label>
                           </div>
                        <div class="form-group row">
                            <div class="col-sm-9">
                                <label class="custom-choosefile-button">
                                    <i class="fa fa-plus" style="color: #ddd; font-size:3rem"></i>
                                    <input type="file" @change="onSelectedImage" name="photo" id="photo" placeholder="book image">
                                </label>
                                <p>{{ imageName}}</p>
                            </div>
                        </div>
                        <hr>
                        <button @click="onAddAmanat" type="button" class=" btn custom-btn-color px-3">Save</button>
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
                            <th scope="col" class="d-none d-sm-table-cell">category</th>
                            <th scope="col">userName</th>
                            <th scope="col" class="d-none d-sm-table-cell">bookName</th>
                            <th scope="col" class="d-none d-sm-table-cell">time</th>
                            <th scope="col">Option</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(amanat, index) in amanats" :key="amanat._id">
                            <th scope="row">{{ index+1 }}</th>
                            <td class="d-none d-sm-table-cell">{{amanat.category.type}}</td>
                            <td class="d-none d-sm-table-cell">{{amanat.userId.fname}}</td>
                            <td class="d-none d-sm-table-cell">{{amanat.bookId.title}}</td>
                            <td class="d-none d-sm-table-cell">{{amanat.time}}</td>

                            <td>
                                <a @click="onViewAmanat(amanat._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                                <a @click="onViewAmanat(amanat._id)" class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                                <a @click="onDeleteAmanat(amanat._id, index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>

                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <!--View  Modal -->
            <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content" v-if="amanatDetails">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewModalLabel">{{amanatDetails.time}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        <form class="px-md-5">
                            <div class="row">
                                <div class="col-3">
                                    
                                    <!-- file input -->
                                    <div>
                                        <img :src="amanatDetails.photo" alt="Bookphoto" width="100%">
                                    </div>
                                </div>
                                <div class="col-9">
                                        <!--Cateagory dropdown-->
                                        <div class="form-group row">
                                            <label class="col-sm-4 col-form-label">Category</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{amanatDetails.category.type}}</label>
                                            </div>
                                        </div>
                                            <!--user input-->
                                        <div class="form-group row">
                                            <label for="user" class="col-sm-4 col-form-label">userName</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{amanatDetails.userId.fname}}</label>
                                            </div>
                                        </div>

                                         <!--book input-->
                                        <div class="form-group row">
                                            <label for="book" class="col-sm-4 col-form-label">bookName</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{amanatDetails.bookId.title}}</label>
                                            </div>
                                        </div>
                
                                            <!--time input-->
                                        <div class="form-group row">
                                            <label for="time" class="col-sm-4 col-form-label">time</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{amanatDetails.time}}</label>
                                            </div>
                                        </div>     
                                    </div>
                                </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>


        <!--Edit  Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" v-if="amanatDetails">
            <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">{{amanatDetails.bookId.title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="px-md-5">
                        <div class="row">
                            <div class="col-3">
                                
                                <!-- file input -->
                                <div>
                                    <label for="description" class="col-sm-3 col-form-label col-form-label-sm">Add a photo</label>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-9">
                                        <label class="custom-choosefile-button">
                                            <i class="fa fa-plus" style="color: #ddd; font-size:3rem"></i>
                                                <input @change="onSelectedFileUpdate" type="file">
                                        </label>
                                        <p>{{fileNameUpdate}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-9">
                                    <!--Cateagory drop-->
                                    <div class="form-group row">
                                        <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                                        <div class="col-sm-9">
                                        <select v-model="amanatDetails.category._id" class="form-control form-control-sm" id="category" >
                                            <option
                                            v-for="category in categories"
                                            :key="category._id"
                                            :selected="category._id == amanatDetails.category._id"
                                            :value="category._id">{{category.type}}</option>
                                        </select>
                                        </div>
                                    </div>

                                       <!--user drop-->
                                    <div class="form-group row">
                                        <label for="userId" class="col-sm-3 col-form-label col-form-label-sm">userName</label>
                                        <div class="col-sm-9">
                                        <select v-model="amanatDetails.userId._id" class="form-control form-control-sm" id="userId" >
                                            <option
                                            v-for="user in users"
                                            :key="user._id"
                                            :selected="user._id == amanatDetails.userId._id"
                                            :value="user._id">{{user.fname}}</option>
                                        </select>
                                        </div>
                                    </div>

                                       <!--book drop-->
                                    <div class="form-group row">
                                        <label for="book" class="col-sm-3 col-form-label col-form-label-sm">bookName</label>
                                        <div class="col-sm-9">
                                        <select v-model="amanatDetails.bookId._id" class="form-control form-control-sm" id="bookId" >
                                            <option
                                            v-for="book in books"
                                            :key="book._id"
                                            :selected="book._id == amanatDetails.bookId._id"
                                            :value="book._id">{{book.title}}</option>
                                        </select>
                                        </div>
                                    </div>
            
                                        <!--time input-->
                                    <div class="form-group row">
                                        <label for="time" class="col-sm-3 col-form-label col-form-label-sm">time</label>
                                        <div class="col-sm-9">
                                        <input v-model="amanatDetails.time" type="text" class="form-control form-control-sm" id="time" >
                                        </div>
                                    </div>     
                                </div>
                            </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button @click="amanatUpdate(amanatDetails._id)" type="button" class=" btn custom-btn-color px-3">Save</button>
            </div>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            category: null,
            userId: null,
            bookId: null,
            time: "",
            imageName:"",
            fileName: "",
            selectedFile:null,
            selectedFileUpdate: null,
            fileNameUpdate: null
            
        }
    },
    async asyncData({$axios}){
        try {
            const categoryResponse = await $axios.$get('http://localhost:3000/api/categories')
            const userResponse = await $axios.$get('http://localhost:3000/api/users')
            const bookResponse = await $axios.$get('http://localhost:3000/api/books')
            const amanatResponse = await $axios.$get('http://localhost:3000/api/amanat')


            return{
                categories: categoryResponse.categories,
                users: userResponse.users,
                books: bookResponse.books,
                amanats: amanatResponse.amanats,
                amanatDetails : null

            }
            
        } catch (err) {
            console.log(err)
        }
    },
    methods:{
        onSelectedImage(event) {
            this.selectedFile = event.target.files[0]
            this.imageName = event.target.files[0].name
            console.log(this.selectedFile)

        },
         onSelectedFile(data) {
            this.selectedFile = data.target.files[0]
            this.imageName = data.target.files[0].name
            console.log(this.selectedFile)

        },

        onSelectedFileUpdate(event) {
            this.selectedFileUpdate = event.target.files[0]
            this.fileNameUpdate = event.target.files[0].name

        },
        async onAddAmanat() {
            try {
                const data = new FormData()
                data.append('category', this.category)
                data.append('userId', this.userId)
                data.append('bookId', this.bookId)
                data.append('photo', this.selectedFile, this.selectedFile.name)
                data.append('time', this.time)
                await this.$axios.$post(
                    'http://localhost:3000/api/amanat',
                    data
                )
                this.category = null
                this.userId = null
                this.bookId = null
                this.time= ""
                this.fileName= ""
                this.selectedFile= null

                const updatedAmanat = await this.$axios.$get('http://localhost:3000/api/amanat')
                this.amanats = updatedAmanat.amanats

                
            } catch (err) {
                console.log(err)
                
            }


        },
        async onDeleteAmanat(id, index) {
            try {
                const result = await this.$axios.$delete('http://localhost:3000/api/amanat/'+id)
                if(result.status) {
                    this.amanats.splice(index, 1)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async onViewAmanat(id) {
            try {
            const amanatResponse = await this.$axios.$get('http://localhost:3000/api/amanat/'+id);
            this.amanatDetails = amanatResponse.amanats

            }catch(err) {
                console.log(err)
            }
        },
        async amanatUpdate(id) {
            try {
                const data = new FormData()
                data.append('category', this.amanatDetails.category._id)
                data.append('userId', this.amanatDetails.userId._id)
                data.append('bookId', this.amanatDetails.bookId._id)
                data.append('time', this.amanatDetails.time)
                data.append('photo', this.selectedFileUpdate, this.selectedFileUpdate.name)
                

            const amanatResponse = await this.$axios.$put(
                'http://localhost:3000/api/amanat/'+id,
                 data
                );
                
                this.selectedFileUpdate = null
                this.fileNameUpdate =""

                $('#editModal').modal('hide')
                const updatedamanat = await this.$axios.$get('http://localhost:3000/api/amanat')
                this.amanats = updatedamanat.amanats

            }catch(err) {
                console.log(err)
            }
        }
        

    }

}
</script>

<style>

</style>