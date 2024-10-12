import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - No  Token Provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) {
      return res.status(401).json({ error: 'Unauthorized - Invalid Token.' });
    }

    const user = await User.findById(decoded.userId).select("-password")

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized - User not found.' });
    }

    req.user = user
    next();

  } catch (error) {
    console.log("Error in protect route middleware", error.message)
    res.status(401).json({ error: 'Access denied. Please authenticate.' });
  }
}

export default protectRoute;