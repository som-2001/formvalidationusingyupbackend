const express=require('express');
const User=require('../Schema/User');
const router=express.Router();

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { name, email, password, confirmpassword } = req.body;
  
    try {
      const newUser = new User({
        name,
        email,
        password,
        confirmpassword,
      });
      const newUserResult = await newUser.save();
     
       res.status(200).json({message:"User registered successfully!!",newUserResult});
     
     
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

module.exports=router;