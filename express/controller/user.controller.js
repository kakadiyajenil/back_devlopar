const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const {firstName, lastName, gender, email, password, age} = req.body;
        let user = await User.findOne({ email: email, isDelete: false });
        if (user) {
            return res.status(400).json({ message: 'User is already registered....' })
        }
        // hash password
        let hashPassword = await bcrypt.hash(password,10);
        let newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            age,
            gender
        });
        newUser.save();
        res.status(201).json({user: newUser, message: 'new User is Added'});
    }catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}
exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            return res.status(400).json({ message: 'User is not found' });
        }
        let chaekPassword = await bcrypt.compare(req.body.password, user.password);
        if (!chaekPassword) {
            return res.status(400).json({ message: 'Password is not match....'})
        }
        let token = jwt.sign({ userId: user._id }, 'Skillqode');
        res.status(200).json({ token, message: 'Login Successfullly' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error '});
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find({ isDelete: false });
        res.status(200).json(users);
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

exports.getUser = async (req, res) => {
    try{ 
        let userId = req.query.userId;
        // let user = await User.findById(userId);
        let user = await User.findOne({ _id: userId, isDelete: false  });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }catch (erro) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // user = await User.findByIdAndUpdate(user._id, { $set: {...req.body}}, { new: te=rue });
        user = await User.findOneAndUpdate({_id:user._id}, { $set: {...req.body} }, { new: true });
        res.status(200).json({user, message: 'Updated...'});
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.deleteUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // user = await User.findByIdAndDelete(user._id);
        user = await User.findOneAndUpdate({_id:user._id}, { isDelete: true }, { new: true });
        res.status(200).json({user, message: 'User Delete...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};