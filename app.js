const express=require('express')
const { books, users } = require('./db');
const { userInfo } = require('os');

const app=express();
const PORT=3000;
app.use(express.json());
app.all('/',(req,res)=>{res.send
    ('Library RESTful API Service is Running')});
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });

const userRoutes = require('./routes/user.route');
app.use('/users', userRoutes);