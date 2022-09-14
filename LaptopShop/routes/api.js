var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const session = require('express-session');
const employeeController = require('../components/employee/controller');
const customerController = require('../components/customers/controller');
const productController = require('../components/products/controller');


/* API EMPLOYEE. */
router.post("/login", async function (req, res, next) {
    const { username, password } = req.body;
    const employee = await employeeController.login(username, password);
    if (employee) {
        const token = jwt.sign({ id: employee._id, username: employee.username }, 'mykey');
        req, session.token = token;
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
});

router.post("/register", async function (req, res, next) {
    const { username, password, confirmPassword } = req.body;
    const employee = await employeeController.register(username, password, confirmPassword);
    if (employee) {
        res.json({ status: true })
    } else {
        res.json({ status: false })
    }
});

/* API CUSTOMER. */

router.post("/customer/login", async function (req, res, next) {
    const { username, password } = req.body;
    const customer = await customerController.login(username, password);
    if (customer) {
        const token = jwt.sign({ id: customer._id, username: customer.username }, 'mykey');
        res.json({ status: true, id: customer._id, username: customer.username, token });
    } else {
        res.json({ status : 404 })
    }
});

router.post("/customer/register", async function (req, res, next) {
    const { username, password, confirmPassword, name, email, phone, address} = req.body;
    const customer = await customerController.register(username, password, confirmPassword, name, email, phone, address);
    if (customer) {
        res.json({ status : true })
    } else {
        res.json({ status : false })
    }
});

/* API PRODUCT. */

router.get("/products", async function (req, res, next) {
    const products = await productController.getProducts();
    res.json(products);
});

router.get("/products/:id/detail", async function (req, res, next) {
    const { id } = req.params;
    const product = await productController.getProductById(id);
    res.json(product);
});

module.exports = router;