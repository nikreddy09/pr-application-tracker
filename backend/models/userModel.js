import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: '7d'});
    return token;
}

const User = mongoose.model('User', userSchema)

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data);
}

export {User, validate}