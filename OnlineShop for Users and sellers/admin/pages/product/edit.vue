<template>
  <div>
    <!-- Title page -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
        <h1 class="display-4">Edit Product</h1>
      </div>
      </div>
    </div>
    <!-- Form -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">

          <!-- Category dropdown -->
          <div class="form-group row">
            <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
            <div class="col-sm-9">
              <select v-model="category" class="form-control form-control-sm" id="category">
                <option v-for="category in categories" :key="category._id" :value="category._id">{{ category.type }}</option>
              </select>
            </div>
          </div>

          <!-- Vendor dropdown -->
          <div class="form-group row">
            <label for="woner" class="col-sm-3 col-form-label col-form-label-sm">Vendor</label>
            <div class="col-sm-9">
              <select v-model="vendor" class="form-control form-control-sm" id="vendor">
                <option 
                 :value="vendor._id"
                 v-for="vendor in vendors"
                 :key="vendor._id"
                >{{ vendor.name }}</option>
              </select>
            </div>
          </div>

          <!-- Title input -->
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Title</label>
            <div class="col-sm-9">
              <input v-model="title" type="text" class="form-control form-control-sm" id="title">
            </div>
          </div>

          <!-- Price input -->
          <div class="form-group row">
            <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
            <div class="col-sm-9">
              <input v-model="price" type="number" class="form-control form-control-sm" id="price">
            </div>
          </div>

          <!-- Stock Quantity input -->
          <div class="form-group row">
            <label for="stockQuantity" class="col-sm-3 col-form-label col-form-label-sm">Stock Quantity</label>
            <div class="col-sm-9">
              <input v-model="stockQuantity" type="number" class="form-control form-control-sm" id="stockQuantity">
            </div>
          </div>

          <!-- Description textarea -->
          <div class="form-group row">
            <label for="description" class="col-sm-3 col-form-label col-form-label-sm">Description</label>
            <div class="col-sm-9">
              <textarea v-model="description" class="form-control form-control-sm" id="description"></textarea>
            </div>
          </div>

          <!-- file input -->
          <div>
            <label>Add a photo</label>
          </div>
          <div class="form-group row">
            <div class="col-sm-9">
              <label class="custom-choosefile-button">
                <i class="fa fa-plus" style="color: #ddd; font-size:3rem;"></i>
                <input @change="onSelectedFile" type="file">
              </label>
              <p>{{ fileName }}</p>
            </div>
          </div>

          <hr>

          <button @click="onAddProduct" type="button" class="btn custom-btn-color px-3">Save</button>
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