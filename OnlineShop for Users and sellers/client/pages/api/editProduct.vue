<template>
  <div>
        <!-- Page Title start -->
        <div class="pageTitle">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-sm-6">
                    <h1 class="page-heading">Edit Product</h1>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="breadCrumb"><a href="../">Home</a> / <span>Edit Product</span></div>
                </div>
                </div>
            </div>
        </div>
        <!-- Page Title End -->

        <div class="listpgWraper">
            <div class="container">
                <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="userccount">
                    <div class="formpanel"> 
                        <form action="pending-ads" method="post">
                            <!-- Ad Information -->
                            <h5>Ad Information</h5>
                            <div class="row">
                                <!-- title -->
                                <div class="col-md-6">
                                    <div class="formrow">
                                    <input type="text" name="jobtitle" class="form-control" v-model="Editproduct.title">
                                    </div>
                                </div>

                                <!-- vendor -->
                                <div class="col-md-6">
                                    <div class="formrow">
                                        <select v-model="Editproduct.vendor._id" class="form-control" name="indus">
                                            <option v-for="vendor in vendors" :key="vendor._id" :selected="vendor._id == Editproduct.vendor" :value="vendor._id">{{vendor.name}}</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- category -->
                                <div class="col-md-4">
                                    <div class="formrow">
                                        <select v-model="Editproduct.category._id" class="form-control" id="category">
                                            <option 
                                            v-for="category in categories"
                                            :key="category._id"
                                            :selected="category._id == Editproduct.category._id"
                                            :value="category._id">{{category.type}}</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- price -->
                                <div class="col-md-4">
                                    <div class="formrow">
                                        <input type="text" name="jobtitle" class="form-control" v-model="Editproduct.price">
                                    </div>
                                </div>

                                <!-- Stock Quantity -->
                                <div class="col-md-4">
                                    <div class="formrow">
                                        <input type="number" name="jobtitle" class="form-control" v-model="Editproduct.stockQuantity">
                                    </div>
                                </div>
                            
                            <!-- file upload -->
                                <div class="col-md-12">
                                    <div class="formrow">
                                    <div class="uploadphotobx"> <i class="fa fa-upload" aria-hidden="true"></i>
                                        <h4>Upload your photo</h4>
                                        <p>It must be a head-shot photo</p>
                                        <label class="uploadBox">Click here to Upload
                                        <input @change="onSelectedFileUpdate" type="file" name="upload">
                                        </label>
                                    </div>
                                    <div class="fileattached"> <img src="/images/ads/02.jpg" alt=""> <span>{{fileNameUpdate}}</span> <i class="fa fa-check-circle" aria-hidden="true"></i>
                                        <div class="clearfix"></div>
                                    </div>
                                    </div>
                                </div>                   
                                <div class="col-md-12">
                                    <div class="formrow">
                                    <textarea  class="form-control" name="jobdetail" v-model="Editproduct.description"></textarea>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <input @click="productUpdate(Editproduct._id)" type="submit" class="btn" value="Save Edit">
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData($axios, params) {
      try{
            const productResponse = await $axios.$get('/api/products/'+ params.id)
        return{
            Editproduct: productResponse.product
        }
      }catch(err){
          console.log(err)
      }
    
    },
    methods:{
        onSelectedFile(event) {
            this.selectedFile = event.target.files[0]
            this.fileName = event.target.files[0].name
        },
        onSelectedFileUpdate(event) {
            this.selectedFileUpdate = event.target.files[0]
            this.fileNameUpdate = event.target.files[0].name
        },
        async productUpdate(id) {
            try {
                const data = new FormData()
                data.append('categoryId', this.Editproduct.category._id)
                data.append('vendorId', this.Editproduct.vendor._id)
                data.append('price', this.Editproduct.price)
                data.append('stockQuantity', this.Editproduct.stockQuantity)
                data.append('description', this.Editproduct.description)
                data.append('title', this.Editproduct.title)
                data.append('photo', this.selectedFileUpdate, this.selectedFileUpdate.name)

                const productResponse = await this.$axios.$put(
                'http://localhost:3000/api/products/'+id,
                data
                )
                
                this.selectedFileUpdate = null;
                this.fileNameUpdate = ""


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