const jwt = require('jsonwebtoken');
const User = require('../model/user.model')


exports.verifyToken = async (req,res,next) => {
    const authorization = req.headers['authorization'];
    if(authorization === undefined) {
      return res.json({message : 'auhthorization Not Defined'});
    }
    let token = authorization.split(" ") [1];
    console.log(token); 
  
    if(token === undefined)
       return res.status(404).json({message : 'Unauthorization'});
     else {
        let {userId} = jwt.verify(token, 'SkillQode');
        console.log(userId)
        let user = await User.findById(userId);
        console.log(user);
        if(user)
        {
          req.user = user;
          next();
        }else 
           return res.status(404).json({ message : 'Invalid User'});
     }
  };