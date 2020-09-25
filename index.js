const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/adminRoutes'); 

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);

app.use('/', (request, response, next)=>{
    console.log('in root route');
    response.send('<h1>Root</h1>');
});

app.listen(3000);

