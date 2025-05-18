const express = require('express');
const { checkSchema } = require('express-validator');
const router = express.Router();
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const adminController = require('../controllers/adminController');

const adminSchema = {
    user_id: {
        isInt: true,
        errorMessage: 'User ID must be an integer'
    },
    role: {
        isString: true,
        isIn: { options: [['admin', 'moderator']] },
        errorMessage: 'Role must be either admin or moderator'
    }
};

router.get('/', auth, adminController.getAllAdmins);
router.get('/:id', auth, adminController.getAdminById);
router.post('/', auth, checkSchema(adminSchema), validate, adminController.createAdmin);
router.put('/:id', auth, checkSchema(adminSchema), validate, adminController.updateAdmin);
router.delete('/:id', auth, adminController.deleteAdmin);

module.exports = router;