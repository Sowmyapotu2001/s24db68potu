const mongoose = require("mongoose")
const helmetsSchema = mongoose.Schema({
helmet_style: String,
size: String,
price: Number
})
module.exports = mongoose.model("helmets",
helmetsSchema)