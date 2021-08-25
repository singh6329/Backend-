const express=require('express');
const user= require('../Schema/UserSchema')
const router=express.Router()


router.post('/signup',async (req,res)=>{
    const name=req.body.name
    const  email=req.body.email
    const password=req.body.password
    const confirmPassword=req.body.confirmPassword
    const  phone=req.body.phone

const post=new user({
    name:name,
    email:email,
    password:password,
    confirmPassword:confirmPassword,
phone:phone
})

try{
    if(!name||!email||!password||!confirmPassword||!phone)
    {
 return res.json({message:"Please fill all the fields correctly"})
    }
    else if(password!=confirmPassword)
    {
        return res.json({message:"Password not matches with confirm password "})
    }

const emailExists=await user.findOne({email:email})

if(emailExists)
{
  return   res.status(422).json({message:"Email already registered"})
}
else
{
    const insert= await post.save();
    console.log("Success");
   return  res.status(200).json(insert);
   
}
}catch(err)
{
 res.json("Error while storing data"+err);
}


})

module.exports=router;