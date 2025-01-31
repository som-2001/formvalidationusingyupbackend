const express = require("express");
const cors = require("cors");
const connection = require("./db/connection");
const UserRegister = require("./Controller/register");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://formvalidationyupfrontend.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
connection();

//Controller for registering users
app.get("/",(req,res)=>{
  res.status(200).json({message:"hello"})
})
app.use('/api',UserRegister)

app.listen(3001, () => {
  console.log("listening on port 3001");
});
