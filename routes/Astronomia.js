const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('Astronomia', [{title : 'Astronomia'}, {logeado: true}])
});


module.exports = router;