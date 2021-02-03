<template>
<div>
    <!-- Page Title -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
          <h1 class="display-4">Company Page</h1>
          </div>
      </div>
    </div>
    <!-- Form section -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">
          <!-- ID filde -->
        <div class="form-group row">
            <label for="id" class="col-sm-3 col-form-label col-form-label-sm">ID</label>
            <div class="col-sm-9">
            <input v-model="id" type="number" class="form-control form-control-sm" id="id">
            </div>
        </div>
   <!-- Name filde -->
  <div class="form-group row">
    <label for="name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
    <div class="col-sm-9">
      <input v-model="name" type="text" class="form-control form-control-sm" id="name">
    </div>
  </div>
  <!-- Last Name field -->
        <div class="form-group row">
            <label for="lastName" class="col-sm-3 col-form-label col-form-label-sm">Last Name</label>
            <div class="col-sm-9">
            <input v-model="lastName" type="text" class="form-control form-control-sm" id="lastName">
            </div>
        </div>

    <hr>
    <button @click="onAddUser" type="button" class="btn custom-btn-color px-3">Save</button>
  </form>
      </div>
    </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      name: "",
      lastName: "",

    }
  },
  async asyncData({$axios}) {
    try{
      const userRespons = await $axios.$get('http://localhost:3000/api/users')

      return{
      users: userRespons.users
      }
    }catch(err) {
       console.log(err)
    }

  },
  methods: {
    async onAddAdmin() {
      try{
        const data = new FormData()
        data.append('id', this.id)
        data.append('name', this.name)
        data.append('lastName', this.lastName)

        await this.$axios.$post('http://localhost:3000/api/users',data )
      }catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>