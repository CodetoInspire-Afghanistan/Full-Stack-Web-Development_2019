const mogoose = require('mongoose')
const Schema = mogoose.Schema
const bcrypt = require('bcrypt-nodejs')

const adminSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true},
    password: { type: String, required:true}
})

adminSchema.pre('save', function(next) {
    let admin = this;
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
           if(err) {
               return next(err)
           }
           bcrypt.hash(admin.password, salt, null, function(err, hash){
               if(err) {
                   return next(err)
               }
               admin.password = hash;
               next()
           })
        })
    }
})

adminSchema.method.comparePassword = function (password, next) {
    let admin = this
    return bcrypt.compareSync(password, admin.password)
}

module.exports = mogoose.model('Admin', adminSchema)