<template>
  <div>
    <!-- Title page -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
        <h1 class="display-4">Add New Vendor</h1>
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
              <input type="text" class="form-control form-control-sm" id="name">
            </div>
          </div>

          <!-- Last name input -->
          <div class="form-group row">
            <label for="lastName" class="col-sm-3 col-form-label col-form-label-sm">Last Name</label>
            <div class="col-sm-8">
              <input type="number" class="form-control form-control-sm" id="lastName">
            </div>
          </div>

          <!-- Stock Quantity input -->
          <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
            <div class="col-sm-8">
              <input type="email" class="form-control form-control-sm" id="email">
            </div>
          </div>
          
          <!-- Stock Quantity input -->
          <div class="form-group row">
            <label for="phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
            <div class="col-sm-8">
              <input type="phone" class="form-control form-control-sm" id="phone">
            </div>
          </div>

          <hr>

          <button type="button" class="btn custom-btn-color px-3">Save</button>
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
            <tr>
              <th scope="row">1</th>
              <td>Fatemeh</td>
              <td class="d-none d-sm-table-cell">Rezwani</td>
              <td class="d-none d-sm-table-cell">fatemeh@gmail.com</td>
              <td>
                <a class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-user" style="color: #ffc107"></i></a>
                <a class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                <a class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>