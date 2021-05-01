const express = require("express");
const { createQuiz, getQuizzes } = require("../controllers/quiz");


const router = express.Router();

router.post("/quiz/create",createQuiz);
router.get("/quizzes",getQuizzes)

module.exports = router;