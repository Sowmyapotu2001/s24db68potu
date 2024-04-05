var express = require('express');
const helmets_controller= require('../controllers/helmets');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('helmets', { title: 'Search Results: Helmets' });
// });
router.get('/', helmets_controller.helmets_view_all_Page );
module.exports = router;



