const router = require('express').Router()
const Company = require('../models/company')

// post
router.post('/company', async (req, res) =>{
     try{
        const company = new Company()
        company.name = req.body.name;
        company.email = req.body.email;
        company.job = req.body.job;
        company.password = req.body.password;
       
         await company.save()
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
router.get('/company', async (req, res) =>{
    try{
        let companies = await Company.find()
        res.json({
            status: true,
            companies: companies
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
// get one
router.get('/company/:id', async (req, res) =>{
    try{
        let companies = await Company.findOne({_id: req.params.id})
        res.json({
            status: true,
            companies: companies
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
    })
// put
router.put('/company/:id', async (req, res) =>{
    try{
        let companies = await Company.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                job: req.body.job,
                }},
            {upsert: true}
            )
        res.json({
            status: true,
            updatedCompany: companies
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
// delete
router.delete('/company/:id', async (req, res) =>{
    try{
        let companies = await Company.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedCompanies: companies
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
module.exports = router