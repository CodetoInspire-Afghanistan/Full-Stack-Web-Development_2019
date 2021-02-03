<template>
    <div>
        <!-- modal page -->
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-4">Add A New Product!</h1>
                
            </div>
        </div>
    </div>
    <!-- form -->
    <div class="row px-md-5">
        <div class="col px-5">
            <form class="px-md-5">


                 <!-- category dropdown -->
                <div class="form-group row">
                    <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                    <div class="col-sm-9">
                    <select  v-model="category" class="form-control form-control-sm" id="category" >
                        <option v-for="category in categories" :key="category._id" :value="category._id">{{category.type}}</option>
                    </select>
                    </div>
                </div>
               
                <!-- modal input -->
                <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Modal</label>
                    <div class="col-sm-9">
                    <input v-model="modal" type="text" class="form-control form-control-sm" id="modal" >
                    </div>
                </div>
               
                
                <!-- price input -->
                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
                    <div class="col-sm-9">
                    <input v-model="price" type="number" class="form-control form-control-sm" id="price" >
                    </div>
                </div>

                   <!-- stock Quantity input -->
                <div class="form-group row">
                    <label for="stockQuantity" class="col-sm-3 col-form-label col-form-label-sm">Stock Quantity</label>
                    <div class="col-sm-9">
                    <input v-model="stockQuantity" type="number" class="form-control form-control-sm" id="stockQuantity" >
                    </div>
                </div>

                 <!-- description -->
                <div class="form-group row">
                    <label for="description" class="col-sm-3 col-form-label col-form-label-sm">Description</label>
                    <div class="col-sm-9">
                    <textarea v-model="description" class="form-control form-control-sm" id="description" ></textarea>
                    </div>
                </div>
               
                  <!-- input file -->
                  <div> 
                      <label for="description" class="col-sm-3 col-form-label col-form-label-sm"><b>Add A Photo</b></label>
                 </div>
                <div class="form-group row">
                    <div class="col-sm-9">
                        <label class="custom-choosefile-button">
                              <i class="fa fa-plus" style="color:#ddd; font-size:3rem"></i>
                              <input @change="onSelectedFile" type="file" >
                        </label>
                      <p>{{fileName}}</p>
                  
                    </div>
                </div>
    <hr>
                <button @click="onAddProduct" type="button" class="btn custom-btn-color px-3">save</button>
            </form>
        </div>
    </div>
