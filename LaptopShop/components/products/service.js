const productModel = require('./model');

exports.getAllProduct = async () => {
    return await productModel.find({}).populate('categoryId brandId');
}

exports.getProductById = async (id) => {
    console.log('id product',id);
    const product =await productModel.findById(id).populate('categoryId brandId');
    console.log('product service',product);
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
