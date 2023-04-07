const express = require('express');
const {signin , signup , getUsers, getUser , followingUser , followedUser , message_to , message_from} = require('../controllers/users')
const router = express.Router();
const {auth} = require('../middleware/auth')

router.post('/signin',signin);
router.post('/signup',signup);
router.get('/search-user' , getUsers)
router.get('/:id' , getUser);
router.patch('/:id/followingUser',auth, followingUser);
router.patch('/:id/followedUser',auth, followedUser);
router.patch('/:id/message_to',auth,message_to );
router.patch('/:id/message_from',auth,message_from );

module.exports = router


