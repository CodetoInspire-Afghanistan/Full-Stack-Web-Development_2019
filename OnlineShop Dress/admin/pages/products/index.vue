<template>
  <div>
    <!-- Title page -->
    <div class="row">
    <div class="col">
        <div class="jumbotron">
        <h1 class="display-4">Add Product</h1>
        </div>
    </div>
    </div>
    <!-- Form-->
    <div class="row px-md-5">
           <div class="col px-5">
             <form class="px-md-5">
               <!-- Category dropdown -->
                <div class="form-group row">
                    <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                    <div class="col-sm-9">
                    <select v-model="category" class="form-control form-control-sm" id="category">
                        <option v-for="category in categories" :key="category._id" :value="category._id">{{category.type}}</option>
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
                <!-- Color input -->
                <div class="form-group row">
                    <label for="color" class="col-sm-3 col-form-label col-form-label-sm">Color</label>
                    <div class="col-sm-9">
                    <input v-model="color" type="text" class="form-control form-control-sm" id="color">
                    </div>
                </div>
                <!-- Code input -->
                <div class="form-group row">
                    <label for="code" class="col-sm-3 col-form-label col-form-label-sm">Code</label>
                    <div class="col-sm-9">
                    <input v-model="code" type="text" class="form-control form-control-sm" id="code">
                    </div>
                </div>
                 <!-- Price input -->
                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
                    <div class="col-sm-9">
                    <input v-model="price" type="number" class="form-control form-control-sm" id="price">
                    </div>
                </div>
                <!-- Size input -->
                <div class="form-group row">
                    <label for="size" class="col-sm-3 col-form-label col-form-label-sm">Size</label>
                    <div class="col-sm-9">
                    <input v-model="size" type="text" class="form-control form-control-sm" id="size">
                    </div>
                </div>
                 <!-- Stock Quantity input -->
                <div class="form-group row">
                    <label for="stock" class="col-sm-3 col-form-label col-form-label-sm">Stock Quantity</label>
                    <div class="col-sm-9">
                    <input v-model="stockQuantity" type="text" class="form-control form-control-sm" id="stock">
                    </div>
                </div>
                <!-- file input -->
               <div>
                    <label>Select Photo</label>
                </div>
                <div class="form-group row">
                    <div class="col-sm-9">
                    <label class="custom-choosefile-button">
                        <i class="fa fa-plus" style="color: #ddd; font-size:3rem;"></i>
                        <input type="file" @change="onSelectedImage">
                    </label>
                    <P>{{ imageName }}</P>
                    </div>
                </div>
                <hr>

                <button @click="onAddProduct" type="button" class="btn custom-btn-color px-3">Add</button>
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
                  <th scope="col" class="d-none d-sm-table-cell">Title</th>
                  <th scope="col">Size</th>
                  <th scope="col">Code</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in products" :key="product._id">
                  <th scope="row">{{ index+1 }}</th>
                  <td class="d-none d-sm-table-cell">{{ product.title}}</td>
                  <td>{{ product.size}}</td>
                  <td>#{{ product.code}}</td>
                  <td>
                        <a @click="onviewProduct(product._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                        <a @click="onviewProduct(product._id)" class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                        <a @click="onDeleteProduct(product._id, index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div> 
      <!-- View Modal -->
        <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content" v-if="productDetails">
              <div class="modal-header">
                <h5 class="modal-title" id="viewModalLabel">{{ productDetails.title }}</h5>
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
                        <img :src="productDetails.image" alt="product img" width="100%">
                     </div>
                   </div>
                   <div class="col-9">
                    <!-- Category dropdown -->
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Category</label>
                        <div class="col-sm-8">
                          <label class="col-form-label">{{ productDetails.category.type }}</label>
                        </div>
                    </div>
                    <!-- Title input -->
                    <div class="form-group row">
                        <label for="title" class="col-sm-4 col-form-label">Title</label>
                        <div class="col-sm-8">
                        <label class="col-sm-3 col-form-label">{{ productDetails.title }}</label>
                        </div>
                    </div>
                    <!-- Color input -->
                    <div class="form-group row">
                        <label for="color" class="col-sm-4 col-form-label">Color</label>
                        <div class="col-sm-8">
                        <label class="col-sm-3 col-form-label">{{ productDetails.color }}</label>
                        </div>
                    </div>
                    <!-- Code input -->
                    <div class="form-group row">
                        <label for="code" class="col-sm-4 col-form-label">Code</label>
                        <div class="col-sm-8">
                        <label class="col-sm-3 col-form-label">#{{ productDetails.code }}</label>
                        </div>
                    </div>
                    <!-- Price input -->
                    <div class="form-group row">
                        <label for="price" class="col-sm-4 col-form-label">Price</label>
                        <div class="col-sm-8">
                        <label class="col-sm-3 col-form-label">{{ productDetails.price }}AF</label>
                        </div>
                    </div>
                    <!-- Size input -->
                    <div class="form-group row">
                        <label for="size" class="col-sm-4 col-form-label">Size</label>
                        <div class="col-sm-8">
                        <label class="col-sm-3 col-form-label">{{ productDetails.size }}</label>
                        </div>
                    </div>
                    <!-- Stock Quantity input -->
                    <div class="form-group row">
                        <label for="stock" class="col-sm-4 col-form-label">Stock Quantity</label>
                        <div class="col-sm-8">
                        <label class="col-sm-3 col-form-label">{{ productDetails.stockQuantity }}</label>
                        </div>
                    </div>
                   </div>
                 </div>
                </form> 
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
    <!-- Edit  Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content" v-if="productDetails">
              <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">{{ productDetails.title }}</h5>
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
                        <label>Select Photo</label>
                     </div>
                     <div class="form-group row">
                        <div class="col-sm-9">
                        <label class="custom-choosefile-button">
                            <i class="fa fa-plus" style="color: #ddd; font-size:3rem;"></i>
                            <input @change="onSelectedFileUpdate" type="file">
                        </label>
                        <P>{{ imageNameUpdate }}</P>
                        </div>
                     </div>
                   </div>
                   <div class="col-9">
                    <!-- Category dropdown -->
                    <div class="form-group row">
                        <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                        <div class="col-sm-9">
                        <select v-model="productDetails.category._id" class="form-control form-control-sm" id="category">
                            <option 
                            v-for="category in categories"
                            :key="category._id"
                            :selected="category._id == productDetails.category._id"
                            :value="category._id">{{category.type}}</option>
                        </select>
                        </div>
                    </div>
                    <!-- Title input -->
                    <div class="form-group row">
                        <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Title</label>
                        <div class="col-sm-9">
                        <input v-model="productDetails.title" type="text" class="form-control form-control-sm" id="title">
                        </div>
                    </div>
                    <!-- Color input -->
                    <div class="form-group row">
                        <label for="color" class="col-sm-3 col-form-label col-form-label-sm">Color</label>
                        <div class="col-sm-9">
                        <input v-model="productDetails.color" type="text" class="form-control form-control-sm" id="color">
                        </div>
                    </div>
                    <!-- Code input -->
                    <div class="form-group row">
                        <label for="code" class="col-sm-3 col-form-label col-form-label-sm">Code</label>
                        <div class="col-sm-9">
                        <input v-model="productDetails.code" type="text" class="form-control form-control-sm" id="code">
                        </div>
                    </div>
                    <!-- Price input -->
                    <div class="form-group row">
                        <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
                        <div class="col-sm-9">
                        <input v-model="productDetails.price" type="number" class="form-control form-control-sm" id="price">
                        </div>
                    </div>
                    <!-- Size input -->
                    <div class="form-group row">
                        <label for="size" class="col-sm-3 col-form-label col-form-label-sm">Size</label>
                        <div class="col-sm-9">
                        <input v-model="productDetails.size" type="text" class="form-control form-control-sm" id="size">
                        </div>
                    </div>
                    <!-- Stock Quantity input -->
                    <div class="form-group row">
                        <label for="stock" class="col-sm-3 col-form-label col-form-label-sm">Stock Quantity</label>
                        <div class="col-sm-9">
                        <input v-model="productDetails.stockQuantity" type="text" class="form-control form-control-sm" id="stock">
                        </div>
                    </div>
                   </div>
                 </div>
               </form> 
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="productUpdate(productDetails._id)" type="button" class="btn custom-btn-color px-3">Save</button>
              </div>
              </div>
            </div>
          </div>
        </div>  
  </div>
</template>

<script>
export default {
  data (){
    return {
      category: null,
      title: "",
      color: "",
      code: "",
      price: 0,
      size: "",
      stockQuantity:0,
      imageName: "",
      selectedFile: null,
      imageNameUpdate: "",
      selectedFileUpate: null
   }
  },
   async asyncData({$axios}) {
    try {
      const categoryResponse = await $axios.$get('http://localhost:3000/api/category')
      const productsResponse = await $axios.$get('http://localhost:3000/api/products')

      return {
        categories: categoryResponse.category,
        products: productsResponse.products,
        productDetails: null
      }
    } catch(err) {
      console.log(err)
    }
  },
   methods: {
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
      onSelectedFileUpdate(data) {
        this.selectedFileUpate = data.target.files[0]
        this.imageNameUpdate = data.target.files[0].name
     },
    async onAddProduct() {
       try {
        const data = new FormData()
        data.append('categoryID', this.category)
        data.append('title', this.title)
        data.append('color', this.color)
        data.append('code', this.code)
        data.append('price', this.price)
        data.append('size', this.size)
        data.append('stockQuantity', this.stockQuantity)
        data.append('image', this.selectedFile, this.selectedFile.name)
        await this.$axios.$post(
          'http://localhost:3000/api/products',
          data
        )
        this.category = null
        this.title = ""
        this.color = ""
        this.code = ""
        this.price = 0
        this.size = ""
        this.stockQuantity = 0
        this.imageName = ""
        this.selectedFile = null
        
        const updateProducts = await this.$axios.$get('http://localhost:3000/api/products')
        this.products = updateProducts.products 

      } catch(err) {
        console.log(err)
      }
     },
     async onDeleteProduct(id, index) {
      try {
        const result = await this.$axios.$delete('http://localhost:3000/api/products/'+id)
        if(result.status) {
          this.products.splice(index, 1)
        }
      } catch(err) {
        console.log(err)
      }
    },
     async onviewProduct(id) {
      try {
        // console.log("---------",id)
        const productResponse = await this.$axios.$get('http://localhost:3000/api/products/'+id)
        this.productDetails = productResponse.product
        // console.log("--------------", productResponse.product)
      } catch(err) {
        console.log(err)
      }
    },
    async productUpdate(id) {
      try {
        const data = new FormData()
        data.append('categoryID', this.productDetails.category._id)
        data.append('title', this.productDetails.title)
        data.append('color', this.productDetails.color)
        data.append('code', this.productDetails.code)
        data.append('size', this.productDetails.size)
        data.append('price', this.productDetails.price)
        data.append('stockQuantity', this.productDetails.stockQuantity)
        data.append('image', this.selectedFileUpate, this.selectedFileUpate.name)

        const productResponse = await this.$axios.$put(
          'http://localhost:3000/api/products/'+id,
          data
          )
        
        this.selectedFileUpate = null;
        this.imageNameUpdate = ""
        $('#editModal').modal('hide')

        const updateProduct = await this.$axios.$get('http://localhost:3000/api/products')
        this.products = updateProduct.products

      } catch(err) {
        console.log(err)
      }
    }
   }
}
</script>


<style>

</style>