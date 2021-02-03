<template>
  <div>
    <!-- Page Title -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
          <h1 class="display-4">Admin Page</h1>
          </div>
      </div>
    </div>
    <!-- Form section -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">
          <!-- Email filde -->
  <!-- <div class="form-group row">
    <label for="email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-9">
      <input v-model="email" type="email" class="form-control form-control-sm" id="email">
    </div>
  </div> -->
   <!-- Password filde -->
  <!-- <div class="form-group row">
    <label for="password" class="col-sm-3 col-form-label col-form-label-sm">Password</label>
    <div class="col-sm-9">
      <input v-model="password" type="password" class="form-control form-control-sm" id="password">
    </div>
  </div> -->
    <hr>
    <button @click="onAddAdmin" type="button" class="btn custom-btn-color px-3">Save</button>
  </form>
      </div>
    </div>
    <!-- Table -->
    <!-- <div class="row">
      <div class="col px-5 pt-3 pt-5">
          <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col" class="d-none d-sm-table-cell">Gender</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <th scope="row">1</th>
              <td>{{user.name}}</td>
              <td>{{user.lastName}}</td>
              <td class="d-none d-sm-table-cell">{{user.gender}}</td>
              <td>
                <a class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                <a class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                <a class="custom-btn"><i class="fa fa-trash" style="color: red"></i></a>
                </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div> -->

<!-- View Modal -->
<div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="viewModalLabel"> View Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
              <div class="row">
                    <div class="col-9">
                      <!-- Email filde -->
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Email</label>
                    <div class="col-sm-9">
                      <label class="col-form-label">fatemanazari79@gmail.com</label>
                    </div>
                  </div>
                  <!-- Password filde -->
                  <div class="form-group row">
                    <!-- <label for="password" class="col-sm-3 col-form-label col-form-label-sm">Password</label> -->
                    <div class="col-sm-9">
                      <!-- <label class="col-form-label">123</label> -->
                    </div>
                  </div>
                  </div>
                    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

<!-- Edit Model -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel"> Edit Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="px-md-5">
                  <div class="row">
                    <div class="col-9">
                      <!-- Email filde -->
                  <div class="form-group row">
                    <label for="email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-9">
                      <!-- <input v-modal="email" type="email" class="form-control form-control-sm" id="email"> -->
                    </div>
                  </div>
                  <!-- Password filde -->
                  <div class="form-group row">
                    <!-- <label for="password" class="col-sm-3 col-form-label col-form-label-sm">Password</label> -->
                    <div class="col-sm-9">
                      <!-- <input v-model="password" type="password" class="form-control form-control-sm" id="password"> -->
                    </div>
                  </div>
                    <button type="button" class="btn custom-btn-color px-3">Save</button>
                    </div>
                    </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       email: "",
//       password: 0,
//       name: "",
//       lastName: "",

//     }
//   },
//   async asyncData({$axios}) {
//     try{
//       const userRespons = await $axios.$get('http://localhost:3000/api/users')

//       return{
//       users: userRespons.users
//       }
//     }catch(err) {
//        console.log(err)
//     }

//   },
//   methods: {
//     async onAddAdmin() {
//       try{
//         const data = new FormData()
//         data.append('email', this.email)
//         data.append('password', this.password)
//         data.append('name', this.name)
//         data.append('lastName', this.lastName)

//         await this.$axios.$post('http://localhost:3000/api/users',data )
//       }catch (err) {
//         console.log(err)
//       }
//     }
//   }
// }
</script>

<style>
</style>
