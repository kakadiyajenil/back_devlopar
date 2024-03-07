const express = require('express');
const app = express();
const port = 7070;
const morgan = require('morgan');
const products = require('./hello.json');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// End-points - CRUD
app.post('/products', (req,res)=> {
    //console.log(req.body);
    const product = req.body;
    products.push(product);
    // products.push({...req.body});
    res.status(201).json({message: 'Product is Added.....'})
});

app.get('/products', (req,res)=> {
    res.status(200).json(products);
});

app.get('/products/single-product', (req, res)=>{
    const id = +req.query.id;
    // console.log(id);
    let product = products.find((item)=> item.id === id)
    res.status(200).json(product);
});

// Replace Single Product

app.put('/products/replace-product', (req, res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id)
    let product = products [productIndex];
    products.splice(productIndex, 1, { ...req.body });
    // console.log(product);
    res.status(200).json({ message: 'Product Replace SuccessFully.....' });
    });
    
    // Update Single Product
    
    app.patch('/products/update-product', (req, res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id)
    let product = products [productIndex];
    let item = products.splice(productIndex, 1, { ...product, ...req.body });
    // console.log(product);
    res.status(200).json({ message: 'Product Update SuccessFully.....' });
    });
    
    // Delete Single Product
    
    app.delete('/products/delete-product', (req, res) => {
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id)
    let product = products [productIndex];
    let item = products.splice(productIndex, 1);
    // console.log(product);
    res.status(200).json({message: 'Product Delete Successfully.....' });
    });
    

app.listen(port, () => {
    console.log(`Server start at http://localhost:7070`);
})