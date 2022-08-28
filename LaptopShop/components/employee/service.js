const employeeModel = require('./model');

exports.login = async (username) => {
    const employee = await employeeModel.findOne({username : username}, 'id username password');
    return employee;
}

exports.register = async (username , password) => {
    const employee = new employeeModel({username, password});
    return await employee.save();
}