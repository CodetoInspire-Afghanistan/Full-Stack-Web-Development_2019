
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const FoodRegSchema = new Schema({
   category: {type: Schema.Types.ObjectId, ref: "category"},
    name: String,
    price:Number
   
   // address: {type: Schema.type.objecId, ref: "Address"}
})



module.exports = mongoose.model('FoodReg',FoodRegSchema)



// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const RegFoodSchema = new Schema({
//    catagory:String,
//    name:String,
//    price:Number 
// })


// module.exports = mongoose.model('RegFood',RegFoodSchema)