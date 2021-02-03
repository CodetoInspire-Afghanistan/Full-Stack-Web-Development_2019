<template>
  <div>
    <!-- Title page -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
        <h1 class="display-4">Add New user</h1>
      </div>
      </div>
    </div>
    <!-- Form -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">
          <!-- name input -->
          <div class="form-group row">
            <label for="name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
            <div class="col-sm-8">
              <input v-model="name" type="text" class="form-control form-control-sm" id="name">
            </div>
          </div>

          <!-- Last name input -->
          <div class="form-group row">
            <label for="lastName" class="col-sm-3 col-form-label col-form-label-sm">Last Name</label>
            <div class="col-sm-8">
              <input v-model="lastName" type="text" class="form-control form-control-sm" id="lastName">
            </div>
          </div>

          <!-- Stock Quantity input -->
          <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
            <div class="col-sm-8">
              <input v-model="email" type="email" class="form-control form-control-sm" id="email">
            </div>
          </div>
          
          <!-- Stock Quantity input -->
          <div class="form-group row">
            <label for="phone" class="col-sm-3 col-form-label col-form-label-sm">Password</label>
            <div class="col-sm-8">
              <input v-model="password" type="password" class="form-control form-control-sm" id="password">
            </div>
          </div>

          <hr>

          <button @click="onAddUser" type="button" class="btn custom-btn-color px-3">Save</button>
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
              <th scope="col">Name</th>
              <th scope="col" class="d-none d-sm-table-cell">Last Name</th>
              <th scope="col" class="d-none d-sm-table-cell">Email</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user._id">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.lastName }}</td>

              <td class="d-none d-sm-table-cell">{{user.email}}</td>
              <td>
                <a @click="onviewUser(user._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                <a @click="onviewUser(user._id)" class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                <a @click="onDeleteUser(user._id, index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    
    <!-- View Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <!-- <div class="modal-content" v-if="userDetails"> -->
          <div class="modal-header">
            <!-- <h5 class="modal-title" id="viewModalLabel">{{ userDetails.name }} {{ userDetails.lastName}}</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="px-md-5">
              <div class="row">
                <div class="col-9">
                  <!-- user input -->
                  <!-- <div class="form-group row">
                    <label for="name" class="col-sm-4 col-form-label">Name</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">${{ userDetails.name }}</label>
                    </div>
                  </div> -->

                  <!-- lastName input -->
                  <!-- <div class="form-group row">
                    <label for="lastName" class="col-sm-4 col-form-label">Last Name</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{ userDetails.lastName }}</label>
                    </div>
                  </div> -->

                   <!-- Email input -->
                  <!-- <div class="form-group row">
                    <label for="email" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{ userDetails.email }}</label>
                    </div>
                  </div> -->

                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <!-- <div class="modal-content" v-if="userDetails"> -->
          <div class="modal-header">
            <!-- <h5 class="modal-title" id="viewModalLabel">{{ userDetails.name }} {{ userDetails.lastName}}</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="px-md-5">
              <div class="row">
                <div class="col-9">
                  <!-- user input -->
                  <!-- <div class="form-group row">
                    <label for="name" class="col-sm-4 col-form-label">Name</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">${{ userDetails.name }}</label>
                    </div>
                  </div> -->

                  <!-- lastName input -->
                  <!-- <div class="form-group row">
                    <label for="lastName" class="col-sm-4 col-form-label">Last Name</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{ userDetails.lastName }}</label>
                    </div>
                  </div> -->

                   <!-- Email input -->
                  <!-- <div class="form-group row">
                    <label for="email" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{ userDetails.email }}</label>
                    </div>
                  </div> -->

                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data(){
     return{
        name: "",
        lastName: "",
        email: "",
        password:""
     }
   },
   async asyncData($axios){
      try{
        const userResponse = await $axios.$get('http://localhost:3000/api/users')
        return{
          users: userResponse.user
        }
      }
       catch(err) {
      console.log(err)
      }
   },
   methods:{
     async onAddUser(){
        try{
          const data = new FormData()
          data.append('name', this.name)
          data.append('lastName', this.lastName)
          data.append('email', this.email)
          data.append('password', this.password)

          await this.$axios.$post(
              'http://localhost:3000/api/users',
              data
          )
        }

        catch(err) {
        console.log(err)
      }
     }
   }
}
</script>

<style>

</style>