const Quiz = require("../models/quiz");
exports.createQuiz = (req,res) => {
    
    

     const quiz = new Quiz(req.body);
     quiz.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err: "NOT able to save user in db"
            })
        }
        res.json({
            ques: quiz.ques,
            correct_answer: quiz.correct_answer,
            incorrect_answers: quiz.incorrect_answers

        });
     });
 }

exports.getQuizzes =(req,res) =>{
    
    Quiz.find()
        .then((quizzes)=>{
            res.json(quizzes);
        })
        .catch((err)=>{
            res.json(err);
        })
    
  }