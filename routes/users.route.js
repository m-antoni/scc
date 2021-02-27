const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { auth } = require('../middlewares/auth.middleware');

/*  URL: api/users/ */
router.get('/dashboard', auth, UserController.dashboard);





module.exports = router;