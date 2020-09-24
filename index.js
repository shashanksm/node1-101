const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('')

app.use('/users', (request, response, next)=>{
    console.log('in users route');
    response.send('<h1>Users</h1>');
});


app.use('/', (request, response, next)=>{
    console.log('in root route');
    response.send('<h1>Root</h1>');
});

app.listen(3000);