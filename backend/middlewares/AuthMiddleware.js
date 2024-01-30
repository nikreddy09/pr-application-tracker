const {User} = require('../models/userModel.js');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const userVerification = (req, res, next) => {
  console.log(req.headers)
  const token = req.headers.authorization
  console.log(token)
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.JWTPRIVATEKEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
    console.log(data)
      const user = await User.findById(data._id)
      if (user) {
        console.log(user)
        // return res.json({ status: true, user: user.username })
        next()
      }
      else return res.json({ status: false })
    }
  })
}

module.exports = userVerification