<!-- table -->
    <div class="row ">
        <div class="col  px-5 pt-5">

                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col" class="d-none d-sm-table-cell">Name</th>
                    <th scope="col" class="d-none d-sm-table-cell">Price</th>
                     <th scope="col">Option</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product,index) in products" :key="product._id">
                    <th scope="row">{{index+1}}</th>
                    <td>{{product.modal}}</td>
                    <td class="d-none d-sm-table-cell">${{product.price}}</td>
                    <td>
                            <a @click="onviewProduct(product._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                            <a @click="onviewProduct(product._id)" class="custom-btn openEditModal " data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                            <a @click="onDeleteProduct(product._id,index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
                    </td>
                    </tr>
                   
                </tbody>
                </table>
        </div>
    </div>


<!-- View Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModelable" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content" v-if="productDetails">
          <div class="modal-header">
            <h5 class="modal-title" id="viewModelable">{{productDetails.modal}}</h5>
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
                    <img :src="productDetails.photo" alt=" product image" width="100%">
                  </div>
                </div>
                <div class="col-9">
                  <!-- Category dropdown -->
                  <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Category</label>
                    <div class="col-sm-8">
                        <label class=" col-form-label">{{productDetails.category.type}}</label>
                    </div>
                  </div>

                 

                  <!-- Price input -->
                  <div class="form-group row">
                    <label for="price" class="col-sm-4 col-form-label ">Price</label>
                    <div class="col-sm-8">
                      <label class=" col-form-label">${{productDetails.price}}</label>
                    </div>
                  </div>

                  <!-- Stock Quantity input -->
                  <div class="form-group row">
                    <label for=" stockQuantity" class="col-sm-4 col-form-label "> Stock Quantity</label>
                    <div class="col-sm-8">
                      <label class=" col-form-label">{{productDetails.stockQuantity}}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <!-- Description textarea -->
                    <div class="form-group row">
                      <label for=" description" class="col-sm-2"><b>Description</b></label>
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


<!-- edit Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog   modal-xl">
    <div class="modal-content" v-if="productDetails">
      <div class="modal-header">
        <h5 class="modal-modal" id="editModalLabel">{{productDetails.modal}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form class="px-md-5">

             <div class="row">
                 <div class="col-3">
                  <!-- input file -->
                  <div> 
                      <label >Add A Photo</label>
                 </div>
                <div class="form-group row">
                    <div class="col-sm-9">
                       <label class="custom-choosefile-button">
                              <i class="fa fa-plus" style="color:#ddd; font-size:3rem"></i>
                              <input  @change="onselectedFileUpdate" type="file" >
                        </label>
                      <p>{{fileNameUpdate}}</p>
                  
                    </div>
                </div></div>
                 <div class="col-9">  <!-- category dropdown -->
                <div class="form-group row">
                    <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                    <div class="col-sm-9">
                    <select v-model="productDetails.category._id" class="form-control form-control-sm" id="category" >
                        <option

                        v-for="category in categories"
                        :key="category._id"
                        :selected="category._id==productDetails.category._id"
                         :value="category._id">{{category.type}}</option>
                    </select>
                    </div>
                </div>

                <!-- modal input -->
                <div class="form-group row">
                    <label for="modal" class="col-sm-3 col-form-label col-form-label-sm">Modal</label>
                    <div class="col-sm-9">
                    <input v-model="productDetails.modal" type="text" class="form-control form-control-sm" id="modal" >
                    </div>
                </div>
               
                
                <!-- price input -->
                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
                    <div class="col-sm-9">
                    <input v-model="productDetails.price" type="number" class="form-control form-control-sm" id="price" >
                    </div>
                </div>

                   <!-- stock Quantity input -->
                <div class="form-group row">
                    <label for="stockQuantity" class="col-sm-3 col-form-label col-form-label-sm">Stock Quantity</label>
                    <div class="col-sm-9">
                    <input v-model="productDetails.stockQuantity" type="number" class="form-control form-control-sm" id="stockQuantity" >
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                         <!-- description -->
                <div class="form-group row">
                    <label for="description" class="col-sm-2 col-form-label col-form-label-sm">Description</label>
                    <div class="col-sm-9">
                    <textarea v-model="productDetails.description" class="form-control form-control-sm" id="description" ></textarea>
                    </div>
                </div></div>
             </div>
                    </div>
                </div>
               
               
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="productUpdate(productDetails._id)"  type="button" class="btn btn-primary">Save </button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        category:null,
        modal:"",
        description:"",
        price:0,
        stockQuantity:0,
        fileName:"",
        selectedFile:null,
        fileNameUpdate:"",
         selectedFileUpdate:null,
          fileNameUpdate:""

      }
    },
   async asyncData({$axios}){
     try{
        const categoryResponse=await $axios.$get('http://localhost:3000/api/categories')

        const productResponse=await $axios.$get('http://localhost:3000/api/products')

        return{
          categories:categoryResponse.categories,
          products:productResponse.products,
          productDetails:null
        }

     }catch(err){
       console.log(err)
     }

    },
    methods:{
      onSelectedFile(event){
        this.selectedFile=event.target.files[0]
        this.fileName=event.target.files[0].name
       // console.log(this.selectedFile)


      },
       onselectedFileUpdate(event){
        this.selectedFileUpdate=event.target.files[0]
        this.fileNameUpdate=event.target.files[0].name
        


      },
     async onAddProduct(){
       try{
         const data=new FormData()
         data.append('categoryID',this.category)
         data.append('price',this.price)
         data.append('title',this.modal)
         data.append('stockQuantity',this.stockQuantity)
          data.append('description',this.description)
        data.append('photo',this.selectedFile,this.selectedFile.name)

      await this.$axios.$post(
        'http://localhost:3000/api/products',
        data
      )
      this.modal=""
      this.description=""
      this.category=null
      this.price=0
      this.stockQuantity=0
      this.fileName=""
      this.selectedFile=null
     

      const updateProduct=await this. $axios.$get('http://localhost:3000/api/products')
      this.products=updateProduct.products
       }catch(err){
         console.log(err)
       }
     },
  async onDeleteProduct(id,index){
    try{
      const result=await this.$axios.$delete('http://localhost:3000/api/products/'+id)
        if(result.status){
          this.products.splice(index,1)
        }
    }catch(err){
      console.log(err)
    }
         },
         async onviewProduct(id){
           try{
              const productResponse=await this.$axios.$get('http://localhost:3000/api/products/'+id)
              this.productDetails=productResponse.product

           }catch(err){
             console.log(err)
           }
         },
        async productUpdate(id){

          try{

            const data=new FormData()
                    data.append('categoryID',this.productDetails.category._id)
                    data.append('price',this.productDetails.price)
                    data.append('modal',this.productDetails.modal)
                    data.append('stockQuantity',this.productDetails.stockQuantity)
                      data.append('description',this.productDetails.description)
                    // data.append('photo',this.productDetails.selectedFile,this.selectedFile.name)


            const productResponse=await this.$axios.$put(
              'http://localhost:3000/api/products/'+id,
              data

            )
            this.selectedFileUpdate=null;
            this.fileNameUpdate=""
            $('#editModal').modal('hide')

              const updateProduct=await this. $axios.$get('http://localhost:3000/api/products')
            this.products=updateProduct.products
          }catch(err){
            console.log(err)
          }
        }
         
       

    }
}
</script>
<style>

</style>