<template>
<div>
    <!-- Title page -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
        <h1 class="display-4">Add New Product</h1>
      </div>
      </div>
    </div>
    <!-- Form -->
    <div class="row px-md-5">
      <div class="col px-5">
        <form class="px-md-5">

          <!-- Title input -->
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Title</label>
            <div class="col-sm-9">
              <input v-model="title" type="text" class="form-control form-control-sm" id="title">
            </div>
          </div>
          
          <!-- type  input -->
          <div class="form-group row">
            <label for="type" class="col-sm-3 col-form-label col-form-label-sm">type</label>
            <div class="col-sm-9">
              <input v-model="type" type="String" class="form-control form-control-sm" id="type">
            </div>
          </div>
           <!-- code input -->
          <div class="form-group row">
            <label for="code" class="col-sm-3 col-form-label col-form-label-sm">code</label>
            <div class="col-sm-9">
              <input v-model="code" type="string" class="form-control form-control-sm" id="code">
            </div>
          </div>

          <!-- Price input -->
          <div class="form-group row">
            <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
            <div class="col-sm-9">
              <input v-model="price" type="number" class="form-control form-control-sm" id="price">
            </div>
          </div>
          
          <!-- Description textarea -->
          <div class="form-group row">
            <label for="description" class="col-sm-3 col-form-label col-form-label-sm">Description</label>
            <div class="col-sm-9">
              <textarea v-model="description" class="form-control form-control-sm" id="description"></textarea>
            </div>
          </div>

          <!-- file-->
          <div>
            <label>Add a photo</label>
          </div>
          <div class="form-group row">
            <div class="col-sm-9">
              <label class="custom-choosefile-button">
                <i class="fa fa-plus" style="color: #ddd; font-size:3rem;"></i>
                <input type="file" @change="onSelectedImage" name="photo" id="photo" />

              </label>
              <p>{{ imageName }}</p>
            </div>
          </div>





          <hr>

          <button @click="onAddProduct" type="button" class="btn custom-btn-color px-3">Save</button>
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
              <th scope="col" class="d-none d-sm-table-cell">code</th>
              <th scope="col" class="d-none d-sm-table-cell">Price</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,index) in products" :key="product._id">
              <th scope="row">{{index+1}}</th>
              <td>{{product.title}}</td>
              <td class="d-none d-sm-table-cell">{{product.code}}</td>
              <td class="d-none d-sm-table-cell">${{product.price}}</td>
              <td>
                <a @click="onviewProduct(product._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                <a @click="onviewProduct(product._id)"  class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                <a @click="onDeleteProduct(product._id,index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
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
            <h5 class="modal-title" id="viewModalLabel">{{productDetails.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
             <form class="px-md-5">
              <div class="row">
                <div class="col-3">
                  <!-- File input -->
                  <div>
                    <img :src="productDetails.photo" alt="product img" width="100%">
                  </div>
                </div>
                <div class="col-9">


                  <!-- Title input -->
                  <div class="form-group row">
                    <label for="title" class="col-sm-4 col-form-label">Title</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{productDetails.title}}</label>
                    </div>
                  </div>

                  <!-- Price input -->
                  <div class="form-group row">
                    <label for="price" class="col-sm-4 col-form-label">Price</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">${{productDetails.price}}</label>
                    </div>
                  </div>

                  <!-- type input -->
                  <div class="form-group row">
                    <label for="type" class="col-sm-4 col-form-label">type</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{productDetails.type}}</label>
                    </div>
                  </div>
                  <!-- code input -->
                  <div class="form-group row">
                    <label for="code" class="col-sm-4 col-form-label">code</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{productDetails.code}}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">

                  <!-- Description textarea -->
                  <div class="form-group row pt-3">
                    <label for="description" class="col-sm-2"><b>Description</b></label>
                    <div class="col-sm-10">
                      <label>{{productDetails.description}}</label>
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
    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content" v-if="productDetails">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">{{productDetails.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="px-md-5">
              <div class="row">
                <div class="col-3">

                  <!-- File input -->
                  <div>
                    <label>Add a photo</label>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-9">
                      <label class="custom-choosefile-button">
                        <i class="fa fa-plus" style="color: #ddd; font-size:3rem;"></i>
                        <input @change="onSelectedFileUpdate" type="file">
                      </label>
                      <p>{{fileNameUpdate}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-9">

                  <!-- Title input -->
                  <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Title</label>
                    <div class="col-sm-9">
                      <input v-model="productDetails.title" type="text" class="form-control form-control-sm" id="title">
                    </div>
                  </div>

              
                  <!--type input -->
                  <div class="form-group row">
                    <label for="type" class="col-sm-3 col-form-label col-form-label-sm">type</label>
                    <div class="col-sm-9">
                      <input v-model="productDetails.type" type="string" class="form-control form-control-sm" id="type">
                    </div>
                  </div>
                  
                  <!-- code input -->
                  <div class="form-group row">
                    <label for="code" class="col-sm-3 col-form-label col-form-label-sm">code</label>
                    <div class="col-sm-9">
                      <input v-model="productDetails.code" type="string" class="form-control form-control-sm" id="code">
                    </div>
                  </div>

                  <!-- Price input -->
                  <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
                    <div class="col-sm-9">
                      <input v-model="productDetails.price" type="number" class="form-control form-control-sm" id="price">
                    </div>
                  </div>

                </div>
              </div>
              
                  <div class="row">
                <div class="col">

                  <!-- Description textarea -->
                  <div class="form-group row pt-3">
                    <label for="description" class="col-sm-2 col-form-label col-form-label-sm">Description</label>
                    <div class="col-sm-10">
                      <textarea v-model="productDetails.description" class="form-control form-control-sm" id="description"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="productUpdate(productDetails._id)" type="button" class="btn custom-btn-color px-3">Save</button>
          </div>
        </div>
      </div>
    </div>
</div>    
</template>

<script>
export default{
  data(){
    return{
      title:"",
      price:0,
      code:"",
      type:"",
      description:"",
      fileName:"",
      onSelectedFileUpdate: null,
      fileNameUpdate: "",
      imageName: "",
selectedFile: null


    }
  },
  async asyncData({$axios}){
    try{
      const productResponse = await $axios.$get('http://localhost:3000/api/products')

      return{
        products:productResponse.products,
        productDetails:null
      }
    } catch(err){
      console.log(err)
    }
  },
  methods:{
    // onSelectedFile(event){
    //   this.selectedFile = event.target.files[0]
    //   this.fileName = event.target.files[0].name
    // },
   
   onSelectedImage(event) {
    this.selectedFile = event.target.files[0]
    this.imageName = event.target.files[0].name
    console.log(this.selectedFile);
},


    
     onSelectedFileUpdate(event){
      this.selectedFileUpdate = event.target.files[0]
      this.fileNameUpdate = event.target.files[0].name
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
        const productResponse = await this.$axios.$get('http://localhost:3000/api/products/'+id)
        this.productDetails = productResponse.product
      } catch(err) {
        console.log(err)
      }
    },
    async onAddProduct(){
       try{
          const data = new FormData()
        
         data.append('price',this.price)
         data.append('type',this.type)
         data.append('code',this.code)
         data.append('title',this.title)
        data.append('description',this.description)
        data.append('photo', this.selectedFile, this.selectedFile.name)

        // data.append('photo',this.selectedFile,this.selectedFile.name)
        // console.log
        // const data = {
        //   'price': this.price,
        //   'type':this.type,
        //   'code':this.code,
        //   'title':this.title,
        //   'description':this.description,
        //   'photo':this.selectedFile.name
        // }

         await this.$axios.$post(
           'http://localhost:3000/api/products',
           data
         )

          console.log("done-------")

          this.title=""
          this.price=0
          this.code=""
          this.type=""
          this.description=""
          this.fileName=""
          this.selectedFile= null

          const updateProduct = await this.$axios.$get('http://localhost:3000/api/products')
          this.products = updateProduct.products

       } catch(err){
         console.log(err)

       }
    }
    ,
    async productUpdate(id) {
      try {
           const data = new FormData()
        
         data.append('price',this.productDetails.price)
         data.append('type',this.productDetails.type)
         data.append('code',this.productDetails.code)
         data.append('title',this.productDetails.title)
        data.append('description',this.productDetails.description)
        // data.append('photo',this.selectedFileUpdate,this.productDetails.selectedFileUpdate.name)
         
         
        //  const data = {
        //   'price': this.productDetails.price,
        //   'type':this.productDetails.type,
        //   'code':this.productDetails.code,
        //   'title':this.productDetails.title,
        //   'description':this.productDetails.description,
        //   'photo':this.productDetails.selectedFile.name

        // }

        const productResponse = await this.$axios.$put(
          'http://localhost:3000/api/products/'+id,
          data
          )
        
        this.selectedFileUpdate = null;
        this.fileNameUpdate = ""

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