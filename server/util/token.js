const jwt = require('jsonwebtoken');

const generateToken = (user) => {

    return jwt.sign({user:user._id,name:user.name,email:user.email,password:user.password},
        process.env.JWT_SECRET,{
            expiresIn:'1hr'
        }
    )
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
