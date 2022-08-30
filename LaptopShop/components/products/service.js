const productModel = require('./model');

exports.getAllProduct = async () => {
    return await productModel.find().populate('categoryId', 'brandId');
}

exports.getProductById = async (id) => {
    const product = productModel.findById(id).populate('categoryId', 'brandId');
    return product;
};

exports.insert = async (product) => {
    const p = new productModel(product);
    await p.save();
}

exports.update = async (id, product) => { 
    await productModel.findByIdAndUpdate(id, product);
}

exports.delete = async (id) => {
    await productModel.findByIdAndDelete(id);
}
