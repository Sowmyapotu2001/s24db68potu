var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmets = require("./models/helmets");
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helmetsRouter = require('./routes/helmets');
var gridRouter = require('./routes/grid');
var picRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/helmets',helmetsRouter);
app.use('/grid', gridRouter);
app.use('/pick', picRouter);
app.use('/users', usersRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// We can seed the collection if needed on
// server start
async function recreateDB()
{
// Delete everything
await helmets.deleteMany();
let instance1 = new
helmets({helmet_style:"Full Face", size:'Medium',price:100});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
helmets({helmet_style:"Open Face", size:'Large',price:80});
instance2.save().then(doc=>{
console.log("second object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new
helmets({helmet_style:"Modular", size:'Small',price:120});
instance3.save().then(doc=>{
console.log("third object saved")}
).catch(err=>{
console.error(err)
});
}

let reseed = true;
if (reseed) {recreateDB();
}


// module.exports = app;

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var helmets = require("./models/helmets");
// require('dotenv').config();
// const connectionString = process.env.MONGO_CON;
// const mongoose = require('mongoose');
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// // Get the default connection
// var db = mongoose.connection;
// // Bind connection to error event
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once("open", function () {
//     console.log("Connection to DB succeeded");
// });

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var helmetsRouter = require('./routes/helmets');
// var gridRouter = require('./routes/grid');
// var picRouter = require('./routes/pick');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/helmets', helmetsRouter);
// app.use('/grid', gridRouter);
// app.use('/pick', picRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

// // We can seed the collection if needed on server start
// async function recreateDB() {
//     try {
//         // Delete everything
//         await helmets.deleteMany();

//         let instance1 = new helmets({ helmet_style: "Full Face", size: 'Medium', price: 100 });
//         await instance1.save();
//         console.log("First object saved");

//         let instance2 = new helmets({ helmet_style: "Open Face", size: 'Large', price: 80 });
//         await instance2.save();
//         console.log("Second object saved");

//         let instance3 = new helmets({ helmet_style: "Modular", size: 'Small', price: 120 });
//         await instance3.save();
//         console.log("Third object saved");
//     } catch (err) {
//         console.error('Error recreating DB:', err);
//         // Handle the error appropriately
//     }
// }

// let reseed = true;
// if (reseed) {
//     // Call recreateDB asynchronously
//     recreateDB().then(() => {
//         console.log('Database seeded successfully');
//     }).catch(err => {
//         console.error('Error seeding database:', err);
//     });
// }

module.exports = app;

