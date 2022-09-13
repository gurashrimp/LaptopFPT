const customerService = require("./service");
const bcryt = require('bcryptjs');

exports.login = async (username, password) => {
    const customer = await customerService.login(username);
    const checkPassword = await bcryt.compare(password, customer.password);
    if(!checkPassword) return null;
    return {_id: customer._id, username: customer.username}
};

exports.register = async ( username, password, confirmPassword, name, email, phone, address, image) => {
    if(password != confirmPassword) return null;
    let customer = await customerService.login(username);
    if(customer) return null;
    const hash = await bcryt.hash(password, await bcryt.genSalt(10));
    customer = await customerService.register(username, hash, name, email, phone, address, image);
    return{_id : customer._id}
};

exports.getCustomers = async () => {
    try {
        let customers = await customerService.getAllCustomer();
        customers = customers.map((item) => {
            item = {
                _id: item._id,
                name: item.name,
                email: item.email,
                phone: item.phone,
                address: item.address,
                image: item.image
            }
            return item;
        })
        return customers;
    } catch (error) {
        console.log(error)
        return false;
    }
}

exports.delete = async (id) => {
    try {
        await customerService.delete(id);
    } catch (error) {
        return null;
    }
}

