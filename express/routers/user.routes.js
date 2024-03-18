const express = require('express');
const userRoutes = express.Router();
const {verifyToken} = require('../helpers/verifyToken')
const {registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser} = require('../controller/user.controll');

userRoutes.post('/register-user',registerUser);
userRoutes.post('/login-user',loginUser);
userRoutes.get('/get-all-user',verifyToken,getAllUser);
userRoutes.get('/get-user',verifyToken,getUser);
userRoutes.put('/update-user',updateUser);
userRoutes.delete('/delete-user',deleteUser);

module.exports = userRoutes ;