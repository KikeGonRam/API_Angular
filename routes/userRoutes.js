const express = require('express');
const { checkSchema } = require('express-validator');
const router = express.Router();
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

const userSchema = {
    username: {
    isString: true,
    isLength: { options: { min: 3, max: 50 } },
    errorMessage: 'Username must be a string between 3 and 50 characters'
    },
    email: {
    isEmail: true,
    errorMessage: 'Invalid email format'
    },
    password: {
    isString: true,
    isLength: { options: { min: 6 } },
    errorMessage: 'Password must be at least 6 characters'
    }
};

router.get('/', auth, userController.getAllUsers);
router.get('/:id', auth, userController.getUserById);
router.post('/', checkSchema(userSchema), validate, userController.createUser);
router.put('/:id', auth, checkSchema(userSchema), validate, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;