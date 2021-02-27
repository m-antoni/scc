const User = require('../models/User');

/* 
    @route   GET api/users/dashboard
    @desc    User's Dashboard
    @access  private 
*/
const dashboard = async (req, res) => {
    
    res.json({message: 'Welcome to dashboard'});
}


module.exports =  { dashboard };