const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser= async (req , res) =>  {
    try {
        const {firstName ,lastName, gender ,email, password,age } = req.body;
        let user = await User.findOne({ email : email , isDelete : false });
        if(user) { 
            return res.status(400).json({Message : 'User Is Alredy Registered'})
        }
        // hash password 
        let hashPassword = await bcrypt.hash(password,10);
        // console.log(hashPassword);
        user = await User.create ({
          firstName,lastName,
          email,
          password : hashPassword,
          age,gender

        }); 
    
        user.save();
        // console.log(password);
        res.status(201).json({user : user, Message : 'New User Is Added'});
    } catch (error)
      {
        console.log(error);
        res.status(500).json({Message : 'Internal Server Error'});
      }
}

exports.loginUser = async (req , res) =>  {
  try {
      let user = await User.findOne({ email : req.body.email,isDelete : false });
      if(!user) { 
          return res.status(400).json({Message : 'User Is Not Found '});
      }
      let checkPassword = await bcrypt.compare(req.body.password,user.password);
      if(!checkPassword) {
        return res.status(400).json({ message : 'Password Is Not Match...'})
      }
      let token = jwt.sign({ userId : user._id},'Skillqode');
      res.status(200).json({ token, message : 'Login SucessFully'});
     }catch (error)
     {
        console.log(error);
        res.status(500).json({ message : 'Internal Server Error'});
     }
  }

exports.getAllUser = async (req,res) => {
  try {
    let users = await User.find({isDelete : false});
    res.status(200).json(users);

  }catch(error){
      console.log(error);
      res.status(500).json ({ Message : "Internal Server Error"});
  }
};

exports.getUser = async (req,res) => {
  try {
    let userId = req.user._id ;
    // let user = await User.findById(userId);
    let user = await User.findOne({_id : userId ,isDelete : false});
    if(!user){
      return res.status(404).json({ Message : `User Not Found ${console.error()}`});
    }
    res.status(200).json(user);
  }catch(error){
      console.log(error);
      res.status(500).json({ Message : "Internal Server Error"});
  }
};


exports.updateUser = async (req,res) => {
  try {
    let userId = req.query.userId ;
    let user = await User.findById(userId); 
    // let user await User.findById(userId);

    if(!user){
      return res.status(404).json({ Message : "User Not Found"});

    }
    // user = await user. findOneAndUpdate({id:user._id },{$set : {...req.body} },{new : true}); 
    user = await User.findOneAndUpdate({_id:user._id}, { $set: { ...req.body}}, { new : true });
    // user = await user.findByIdAndUpdate({_id: user.id}, {$set : {...req.body} },{new : true});
    res.status(200).json(user);

  }catch(error){
      console.log(error);
      res.status(500).json ({ Message : "Internal Server Error"});
  }
};


exports.deleteUser = async (req,res) => {
  try {
    let userId = req.query.userId ;
    let user = await User.findById(userId);

    if(!user){
      return res.status(404).json({ Message : "User Not Found"});

    }
    // user = await User. findByIdAndUpdate(user._id );
    // user = await User.findOneAndUpdate({_id:user._id},{isDelete : true },{new : true});
    user = await User.findOneAndUpdate({ _id: user._id}, { isDelete: true}, { new : true });
    res.status(200).json({user, message : 'user deleted'}); 

  }catch(error){
      console.log(error);
      res.status(500).json ({ Message : "Internal Server Error"});
  }
};