const express = require('express');
const {User} = require('../models/userModel.js');
const joi = require('joi');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const {error} = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message})
        }
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            return res.status(401).send({ message: 'Invalid Email or Password'})
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: 'Invalid Email or Password'})
        }
        const token = user.generateAuthToken();
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
          });
        res.status(200).send({token, message: 'loggedIn'})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
})

const validate = (data) => {
    const schema = joi.object({
        email: joi.string().required().label("Email"),
        password: joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports =  router;