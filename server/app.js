const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});
require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));
const PORT = process.env.PORT;


// Middleware
// const middleware=(req,res, next) => {
//     console.log('hello my middleware');
//     next();
// }


// app.get('/',(req,res) => {
//     res.send('Hello');
// });

// app.get('/Login',middleware,(req,res) => {
//     console.log('hello my Login');
//     res.send('Hello from login');
// });

// app.get('/register',middleware,(req,res) => {
//     console.log('hello my Register');
//     res.send('Hello from register');
// });


app.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
})