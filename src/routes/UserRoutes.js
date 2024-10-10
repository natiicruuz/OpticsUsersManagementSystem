const express = require('express');
const { registerUser, loginUser, getProfile, updateProfile, deleteUser, listUsers } = require('../controllers/UserController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.delete('/:id', deleteUser);
router.get('/listUsers', listUsers);

module.exports = router;
