const customerService = require("./service");
const bcryt = require('bcryptjs');

exports.login=async(username, password)=>{
    const user=await customerService.login(username);
    if(user&&user.password==password){
        return user;
    }
    //kiểm tra mật khẩu sau khi mã hóa
    // const checkPassword= await bcrypt.compare(password,user.password);
    // if(!checkPassword) return null;
    return {id: user._id,username:user.username};
}

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
                password:item.password,
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
exports.getCustomerById = async (id) => {
    try {
        let customer = await customerService.getCustomerById(id);
        customer = {
            id: customer.id,
            password:item.password,
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            image: customer.image
        }
        return customer;
    }
    catch (error) {
        console.log('error',error);
        return null;
    }
}
exports.delete = async (id) => {
    try {
        await customerService.delete(id);
    } catch (error) {
        return null;
    }
}

