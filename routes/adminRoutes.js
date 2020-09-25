const express = require('express');
const path = require('path');


let router = express.Router();

router.post('/add-product', (req, res, next)=>{
    let body = req.body;
    console.log(body);
    res.redirect('/admin');
});


router.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'productFormPage.html'));
});

module.exports = router;