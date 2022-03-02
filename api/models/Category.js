const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title : {type : String}
},{timestamps : true});

module.exports = mongoose.model("Category", CategorySchema);