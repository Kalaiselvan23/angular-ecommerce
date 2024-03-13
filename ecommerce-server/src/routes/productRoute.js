const express = require('express');
const router = express.Router();

const { getProduct, createProduct, updateProduct, deleteProduct,getAllProducts} = require('../controllers/productController');

router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get("/",getAllProducts);

module.exports = router;
