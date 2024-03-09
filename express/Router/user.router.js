const express = require('express');
const userRouter = express.Router();
const {registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

userRouter.post('/register-user', registerUser);  //
userRouter.post('/login-user', loginUser)
userRouter.get('/get-all-users', getAllUsers);
userRouter.get('/get-user', getUser);
userRouter.put('/update-user', updateUser);    //
userRouter.delete('/delete-user', deleteUser);

module.exports = userRouter;