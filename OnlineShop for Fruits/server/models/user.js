const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcyrpt = require('bcrypt-nodejs') //before document insertting at the first password change in bycrpt & after that saved

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    address: { type: Schema.Types.ObjectId, ref: "Address" }
})

userSchema.pre('save', function(next) {
    let user = this;
    if(this.isModified('password') || this.isNew) {
        bcyrpt.genSalt(10, function(err, salt) { //genSalt method by (bcyrpt) make 10 char random
            if(err) {
                return next(err)
            }

            bcyrpt.hash(user.password, salt, null, function(err, hash){
                if(err) {
                    return next(err)
                }

                user.password= hash;
                next()
            })
        })
    }
})
 
// in User Modal make a method to check password
userSchema.methods.comparePassword = function(password, next) {
    let user = this
    return bcyrpt.compareSync(password, user.password)
}


module.exports= mongoose.model('User', userSchema)