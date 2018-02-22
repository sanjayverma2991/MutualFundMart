var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var category = require('./routes/categoryApi');
var user = require('./routes/userApi');
var purchase = require('./routes/purchaseApi');

var mongoose = require('mongoose');
require('./schemas/categorySchema.js');
require('./schemas/adminSchema.js');
require('./schemas/collection_record.js');
require('./schemas/purchaseSchema.js');
require('./schemas/userSchema.js');

var app = express();

// var portDB = 27017;
// var connectDB = 'mongodb://localhost:' +portDB+ '/mutual-fund-mart';
var connectDB = 'mongodb://admin:wipro123@ds127132.mlab.com:27132/mutual-fund-mart'
mongoose.Promise = global.Promise;
mongoose.connect(connectDB);
var db = mongoose.connection;


// connection established
db.on('connected', () => {
    console.log('Database connection established ');
});

db.on('error', (err) => {
    if(err) {
        console.log('Database connection error @port:'+err );
    }
});

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set static folder
app.use(express.static(path.join(__dirname, '../dist')));

app.use(logger('dev'));

//to parse form datas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    { extended: false }
));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(cookieParser());


app.use('/', index);
app.use('/api/categories', category);
app.use('/api/users', user);
app.use('/api/purchases', purchase);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

var port = 4444;
app.listen(process.env.PORT, function () {
    console.log('Listening http://localhost:'+port);
});

module.exports = app;
