const router = require('express').Router();


//Our controller
const PageController = require('../controllers/pagesController');

//Create routes
router.get('/',PageController.show);
router.get('/about',PageController.show);
router.get('/contact',PageController.show);

module.exports = router;