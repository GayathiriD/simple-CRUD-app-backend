const Product = require('../models/product.model.js');
const router = require('express').Router();
const {getProduct, CreateProduct, getProductById, updateProduct, deleteProduct} = require('../controller/product.controller.js');

router.get('/' , getProduct);
router.get('/:id' , getProductById);
// create a new product
router.post('/' , CreateProduct);

// update a product
router.put('/:id' , updateProduct);

// delete a product
router.delete('/:id' , deleteProduct);


module.exports = router;
