// create router for user profile.
const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_conroller');

router.get('/profile', userController.profile);

// controller send the  sign up data to browser via router 
router.get('/sign-up',userController.signUp);


// controller send the  sign in data to browser via router 
router.get('/sign-in',userController.signIn);


//  define the router for create the sign up data

router.post('/create',userController.create);

module.exports = router;