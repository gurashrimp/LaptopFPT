const customerModel = require('./model');

exports.login = async (username) => {
    const customer = await customerModel.findOne({username : username}, 'id username password');
    return customer;
}

exports.register = async (username, password, confirmPassword, name, email, phone, address, image) => {
    const customer = new customerModel({username, password, confirmPassword, name, email, phone, address, image});
    return await customer.save();
}

exports.getAllCustomer = async () => {
    return await customerModel.find({});
}

exports.delete = async (id) => {
    await customerModel.findByIdAndDelete(id);
}
