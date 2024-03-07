const product = require('../public/product.json');

exports.addProduct = (req, res)=> {
    // console.log(req.body);
    const product = req.body;
    product.push(product);
    // product.push({...req.body});
    res.status(201).json({ message: 'Product is Added....' }) 
};

exports.getAllproducts = (req, res) => {
    res.status(200).json(product);
}

exports.getProduct = (req, res) => {
    const id = +req.query.id;
    // console.log(id);
    let product = product.file((item) => item.id === id)
    res.status(200).json(product);
};

exports.repaceProduct = (req, res) => {
    const id = +req.query.id;
    let productIndex = products.filndindex((item) => item.id === id)
    let product = products[productIndex];
    product.splice(productIndex, 1, { ...req.body });
    // console.log(product);
    res.status(200).json({ message: 'Product Replace SuccessFully......'})
};

exports.updateProduct = (req, res) => {
    const id = +req.query.id;
    let productIndex = product.filndindex((item) => item.id === id)
    let product = product[product];
    let item = product.splice(productIndex,1 ,{ ...product, ...req.body});
    // console.log(product);
    res.status(200).json({ message: 'Product Update SuccessFully.....'});
};

exports.deleteproduct = (req, res) => {
    const id = +req.query.id;
    let productIndex = products.filndindex((item) => item.id === id)
    let product = products[productIndex];
    let item = product.splice(productIndex, 1);
    // console.log(product);
    res.status(200).json({message: 'Product Delete SuccessFully...'});
};