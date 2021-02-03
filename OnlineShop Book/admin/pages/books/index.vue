<template>
  <div>
    <!-- Title page -->
    <div class="row">
      <div class="col">
        <div class="jumbotron">
        <h1 class="display-4">Add New Book</h1>
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

          <!-- Author dropdown -->
          <div class="form-group row">
            <label for="author" class="col-sm-3 col-form-label col-form-label-sm">Author</label>
            <div class="col-sm-9">
              <select v-model="author" class="form-control form-control-sm" id="author">
                <option 
                 :value="author._id"
                 v-for="author in authors"
                 :key="author._id"
                >{{ author.name }}</option>
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

          <button @click="onAddBook" type="button" class="btn custom-btn-color px-3">Save</button>
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
              <th scope="col" class="d-none d-sm-table-cell">Author</th>
              <th scope="col" class="d-none d-sm-table-cell">Price</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books" :key="book._id">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ book.title }}</td>
              <td class="d-none d-sm-table-cell">{{ book.author.name }}</td>
              <td class="d-none d-sm-table-cell">${{book.price}}</td>
              <td>
                <a @click="onviewBook(book._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                <a @click="onviewBook(book._id)" class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                <a @click="onDeleteBook(book._id, index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- View Modal -->
    <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content" v-if="bookDetails">
          <div class="modal-header">
            <h5 class="modal-title" id="viewModalLabel">{{ bookDetails.title }}</h5>
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
                    <img :src="'/'+bookDetails.photo" alt="book img" width="100%">
                  </div>
                </div>
                <div class="col-9">
                  <!-- Category dropdown -->
                  <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Category</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{ bookDetails.category.type }}</label>
                    </div>
                  </div>

                  <!-- Author dropdown -->
                  <div class="form-group row">
                    <label for="Author" class="col-sm-4 col-form-label">Author</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{ bookDetails.author.name }}</label>
                    </div>
                  </div>

                  <!-- Price input -->
                  <div class="form-group row">
                    <label for="price" class="col-sm-4 col-form-label">Price</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">${{ bookDetails.price }}</label>
                    </div>
                  </div>

                  <!-- Stock Quantity input -->
                  <div class="form-group row">
                    <label for="stockQuantity" class="col-sm-4 col-form-label">Stock Quantity</label>
                    <div class="col-sm-8">
                      <label class="col-form-label">{{ bookDetails.stockQuantity }}</label>
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
                      <label>{{ bookDetails.description }}</label>
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
        <div class="modal-content" v-if="bookDetails">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">{{ bookDetails.title }}</h5>
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
                  <!-- Category dropdown -->
                  <div class="form-group row">
                    <label for="category" class="col-sm-3 col-form-label col-form-label-sm">Category</label>
                    <div class="col-sm-9">
                      <select v-model="bookDetails.category._id" class="form-control form-control-sm" id="category">
                        <option 
                        v-for="category in categories"
                        :key="category._id"
                        :selected="category._id == bookDetails.category._id"
                        :value="category._id">{{category.type}}</option>
                      </select>
                    </div>
                  </div>

                  <!-- author dropdown -->
                  <div class="form-group row">
                    <label for="author" class="col-sm-3 col-form-label col-form-label-sm">author</label>
                    <div class="col-sm-9">
                      <select v-model="bookDetails.author._id" class="form-control form-control-sm" id="author">
                        <option 
                        v-for="author in author"
                        :key="author._id"
                        :selected="author._id == bookDetails.author._id"
                        :value="author._id">{{author.name}}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Title input -->
                  <div class="form-group row">
                    <label for="title" class="col-sm-3 col-form-label col-form-label-sm">Title</label>
                    <div class="col-sm-9">
                      <input v-model="bookDetails.title" type="text" class="form-control form-control-sm" id="title">
                    </div>
                  </div>

                  <!-- Price input -->
                  <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label col-form-label-sm">Price</label>
                    <div class="col-sm-9">
                      <input v-model="bookDetails.price" type="number" class="form-control form-control-sm" id="price">
                    </div>
                  </div>

                  <!-- Stock Quantity input -->
                  <div class="form-group row">
                    <label for="stockQuantity" class="col-sm-3 col-form-label col-form-label-sm">Stock Quantity</label>
                    <div class="col-sm-9">
                      <input v-model="bookDetails.stockQuantity" type="number" class="form-control form-control-sm" id="stockQuantity">
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
                      <textarea v-model="bookDetails.description" class="form-control form-control-sm" id="description"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="bookUpdate(bookDetails._id)" type="button" class="btn custom-btn-color px-3">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      category: null,
      author: null,
      title: "",
      description: "",
      price:0,
      stockQuantity: 0,
      fileName: "",
      selectedFile: null,
      selectedFileUpdate: null,
      fileNameUpdate: ""

    }
  },
  async asyncData({$axios}) {
    try {
      const categoryResponse = await $axios.$get('http://localhost:3000/api/categories')
      const authorResponse = await $axios.$get('http://localhost:3000/api/authors')
      const bookResponse = await $axios.$get('http://localhost:3000/api/books')

      return {
        categories: categoryResponse.categories,
        author: authorResponse.author,
        books: bookResponse.books,
        bookDetails: null
      }
    } catch(err) {
      console.log(err)
    }
  },
  methods: {
    onSelectedFile(event) {
      this.selectedFile = event.target.files[0]
      this.fileName = event.target.files[0].name
    },
    onSelectedFileUpdate(event) {
      this.selectedFileUpdate = event.target.files[0]
      this.fileNameUpdate = event.target.files[0].name
    },
    async onAddBook() {
      try {
        const data = new FormData()
        data.append('categoryID', this.category)
        data.append('authorID ', this.author)
        data.append('price', this.price)
        data.append('stockQuantity', this.stockQuantity)
        data.append('description', this.description)
        data.append('title', this.title)
        data.append('photo', this.selectedFile, this.selectedFile.name)

        await this.$axios.$post(
          'http://localhost:3000/api/books',
          data
        )

        this.title = ""
        this.description = ""
        this.category = null
        this.author = null
        this.price = 0
        this.stockQuantity = 0
        this.fileName = ""
        this.selectedFile = null

        const updateBook = await this.$axios.$get('http://localhost:3000/api/books')
        this.books = updateBook.books

      } catch(err) {
        console.log(err)
      }
    },
    async onDeleteBook(id, index) {
      try {
        const result = await this.$axios.$delete('http://localhost:3000/api/books/'+id)
        if(result.status) {
          this.books.splice(index, 1)
        }
      } catch(err) {
        console.log(err)
      }
    },
    async onviewBook(id) {
      try {
        const bookResponse = await this.$axios.$get('http://localhost:3000/api/books/'+id)
        this.bookDetails = bookResponse.book
      } catch(err) {
        console.log(err)
      }
    },
    async bookUpdate(id) {
      try {
        const data = new FormData()
        data.append('categoryID', this.bookDetails.category._id)
        data.append('authorID', this.bookDetails.author._id)
        data.append('price', this.bookDetails.price)
        data.append('stockQuantity', this.bookDetails.stockQuantity)
        data.append('description', this.bookDetails.description)
        data.append('title', this.bookDetails.title)
        data.append('photo', this.selectedFileUpdate, this.selectedFileUpdate.name)

        const bookResponse = await this.$axios.$put(
          'http://localhost:3000/api/books/'+id,
          data
          )
        
        this.selectedFileUpdate = null;
        this.fileNameUpdate = ""

        $('#editModal').modal('hide')

        const updateBook = await this.$axios.$get('http://localhost:3000/api/books')
        this.books = updateBook.books

      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>