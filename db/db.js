const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devendersingh2k:YCG1OQhQ4cLriMQM@cluster0.bgkot8j.mongodb.net/Todo-App');

const todos = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model("Todo",todos);

module.exports = {
    Todo
}