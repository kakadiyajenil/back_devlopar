const User = require('../model/user.model');
const bcrypt = require('bcrypt');

exports.addUser = async (req, res) => {
    try {
        const {firstName, lastName, gender, email, password, age} = req.body;
        // console.log(req.body);
        let hashPassword = await bcrypt.hash(password,10);
        // console.log(hashPassword);
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