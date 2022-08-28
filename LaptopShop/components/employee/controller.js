const employeeService = require("./service");
const bcryt = require('bcryptjs');

exports.login = async (username, password) => {
    const employee = await employeeService.login(username);
    const checkPassword = await bcryt.compare(password, employee.password);
    if(!checkPassword) return null;
    return {_id: employee._id, username: employee.username}
};

exports.register = async (username, password, confirmPassword) => {
    if(password != confirmPassword) return null;
    let employee = await employeeService.login(username);
    if(employee) return null;
    const hash = await bcryt.hash(password, await bcryt.genSalt(10));
    employee = await employeeService.register(username, hash);
    return{_id : employee._id}
}