const express = require('express');
const {signin , signup , getUsers, getUser} = require('../controllers/users')
const router = express.Router();

router.post('/signin',signin);
router.post('/signup',signup);
router.get('/search-user' , getUsers)
router.get('/:id' , getUser);


module.exports = router


