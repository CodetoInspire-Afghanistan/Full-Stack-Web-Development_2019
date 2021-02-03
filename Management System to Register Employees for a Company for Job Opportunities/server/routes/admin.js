const router = require('express').Router()
const Admin = require('../models/admin')

// post
router.post('/admin', async (req, res) =>{
     try{
        const admin = new Admin()
        admin.name = req.body.name;
        admin.email = req.body.email;
        admin.password = req.body.password;
       
         await admin.save()
        res.json({
            status: true,
            message: "Successfully saved"
        })

     } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })
     }
})
// get
// router.get('/admin', async (req, res) =>{
//     try{
//         let admin = await Admin.find()
//         res.json({
//             status: true,
//             admin: admin
//         })
//     } catch(err){
//         res.status('500').json({
//             success: false,
//             message: err.message
//         })

//     }
// })
// get one
// router.get('/admin/:id', async (req, res) =>{
//     try{
//         let admin = await Admin.findOne({_id: req.params.id})
//         res.json({
//             status: true,
//             admin: admin
//         })
//     } catch(err){
//         res.status('500').json({
//             success: false,
//             message: err.message
//         })
//     }
//     })
// put
// router.put('/admin/:id', async (req, res) =>{
//     try{
//         let admin = await Admin.findOneAndUpdate(
//             {_id: req.params.id},
//             {$set: {
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password,
//                 }},
//             {upsert: true}
//             )
//         res.json({
//             status: true,
//             updatedAdmin: admin
//         })
//     } catch(err){
//         res.status('500').json({
//             success: false,
//             message: err.message
//         })

//     }
// })
// delete
// router.delete('/admin/:id', async (req, res) =>{
//     try{
//         let admin = await Admin.findOneAndDelete({_id: req.params.id})
//         res.json({
//             status: true,
//             deletedAdmin: admin
//         })
//     } catch(err){
//         res.status('500').json({
//             success: false,
//             message: err.message
//         })

//     }
// })
module.exports = router