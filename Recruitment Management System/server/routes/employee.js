const router = require('express').Router()
const Employee = require('../models/employee')
const User = require('../models/user')
const mailer = require('nodemailer')
const mailerTransport = require('nodemailer-sendgrid-transport')

const transport = mailer.createTransport(mailerTransport({
  auth: {
    api_key: "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"
  }
}))

// Post request - insert a User
router.post('/employees', async (req, res) => {
    try {
        const cv = req.file

        const employee = new Employee()
        // Models            Postman
        employee.sendEmail = "false";
        employee.name = req.body.name;
        employee.email = req.body.email;
        employee.age = req.body.age;
        employee.gender = req.body.gender;
        employee.cv = cv.path.split('static').pop()
        employee.phone = req.body.phone;
        employee.birthday = req.body.birthday;
        employee.comment = req.body.comment;
        employee.status= "pending"
    // console.log("done----")
        await employee.save()

        res.json({
            status: true,
            message: "Successfully saved."
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all employee
router.get('/employees', async (req, res) => {
    try{
        let employees = await Employee.find().sort({$natural: -1})
        res.json({
            status: true,
            employees: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all accepted employee invite for interview
router.get('/empaccept', async (req, res) => {
    try{
        let employees = await Employee.find({$or:[{status: "accept"}, {status: "failed"},  {status: "accepted"}]}).sort({$natural: -1})
        res.json({
            status: true,
            employees: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all main employee
router.get('/mainemployees', async (req, res) => {
    try{
        let employees = await Employee.find({status: "accepted"}).sort({$natural: -1})
        res.json({
            status: true,
            employees: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get a employee by id
router.get('/employees/:id', async (req, res) => {
    try {
        let employees = await Employee.findOne({_id: req.params.id})
        res.json({
            status: true,
            employees: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// put request - update a comment 
router.put('/employees/:id', async (req, res) => {
    try {
        const cv = req.file
        let employees = await Employee.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                comment: req.body.comment
            }},
            {upsert: true}
            )
        res.json({
            status: true,
            updateEmployee: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// send Acceept Email request - for new Employee
router.get('/sendemail/:id', async (req, res) => {
    console.log("----------------------------------",req.params.id)
    try {
        let employees = await Employee.findOne({_id: req.params.id})
        const sendTo = employees.email;
        console.log("Email-----", sendTo)
        let userDoc = await User.findOne()
        const userEmail = userDoc.email

        transport.sendMail({
            to: sendTo,
            from: userEmail,
            subject: 'interview',
            html: '<h1 style="color: red;">Felicitate <br/> You passed the interview</h1><br/><h4>Please come for Interview in our organization after 2 day</h4>'
        })

        res.json({
            status: true,
            emailEmployee: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})


// send Reject Email request - to send an email for new Employee
router.get('/sendRejectEmail/:id', async (req, res) => {
    console.log("----------------------------------",req.params.id)
    try {
        let employees = await Employee.findOne({_id: req.params.id})
        const sendTo = employees.email;
        console.log("Email-----", sendTo)
        let userDoc = await User.findOne()
        const userEmail = userDoc.email

        transport.sendMail({
            to: sendTo,
            from: userEmail,
            subject: 'interview',
            html: '<h1>You faild the interview</h1>'
        })

        res.json({
            status: true,
            emailEmployee: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})


// send Email request for Interview - to send an accept email for new Employee
router.get('/sendAcceptInterviewEmail/:id', async (req, res) => {
    console.log("----------------------------------",req.params.id)
    try {
        let employees = await Employee.findOne({_id: req.params.id})
        const sendTo = employees.email;
        console.log("Email-----", sendTo)
        let userDoc = await User.findOne()
        const userEmail = userDoc.email

        transport.sendMail({
            to: sendTo,
            from: userEmail,
            subject: 'Invite',
            html: '<h1>You passed the interview</h1>'
        })

        res.json({
            status: true,
            emailEmployee: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})


// send Email request for Interview - to send an reject email for new Employee
router.get('/sendRejectInterviewEmail/:id', async (req, res) => {
    console.log("----------------------------------",req.params.id)
    try {
        let employees = await Employee.findOne({_id: req.params.id})
        const sendTo = employees.email;
        console.log("Email-----", sendTo)
        let userDoc = await User.findOne()
        const userEmail = userDoc.email

        transport.sendMail({
            to: sendTo,
            from: userEmail,
            subject: 'Invite',
            html: '<h1>You faild the interview</h1>'
        })

        res.json({
            status: true,
            emailEmployee: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// put request - update an email sent 
router.put('/sent/:id', async (req, res) => {
    try {
        const cv = req.file
        let employees = await Employee.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                sendEmail: req.body.sendEmail,
                status: req.body.status
            }},
            {upsert: true}
            )
        res.json({
            status: true,
            updateEmployee: employees
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router