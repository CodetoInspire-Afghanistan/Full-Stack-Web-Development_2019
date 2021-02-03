<template>
  <div>
    <!-- Title page -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
        <h1 class="display-4">Add New Category</h1>
      </div>
      </div>
    </div>
    <!-- Form -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">

          <!-- Type input -->
          <div class="form-group row">
            <label for="type" class="col-sm-3 col-form-label col-form-label-sm">Type</label>
            <div class="col-sm-8">
              <input  type="text" class="form-control form-control-sm" id="type">
            </div>
          </div>

          <hr>

          <button type="button" class="btn custom-btn-color px-3">Save</button>
        </form>
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