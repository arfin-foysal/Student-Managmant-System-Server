const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./Routers/userRouter");
const studentRouter = require("./Routers/studentRouter");

const port = process.env.PORT || 8080;
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRouter)
app.use('/student', studentRouter)




// app.post('/', upload.single('images'),(req, res,) => {
//   res.send("sucess")
 
//   console.log(req.body.images);
// })



// DataBase Conncetion
mongoose.connect(process.env.DB)
  .then(console.log("DataBase Conncet Sucess"))
  .catch((err) => {
    console.log(err);
  });
// DataBase Conncetion
app.listen(port, () => {
  console.log(`DataBase Connent ${port}`);
});
