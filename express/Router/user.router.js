const express = require('express');
const userRouter = express.Router();
const {addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

userRouter.post('/add-user', addUser);  //
userRouter.get('/get-all-users', getAllUsers);
userRouter.get('/get-user', getUser);
userRouter.put('/update-user', updateUser);    //
userRouter.delete('/delete-user', deleteUser);

module.exports = userRouter;