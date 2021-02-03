<template>
    <div class="container-fluid">
        <!-- Title Page -->
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-4">Report Page</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- Card Number One -->
            <div class="col-sm-4 py-1">
                <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/fruit4.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Fruit Name</h4>

                          <span class="score">
                            <div class="score-wrap">
                                <span class="stars-active" style="width:100%; color:orange;">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                            </div>
                         </span>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#updateModal">Update</button>
                        <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    </div>
                </div>
            </div>
            <!-- Card Number two -->
            <div class="col-sm-4 py-1">
                <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/fruit2.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title"> Fruit Name </h4>

                          <span class="score">
                            <div class="score-wrap">
                                <span class="stars-active" style="width:100%; color:orange;">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                            </div>
                         </span>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#updateModal">Update</button>
                        <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    </div>
                </div>
            </div>
            <!-- Card number three -->
            <div class="col-sm-4 py-1">
                <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/fruit3.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title"> Fruit Name </h4>

                         <span class="score">
                            <div class="score-wrap">
                                <span class="stars-active" style="width:100%; color:orange;">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                            </div>
                         </span>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#updateModal">Update</button>
                        <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    </div>
                </div>
            </div>

            <!--Delete Modal -->
            <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure
                        <br>
                        Do you want to <span style="color:red">delete</span> this?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" class="btn btn-danger">Yes</button>
                    </div>
                    </div>
                </div>
            </div>

            <!-- Update Modal -->
            <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="updateModalLabel">Edit Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="px-md-5">
                                <div class="row">
                                    <div class="col-3">
                                        <!-- Uploade Photo -->
                                        <div> 
                                            <label>Add a photo</label>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-9">
                                                <label class="custom-choosefile-button">
                                                    <i class="fa fa-plus" style="color: #ddd; font-size:3rem;"></i>
                                                    <input type="file">
                                                </label>
                                                <p>File Name</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-9">
                                        <!-- Category dropdown -->
                                        <div class="form-group row">
                                            <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                                            <div class="col-sm-9">
                                                <select class="form-control form-control-sm" id="category">
                                                    <option value="bookid">Book</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <!-- Owner dropdown -->
                                        <div class="form-group row">
                                            <label for="owner" class="col-sm-3 col-form-label col-form-label-sm">Owner</label>
                                            <div class="col-sm-9">
                                                <select class="form-control form-control-sm" id="owner">
                                                    <option value="id"> Maryam Khavari </option>
                                                </select>
                                            </div>
                                        </div>

                                        <!-- Title input -->
                                        <div class="form-group row">
                                            <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Title</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control form-control-sm" id="title">
                                            </div>
                                        </div>

                                        <!-- Price input -->
                                        <div class="form-group row">
                                            <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
                                            <div class="col-sm-9">
                                                <input type="number" class="form-control form-control-sm" id="price">
                                            </div>
                                        </div>

                                        <!-- Stock Quantity input -->
                                        <div class="form-group row">
                                            <label for="stockQuantity" class="col-sm-3 col-form-label col-form-label-sm">Stock Quantity</label>
                                            <div class="col-sm-9">
                                                <input type="number" class="form-control form-control-sm" id="stockQuantity">
                                            </div>
                                        </div>

                                        <!-- Description textarea -->
                                        <div class="form-group row">
                                            <label for="description" class="col-sm-3 col-form-label col-form-label-sm">Description</label>
                                            <div class="col-sm-9">
                                                <textarea class="form-control form-control-sm" id="description"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn custom-btn-color px-3">Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>