const router = require('express').Router()
const Amanat = require('../models/amanatBook')


// Post request - insert an Amanat
router.post('/amanat', async(req, res)=>{
    try {
        const image = req.file
        const amanat = new Amanat()
        amanat.category = req.body.category;
        amanat.userId = req.body.userId;
        amanat.bookId = req.body.bookId;
        amanat.photo = image.path.split('static').pop();
        amanat.time = req.body.time;

        await amanat.save()

        res.json({
            status: true,
            message: "Amanat syccessfully saved"
        })

    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }

})

// get request - get all Amanats
router.get('/amanat', async (req, res)=>{
    try {
        let amanats = await Amanat.find().sort({$natural: -1}).populate(['category', 'userId', 'bookId'])
        res.json({
            status: true,
            amanats: amanats
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})

// get request - get an amant by id
router.get('/amanat/:id', async (req, res)=>{
    try {
        let amanats = await Amanat.findOne({_id: req.params.id}).populate(['category', 'userId', 'bookId'])
        res.json({
            status: true,
            amanats: amanats
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})

//put request - update a Amanat
router.put('/amanat/:id', async (req, res)=>{
    const image = req.file
    try {
        let amanats = await Amanat.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                category: req.body.category,
                userId: req.body.userId,
                bookId: req.body.bookId,
                photo: image.path.split('static/').pop(),
                time: req.body.time
            }},
            {upsert: true}
            )

        res.json({
            status: true,
            updatedAmanats: amanats
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})


// delete request = delete a Amanat
router.delete('/amanat/:id', async (req, res)=>{
    try {
        let amanats = await Amanat.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedAmanat: amanats
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })

        
    }
})



module.exports = router