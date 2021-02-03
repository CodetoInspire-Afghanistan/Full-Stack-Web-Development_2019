<template>
    <div>
        <!-- Page Title start -->
        <div class="pageTitle">
        <div class="container">
            <div class="row">
            <div class="col-md-6 col-sm-6">
                <h1 class="page-heading">Post Product</h1>
            </div>
            <div class="col-md-6 col-sm-6">
                <div class="breadCrumb"><a href="../">Home</a> / <span>Post Product</span></div>
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
                            <div class="col-md-6">
                                <div class="formrow">
                                <input v-model="title" type="text" name="jobtitle" class="form-control" placeholder="Ad Title">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="formrow">
                                    <select v-model="vendor" class="form-control" name="indus">
                                        <option v-for="vendor in vendors" :key="vendor._id" :value="vendor._id">{{ vendor.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="formrow">
                                    <select v-model="category" class="form-control" name="indus">
                                        <option v-for="category in categories" :key="category._id" :value="category._id">{{category.type}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="formrow">
                                    <input v-model="price" type="text" name="jobtitle" class="form-control" placeholder="Ad Price">
                                </div>
                            </div>
                             <div class="col-md-4">
                                <div class="formrow">
                                    <input v-model="stockQuantity" type="number" name="jobtitle" class="form-control" placeholder="Stock Quantity">
                                </div>
                            </div>
                            <!-- <div class="col-md-6">
                                <div class="formrow">
                                <select class="form-control" name="msalary">
                                    <option>Select Main Catgory</option>
                                    <option>Vehicles</option>
                                    <option>Mobiles</option>
                                    <option>Furniture</option>
                                    <option>Jobs</option>
                                    <option>Real Estates</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="formrow">
                                <select class="form-control" name="msalary">
                                    <option>Select Sub Catgory</option>
                                    <option>Vehicles</option>
                                    <option>Mobiles</option>
                                    <option>Furniture</option>
                                    <option>Jobs</option>
                                    <option>Real Estates</option>
                                </select>
                                </div>
                            </div> -->
                            <div class="col-md-12">
                                <div class="formrow">
                                <div class="uploadphotobx"> <i class="fa fa-upload" aria-hidden="true"></i>
                                    <h4>Upload your photo</h4>
                                    <p>It must be a head-shot photo</p>
                                    <label class="uploadBox">Click here to Upload
                                    <input @change="onSelectedFile" type="file" name="upload">
                                    </label>
                                </div>
                                <div class="fileattached"> <img src="/images/ads/02.jpg" alt=""> <span>{{fileName}}</span> <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    <div class="clearfix"></div>
                                </div>
                                </div>
                            </div>                   
                            <div class="col-md-12">
                                <div class="formrow">
                                <textarea v-model="description" class="form-control" name="jobdetail" placeholder="Ad description"></textarea>
                                </div>
                            </div>
                        </div>
                        <br>
                        <input @click="onAddProduct" type="submit" class="btn" value="Add Product">
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
    data(){
        return{
            vendor: null,
            category: null,
            title: "",
            price: 0,
            stockQuantity: 0,
            description:"",
            selectedFile: null,
            fileName: ""


        }
    },
    async asyncData({$axios}){
        try{
            const categoryResponse = await $axios.$get('http://localhost:3000/api/categories')
            const vendorResponse = await $axios.$get('http://localhost:3000/api/vendors')


            return{
                categories : categoryResponse.categories,
                vendors: vendorResponse.vendor
            }
       
        }catch(err){
            console.log(err)
        }
    },

    methods:{
        onSelectedFile(event){
            this.selectedFile = event.target.files[0]
            this.fileName = event.target.files[0].name
            console.log(this.selectedFile )

        },
        async onAddProduct(){
            try{
                 const data = new FormData()

                 data.append('categoryId', this.category)
                 data.append('vendorId', this.vendor)
                 data.append('title', this.title)
                 data.append('description', this.description)
                 data.append('price', this.price)
                 data.append('stockQuantity', this.stockQuantity)
                //  data.append('image', this.selectedFile, this.selectedFile.name)

                await this.$axios.$post(
                    'http://localhost:3000/api/products',
                    data
                )

                this.title =""
                this.description = ""
                this.price = ""
                this.category = ""
                this.vendor = ""

                const updateProduct = await this.$axios.$get('http://localhost:3000/api/products')
                 this.products = updateProduct.products

            }catch(err){
                console.log(err)
            }
        }
    }

}
</script>

<style>

</style>