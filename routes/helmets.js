var express = require('express');
const helmets_controller= require('../controllers/helmets');
var router = express.Router();
var passport=require('passport');
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('helmets', { title: 'Search Results: Helmets' });
// });
router.get('/', helmets_controller.helmets_view_all_Page );


/* GET detail Bank page */
router.get('/detail', helmets_controller.helmets_view_one_Page);

/* GET create Bank page */
router.get('/create', helmets_controller.helmets_create_Page);

/* GET create update page */
router.get('/update',secured, helmets_controller.helmets_update_Page);

/* GET delete Bank page */
router.get('/delete', helmets_controller.helmets_delete_Page);


// router.get('/update',helmets_controller.helmets_update_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    

module.exports = router;



