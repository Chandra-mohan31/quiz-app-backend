const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    ques: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    correct_answer: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    incorrect_answers:{
        type:Array,
        trim:true,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Quiz",quizSchema);