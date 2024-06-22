var express = require('express');
var router = express.Router();
const { getKegiatan } = require('../controllers/KegiatanController');

/* GET home page. */

router.get('/', function(req, res, next) {
  
    res.redirect('/home');
  });
  
router.get('/home', getKegiatan);
  
module.exports = router;
