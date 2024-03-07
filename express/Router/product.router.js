const express = require('express');
const productRoutes = express.productRoutes();
const {
    addroduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    replaceProduct,
    updateProduct
} = require('../controller/product.controller');
 
// Create Product
productRoutes.post('/',addproduct);

// get All product
productRoutes.get('/',getAllproduct);

//get single product
productRoutes.get('/single-product',getproduct);

//replace Single product
productRoutes.put('/redate-product',replaceproduct);

// Update Single product
productRoutes.patch('/update-product',updateProduct);

// delete Single product
productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;
