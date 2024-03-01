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
    let product = products.fild((item)=> item.id === id)
    res.status(200).json(product);
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:7070`);
})