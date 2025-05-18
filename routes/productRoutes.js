const express = require('express');
const { checkSchema } = require('express-validator');
const router = express.Router();
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const productController = require('../controllers/productController');

const productSchema = {
    name: {
    isString: true,
    isLength: { options: { min: 1, max: 100 } },
    errorMessage: 'Name must be a string between 1 and 100 characters'
    },
    price: {
    isFloat: { options: { min: 0 } },
    errorMessage: 'Price must be a positive number'
    },
    stock: {
    isInt: { options: { min: 0 } },
    errorMessage: 'Stock must be a non-negative integer'
    }
};

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', auth, checkSchema(productSchema), validate, productController.createProduct);
router.put('/:id', auth, checkSchema(productSchema), validate, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;