const mongoose = require("mongoose")
const helmetsSchema = mongoose.Schema({
helmet_style: {
    type: String,
    minlength:3,
    maxlength:15,
},
size: String,
price: 
{
    type:Number,
    min:2,
    max:8
},
})
module.exports = mongoose.model("helmets",
helmetsSchema)