var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var helmets_controller = require('../controllers/helmets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/helmets', helmets_controller.helmets_create_post);
// DELETE request to delete Costume.
router.delete('/helmets/:id', helmets_controller.helmets_delete);
// PUT request to update Costume.
router.put('/helmets/:id', helmets_controller.helmets_update_put);
// GET request for one Costume.
router.get('/helmets/:id', helmets_controller.helmets_detail);
// GET request for list of all Costume items.
router.get('/helmets', helmets_controller.helmets_list);
module.exports = router;