const { verifyToken } = require('../util/token');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
  req.user = decoded;
  next();
};


module.exports =    {protect}
