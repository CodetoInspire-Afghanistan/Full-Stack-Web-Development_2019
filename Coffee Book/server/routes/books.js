const router = require('express').Router()
const Book = require('../models/books')


// Post request - insert a book
router.post('/books', async(req, res)=>{
    try {
        const image = req.file
        const book = new Book()
        book.category = req.body.categoryID;
        book.title = req.body.title;
        book.price = req.body.price;
        book.photo = image.path.split('static/').pop();
        book.quantity = req.body.quantity;

        await book.save()

        res.json({
            status: true,
            message: "successfully saved"
        })

    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }

})

// get request - get all books
router.get('/books', async (req, res)=>{
    try {
        let books = await Book.find().sort({$natural: -1}).populate("category")
        res.json({
            status: true,
            books: books
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})

// get request - get a book by id
router.get('/books/:id', async (req, res)=>{
    try {
        let books = await Book.findOne({_id: req.params.id}).populate("category")
        res.json({
            status: true,
            books: books
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})

//put request - update a book
router.put('/books/:id', async (req, res)=>{
    const image = req.file
    try {
        let books = await Book.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                category: req.body.categoryID,
                title: req.body.title,
                price: req.body.price,
                photo: image.path.split('static/').pop(),
                quantity: req.body.quantity
            }},
            {upsert: true}
            )

        res.json({
            status: true,
            updatedBook: books
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})


// delete request = delete a book
router.delete('/books/:id', async (req, res)=>{
    try {
        let books = await Book.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedBooks: books
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})


module.exports = router