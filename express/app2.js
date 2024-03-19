require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');

const mongoose = require('mongoose');
// Database connection

async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main()
.then(()=>console.log('DB is connected...'))
.catch(err => console.log(err));

// MiddleWare 
app.use(express.json());
app.use(morgan('dev'));

const cartRoutes = require('./routers/cart.routes');
app.use('/api/cart',cartRoutes);

const userRoutes= require('./routers/user.routes');
app.use('/api/user',userRoutes);    

const productRoutes = require('./routers/product.routes');
app.use('/api/products',productRoutes);

const orderRoutes = require('./routers/order.routes');
app.use('/api/order',orderRoutes);

app.listen(port,()=> {
    console.log(`Server start at http://localhost:${port}`);
})