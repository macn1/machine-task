const User = require('../model/userModel')

const bcrypt = require('bcryptjs')

const { generateToken, verifyToken } = require('../util/token')

const createUser = async (req, res) => {

    const { name, email, password } = req.body;
    console.log(req.body);

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.log(err);

        res.status(500).json({ message: 'Server error' });
    }
}


const loginUser = async (req, res) => {

    const { email, password } = req.body;
    // console.log(req.body);
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User doesnt exist' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}


const verifytoken = (req, res) => {
    console.log("jjj");
    
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: 'Token invalid or expired' });
    }
    res.json({ message: 'Token valid', user: decoded });
};



module.exports = { createUser, loginUser, verifytoken }