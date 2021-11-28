const express=require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router_loaded');
router.get('/', homeController.home);


//  for any furter router access from here 
// router.use('./routerName' , require("./routerFile"));

router.use('/users' , require('./users'))  ;

module.exports = router; 