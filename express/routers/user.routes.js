const express = require('express');
const userRoutes = express.Router();
const { upload } = require('../helpers/imageUpload');
const {verifyToken} = require('../helpers/verifyToken')
const {registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    addNewUser} = require('../controller/user.controll');

userRoutes.post('/register-user',registerUser);
userRoutes.post('/login-user',loginUser);
userRoutes.get('/get-all-user',verifyToken,getAllUser);
userRoutes.get('/get-user',verifyToken,getUser);
userRoutes.put('/update-user',updateUser);
userRoutes.delete('/delete-user',deleteUser);

userRoutes.post('/add-user', upload.single('profileImage'), addNewUser);

module.exports = userRoutes ;