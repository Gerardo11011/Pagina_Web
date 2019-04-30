const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webDB', {useNewUrlParser: true});
var db = mongoose.connection;
var article = require ('../models/article')

router.get('/', function (req, res, next) {
  article.find({'tema': 'Astronomia'}, function (err, article){

    if(err){
       console.log(err);
    }
    else {
       res.render('Astronomia', {title : 'Astronomia', logeado: false, articles: article});
    }
  });
});



module.exports = router;
