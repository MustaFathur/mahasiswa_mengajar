var express = require('express');
var router = express.Router();
const { login, requireAuth } = require('../middleware/auth');
const kegiatanController = require('../controllers/kegiatan');
/* GET home page. */


router.get('/', requireAuth, function(req, res, next) {
  res.render('home', { title: 'Transkrip Nilai' });
});



router.get('/kegiatan', kegiatanController.view);
router.get('/kegiatan/add', kegiatanController.add);
router.post('/kegiatan/store', kegiatanController.store);
// router.post('/kegiatan/pembayaran', kegiatanController.pembayaran);
router.post('/kegiatan/pembayaran/proses', kegiatanController.prosesPembayaran);
router.get('/kegiatan/delete/:id', kegiatanController.deleteEvent);
router.get('/kegiatan/detail/:id', kegiatanController.detail);




router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Transkrip Nilai', message: 'You need to log in to access this page' });
});





module.exports = router;
