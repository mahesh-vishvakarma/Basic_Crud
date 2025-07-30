import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import bodyParser from 'body-parser';
import router from './router/userrouter.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;

env.config();

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["POST","PUT","DELETE","GET"]
}))
mongoose.connect(process.env.URL,{
  dbName:"crud_revised"
})
.then(() => {
  console.log("db connected successflly");
}).catch((err) => {
  console.log("db not connected");
  console.log(err);
});

//routes
app.use('/api/user',router)

app.use("/", (req,res)=> {
  res.send("first crud operation")
})

app.listen(PORT,()=> {
  console.log(`ser is running on http://localhost:${PORT}`);
})