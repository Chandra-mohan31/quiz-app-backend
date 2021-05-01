
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const quizRoutes = require("./routes/quiz");


// 



const port = 8000;
// const uri = "mongodb+srv://chand123:chand@123@quiz-app.gsvvw.mongodb.net/quiz?retryWrites=true&w=majority"

// mongodb+srv://chand123:chand@123@mern-ecom.qpe2c.mongodb.net/tshirt?retryWrites=true&w=majority
// port = "mongodb+srv://chand123:chand@123@quiz-app.gsvvw.mongodb.net/quiz?retryWrites=true&w=majority";
// --> mongodb://localhost:27017/quiz
mongoose.connect(("mongodb+srv://chand123:chand@123@quiz-app.gsvvw.mongodb.net/quiz?retryWrites=true&w=majority"),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{console.log(err)});


app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());



app.use("/api",quizRoutes);

// app.get("/",(req,res)=>{
//     res.send("hello world");
// })
// mongodb+srv://chand123:chand@123@mern-ecom.qpe2c.mongodb.net/tshirt?retryWrites=true&w=majority
// // mongodb+srv://chand123:<password>@mern-ecom.qpe2c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// //starting a server
app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})
