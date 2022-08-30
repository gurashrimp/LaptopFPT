var express = require('express');
var router = express.Router();
const employeeController = require('../components/employee/controller');
const jwt = require('jsonwebtoken');
const session = require('express-session');

/* GET EMPLOYEE. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

/* GET PRODUCT. */
router.get("/home", function (req, res, next) {
  res.render("home");
});


router.get("/products", function (req, res, next) {
  res.render("products");
});
module.exports = router;
