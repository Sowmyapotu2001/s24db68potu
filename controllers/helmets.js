var helmets = require('../models/helmets');
// List of all helmets
// exports.helmets_list = function(req, res) {
// res.send('NOT IMPLEMENTED: helmets list');
// };

exports.helmets_list = async function (req, res) {
    try {
        thehelmets = await helmets.find();
        res.send(thehelmets);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific helmet.
// exports.helmets_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: helmets detail: ' + req.params.id);
// };
exports.helmets_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await helmets.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle helmet create on POST.
//exports.helmets_create_post = async function(req, res) {
//res.send('NOT IMPLEMENTED: helmets create POST');
exports.helmets_create_post = async function(req, res) {
    console.log(req.body)
    let document = new helmets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dreamdestination_type":"goat", "loacation":12, "rating":"large"}
    document.helmet_style = req.body.helmet_style;
    document.size = req.body.size;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };


// console.log(req.body)
//     let document = new helmets();
//     // We are looking for a body, since POST does not have query parameters.
//     // Even though bodies can be in many different formats, we will be picky
//     // and require that it be a json object
//     // {"dreamdestination_type":"goat", "cost":12, "size":"large"}
//     document.helmet_style = req.body.helmet_style;
//     document.size = req.body.size;
//     document.price = req.body.price;
//     try{
//     let result = await document.save();
//     res.send(result);
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     } 
//    };








// Handle helmet delete from on DELETE.
exports.helmets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: helmets delete DELETE ' + req.params.id);
};
// Handle helmet update form on PUT.
// exports.helmets_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: helmets update PUT' + req.params.id);
// };


exports.helmets_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await helmets.findById(req.params.id)
        // Do updates of properties
        if (req.body.helmet_style)
            toUpdate.helmet_style = req.body.helmet_style;
        if (req.body.size) toUpdate.size = req.body.size;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
   failed`);
    }
};
// VIEWS
// Handle a show all view
exports.helmets_view_all_Page = async function(req, res) {
    try{
    thehelmets = await helmets.find();
    res.render('helmets', { title: 'helmets Search Results', results: thehelmets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
