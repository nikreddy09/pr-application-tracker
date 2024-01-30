const express = require('express');
const {User, validate} = require('../models/userModel.js');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error) {
            return res.status(400).send({ message: error.details[0].message})
        }
        const user = await User.findOne({ email: req.body.email})
        if (user) {
            return res.status(409).send({ message: 'User with given email already exists'})
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt); 

        await new User({...req.body, password: hashPassword}).save();
        res.status(201).send({messange: 'User Created Successfully'})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
});

module.exports = router;
