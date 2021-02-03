<template>
<!-- Tittle page-->
    <div>
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                <h1 class="display-4">all saved users</h1>
                </div>
            </div>
        </div>
    
            <!-- table -->

            <div class="row">
                <div class="col px-5 pt-5">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">fname</th>
                            <th scope="col" class="d-none d-sm-table-cell">category</th>
                            <th scope="col" class="d-none d-sm-table-cell">amount</th>
                            <th scope="col" class="d-none d-sm-table-cell">email</th>
                            <th scope="col" class="d-none d-sm-table-cell">address</th>
                            <th scope="col">Option</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="user._id">
                            <th scope="row">{{index+1}}</th>
                            <td>{{user.fname}}</td>
                            <td class="d-none d-sm-table-cell">{{user.category}}</td>
                            <td class="d-none d-sm-table-cell">{{user.amount}}</td>
                            <td class="d-none d-sm-table-cell">{{user.email}}</td>
                            <td class="d-none d-sm-table-cell">{{user.address}}</td>

                            <td>
                                <a @click="onViewUser(user._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                                <a @click="onViewUser(user._id)" class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                                <a @click="onDeleteUser(user._id, index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>

                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <!--View  Modal -->
            <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" v-if="userDetails">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewModalLabel">{{userDetails.fname}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        <form class="px-md-5">
                            <div class="row">

                                <div class="col-9">
                                        <!--Cateagory dropdown-->
                                        <div class="form-group row">
                                            <label class="col-sm-4 col-form-label">Category</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{userDetails.category}}</label>
                                            </div>
                                        </div>
                                            <!--amount input-->
                                        <div class="form-group row">
                                            <label for="amount" class="col-sm-4 col-form-label">amount</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{userDetails.amount}}</label>
                                            </div>
                                        </div>
                
                                            <!--email input-->
                                        <div class="form-group row">
                                            <label for="email" class="col-sm-4 col-form-label">email</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{userDetails.email}}</label>
                                            </div>
                                        </div> 

                                          <!--address input-->
                                        <div class="form-group row">
                                            <label for="address" class="col-sm-4 col-form-label">address</label>
                                            <div class="col-sm-8">
                                                <label class="col-form-label">{{userDetails.address}}</label>
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
            <div class="modal-content" v-if="userDetails">
            <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">{{userDetails.fname}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="px-md-5">
                        <div class="row">

                            <div class="col-9">
                                    <!--Cateagory drop-->
                                    <div class="form-group row">
                                        <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                                        <div class="col-sm-9">
                                            <!-- <input v-model="userDetails.category" type="text" class="form-control form-control-sm" id="category"> -->
                                        <select v-model="userDetails.category" class="form-control form-control-sm" id="category"   selected  >
                                            <option>primary</option>
                                            <option>temporary</option>
                                        </select>
                                        </div>
                                    </div>

                                    <!--fname input-->
                                    <div class="form-group row">
                                        <label for="fname" class="col-sm-3 col-form-label col-form-label-sm">fname</label>
                                        <div class="col-sm-9">
                                        <input v-model="userDetails.fname" type="text" class="form-control form-control-sm" id="fname" >
                                        </div>
                                    </div>

                                        <!--amount input-->
                                    <div class="form-group row">
                                        <label for="amount" class="col-sm-3 col-form-label col-form-label-sm">amount</label>
                                        <div class="col-sm-9">
                                        <input v-model="userDetails.amount" type="number" class="form-control form-control-sm" id="amount" >
                                        </div>
                                    </div>
            
                                        <!--email input-->
                                    <div class="form-group row">
                                        <label for="email" class="col-sm-3 col-form-label col-form-label-sm">email</label>
                                        <div class="col-sm-9">
                                        <input v-model="userDetails.email" type="email" class="form-control form-control-sm" id="email" >
                                        </div>
                                    </div>  
                                      <!--address input-->
                                    <div class="form-group row">
                                        <label for="address" class="col-sm-3 col-form-label col-form-label-sm">address</label>
                                        <div class="col-sm-9">
                                        <input v-model="userDetails.address" type="text" class="form-control form-control-sm" id="address" >
                                        </div>
                                    </div>    
                                </div>
                            </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button @click="userUpdate(userDetails._id)" type="button" class=" btn custom-btn-color px-3">Save</button>
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
            category: "",
            fname: "",
            amount: 0,
            email: "",
            address:""

        }
    },
    async asyncData({$axios}){
        try {
            const userResponse = await $axios.$get('http://localhost:3000/api/users')

            return{
                users: userResponse.users,
                userDetails: null
            }
            
        } catch (err) {
            console.log(err)
            
        }
    },
    methods: {
        
        async  onAddUser() {

            try {
                const data = {
                    category : this.category,
                    fname : this.fname,
                    amount : this.amount,
                    email : this.email,
                    address : this.address
                }

                await this.$axios.$post(
                    'http://localhost:3000/api/users',
                    data
                )

                this.category = ""
                this.fname = ""
                this.amount= 0
                this.email = ""
                this.address=""

                const updateUser = await this.$axios.$get('http://localhost:3000/api/users')
                this.users = updateUser.users
                    
            } catch (err) {
                console.log(err)
            }

            },

        async onDeleteUser(id, index) {
            try {
                const result = await this.$axios.$delete('http://localhost:3000/api/users/'+id)
                if(result.status) {
                    this.users.splice(index, 1)
                }
            } catch (err) {
                console.log(err)
                
            }

        },
         async onViewUser(id) {
            try {
            const userResponse = await this.$axios.$get('http://localhost:3000/api/users/'+id);
            this.userDetails = userResponse.users

            }catch(err) {
                console.log(err)
            }
        },
        async userUpdate(id) {
            try {  
                const data = {
                    category : this.userDetails.category,
                    fname : this.userDetails.fname,
                    amount : this.userDetails.amount,
                    email : this.userDetails.email,
                    address : this.userDetails.address
                }
                

            const userResponse = await this.$axios.$put(
                'http://localhost:3000/api/users/'+id,
                 data
                );
                

                $('#editModal').modal('hide')
                const updateUser = await this.$axios.$get('http://localhost:3000/api/users')
                this.users = updateUser.users

            }catch(err) {
                console.log(err)
            }
        }
    }

}
</script>

<style>

</style>