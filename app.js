/*
============================================
; Title:  Exercise 5.4 - UI Dev with EJS
; Author: Grayton Savickas
; Date:   06 Feb 2021
; Modified By:
; Description: Development of UI elements in EJS
;===========================================
*/

// Require statements.
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');
const Employee = require('./models/employee');


// database connection string to MongoDB Atlas
const conn = 'mongodb+srv://dbUser-gss:wANRMmT7OFBXFO2g@mando21.06wom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connection to the database instance was successful');
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
});


/**
 * Sets up CSRF protection.
 */
const csrfProtection = csrf({ cookie: true });

/**
 * Initializes the express application.
 */
let app = express();
/**
 * Configures the dependency libraries.
 */
// Morgan logger
app.use(logger('short'));
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Cookie parser
app.use(cookieParser());

// Helmet
app.use(helmet.xssFilter());

// CSRF protection
app.use(csrfProtection);
/**
 * Intercepts all incoming requests and adds a CSRF token to the response.
 */
app.use(function(req, res, next) {
  const token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, employee[]
 * URL: localhost:3000
 */
app.get('/', function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      res.render('index', {
        title: 'EMS | Home',
        employees: employees
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:3000/new
 */
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:3000/process
 */
app.post('/process', function(req, res) {

  if (!req.body.fName) {
    res.status(400).send('Entries must have a first name');
    return;
  }
  if (!req.body.lName) {
    res.status(400).send('Entries must have a last name');
    return;
  }

  // get the request's form data
  const firstName = req.body.fName;
  console.log(firstName);
  const lastName = req.body.lName;
  console.log(lastName);

  // create a Employee model
  let employee = new Employee({
    firstName : firstName,
    lastName : lastName
  });

  // save
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + " " + lastName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, employee[] | index.ejs
 * URL: localhost:3000/view/:queryName
 */
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params['queryName'];

  Employee.find({'fName': queryName}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

/**
 * Creates a new Node.js server and listens on local port 3000.
 */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Application started on port ' + app.get('port'));
});
