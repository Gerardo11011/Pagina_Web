const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('Contacto', [{title : 'Contacto'}, {logeado: true}])
});


module.exports = router;