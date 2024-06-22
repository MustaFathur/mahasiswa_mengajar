var express = require('express');
var router = express.Router();
const { login, requireAuth } = require('../middleware/auth');
const { getKegiatan } = require('../controllers/KegiatanController');
/* GET home page. */


router.get('/', requireAuth, function(req, res, next) {
  
  res.redirect('/home');
});

router.get('/home', requireAuth, getKegiatan);

router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Transkrip Nilai', message: 'You need to log in to access this page' });
});


module.exports = router;
