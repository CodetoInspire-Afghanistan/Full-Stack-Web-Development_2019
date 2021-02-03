const router = require('express').Router()
const Patient = require('../models/Patient')


// post request - insert a Patient
router.post('/Patient', async(req, res)=>{
    try{
        const patient = new Patient()
        patient.Name = req.body.Name;
        patient.LastName = req.body.LastName;
        patient.Phone = req.body.Phone;
        patient.Occupation = req.body.Occupation;
        patient.Problems = req.body.Problems;
        patient.DoctorId = req.body.DoctorId;
        patient.Date = req.body.Date;
        patient.Gender = req.body.Gender;

        await patient.save()

        res.json({
            status: true,
            message: "successfully saved"
        })

    }catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }

})
// get request - get all Patients
router.get('/Patient', async(req, res)=>{
    try {
        let patient = await Patient.find()
        res.json({
            status: true,
            patient: patient
        })

    }catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }

})
// get request - get a patient by id

// put request - update a patient
router.put('/patient/:id', async (req, res)=>{
    try{
        let patient = await Patient.findOneAndUpdate(
            {_id: req.params.id},
            {$set:{
                Name: req.body.Name,
                LastName: req.body.LastName,
                Phone: req.body.Phone,
                Occupation: req.body.Occupation,
                Problems: req.body.Problems,
                DoctorId: req.body.DoctorId,
                Date: req.body.Date,
                Gender: req.body.Gender


            }},
            {upsert: true}
            )

        res.json({
            status: true,
            updatedPatient: patient
        })

    }catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
// delete request - to delete a patient
router.delete ('/patient/:id', async (req, res)=>{
    try{
        let patient = await Patient.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedPatient: patient
        })

    }catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})

module.exports = router


