const router = require('express').Router()
const Author = require('../models/author')

// post request - insert an author
router.post('/authors', async (req ,res)=>{
    try {
       
       const author = new Author()
       author.name = req.body.name
       author.about = req.body.about
     
     await author.save()

     res.json({
         status: true,
         message: "new author Successfully saved."
     })
    }catch(err){
     res.status('500').json({
         success: false,
         message:err.message
        })
    }
})
//get request - get all authors
router.get('/authors', async(req,res)=>{
    try{
           let authors = await Author.find()
           res.json({
               status: true,
               author: authors
           })
    }catch(err){
        req.status('500').json({
            success: false,
            message: err.message
        })
    }
})


module.exports = router