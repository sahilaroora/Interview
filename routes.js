const express = require("express");
const User = require("../Contoller/MyUser");
const router = express.Router();
const mongoose = require("mongoose");

const autoincrement = require("mongoose-auto-increment");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

autoincrement.initialize(mongoose.connection);


// userSchema.plugin(autoincrement.plugin,"mydata" );

const userr = mongoose.model("mydata", userSchema);

router.post("/add", async (req, res) => {
  const user = req.body;
  console.log(user);

  const Newuser = new userr(user);
  try {
    await Newuser.save();
    res.status(201).json(Newuser);
  } catch (error) {
    res.status(409).json({ messege: error.messege });
  }
});


router.get("/all",  async(req,res)=>{
  try{
     const user= await userr.find({})
     res.status(200).json(user)
  }catch(error){
    res.status(404).json({messege: error.messege})
  }
})

router.get("/:id",async(req,res)=>{
  try{
    const user= await userr.find({_id:req.params.id})
    res.status(200).json(user)
 }catch(error){
   res.status(404).json({messege: error.messege})
 }
})

router.put("/:id", async(req,res)=>{
  let user = req.body;
  const edituser = new userr(user)
  try {
    // console.log(req.body)
      const result =  await userr.updateOne({_id:req.params.id}, edituser)
      console.log(result)
      res.status(201).json(edituser)
    
  } catch (error) {
   res.status(409).json({messege: error.messege})
  }
})
  

router.delete("/:id",async (req,res)=>{
  try {
    await userr.deleteOne({_id:req.params.id})
  } catch (error) {
    res.status(400).json({messege:error.messege})
    
  }
})

module.exports = router;
