var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const session = require('express-session');
const employeeController = require('../components/employee/controller');


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

module.exports = router;