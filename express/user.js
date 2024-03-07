const express = require('express');
const app = express();
const port = 7070;
const morgan = require('morgan');
const mongoose = require('mongoose');
// Database conncetion
async function main() {
    await mongoose.connect ('mongodb://127.0.0.1:27017/jenil');
}
main()
.then(()=>console.log('DB is Connected....'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// const userRoutes = require('./Routes/product.routes');
// app.use('/product', productRoutse);

// const userRouter = require('./Router/user.router');
// app.use('/api/user', userRouter)

const productRoutes = require('./Router/product2.router');
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server start at http://localhost:7070`);
});