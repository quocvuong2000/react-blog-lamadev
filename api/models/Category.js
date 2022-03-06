const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title : {type : String},
    catId : {type : String , unique : true, required : true}
},{timestamps : true});

module.exports = mongoose.model("Category", CategorySchema);