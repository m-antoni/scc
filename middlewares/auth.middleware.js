const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if(!token){
        return res.status(401).json({ message: 'UnAuthorized Acccess.' });
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.authID = decoded._id;
        req.user = decoded.user;
        req.token = token;
        next();
        
    } catch (err) {
        console.log(err)
        return res.status(401).json({ message: 'Token is Invalid.' });
    }
}

module.exports = { auth };