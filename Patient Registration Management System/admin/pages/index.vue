<template>
  <div>
    <div class="row">
      <div class="col" v-for="(user, index) in users" :key="user._id">
        <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <span>{{index+1}}</span>
          <span>{{users.Name}}</span>
          <span>{{users.LastName}}</span>
          <span>{{users.Phone}}</span>
          <span>{{users.Field}}</span>
          <span>{{users.Email}}</span>
          <span>{{users.Password}}</span>
          <span>{{users.Gender}}</span>
          <span>
                  <a class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color:#ffc107"></i></a>
                  <a class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color:#343a40"></i></a>
                  <a @click="onDeleteuser(user._id, index)" class="custom-btn"><i class="fa fa-trash" style="color:#dc3545"></i></a>
          </span>
          
          <a href="#" class="btn btn-primary">Select</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({$axios}) {
    try {
      const userResponse = await $axios.$get('http://localhost:3000/api/user')

      return {
        user: userResponse.user
      }
    } catch(err) {
      console.log(err)
    }
  },
}
</script>


<style>

</style>