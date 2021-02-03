const router = require('express').Router()
const Book = require('../models/book')

//Post request - insert a book
router.post('/books', async (req ,res)=>{
    try {
       const image = req.file
       const book = new Book()
       book.category = req.body.categoryID;
       book.author = req.body.authorID;
       book.title = req.body.title;
       book.description = req.body.description;
       book.photo = image.path.split('static/').pop();
       book.price = req.body.price;
       book.stockQuantity = req.body.stockQuantity;

     
     await book.save()
     res.json({
         status: true,
         message: "Successfully saved."
     })
    }catch(err){
     res.status('500').json({
         success: false,
         message:err.message
        })
    }
})
// get request - get all books
router.get('/books', async(req,res)=>{
    try{
           let books = await Book.find().sort({$natural: -1}).populate(['author', 'category'])
           res.json({
               status: true,
               books: books
           })
    }catch(err){
        req.status('500').json({
            success: false,
            message: err.message
        })
    }
})
//get request - get a book by id
router.get('/books/:id', async(req,res)=>{
    try{
           let books = await Book.findOne({_id: req.params.id}).populate(['author', 'category'])
           res.json({
               status: true,
               books: books
           })
    }catch(err){
        req.status('500').json({
            success: false,
            message: err.message
        })
    }
})
//put request - update a book
router.put('/books/:id', async(req,res)=>{
    try{
           const image = req.file
           let books = await Book.findOneAndUpdate(
               {_id: req.params.id},
               {$set:{
                  category: req.body.categoryID,
                  author: req.body.authorID,
                  title: req.body.title,
                  description: req.body.description,
                  photo: image.path.split('static/').pop(),
                  price: req.body.price,
                  stockQuantity: req.body.stockQuantity
           }},
           {upsert: true}
           )

         res.json({
               status: true,
               updatedbook: books
           })
    }catch(err){
        req.status('500').json({
            success: false,
            message: err.message
        })
    }
})

//delete request - to delete a book
router.delete('/books/:id', async(req,res)=>{
    try{
           let books = await Book.findOneAndDelete({_id: req.params.id})
           res.json({
               status: true,
               deletedbook: books
           })
    }catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})


module.exports = router