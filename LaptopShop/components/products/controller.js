const productService = require('./service');

exports.getProducts = async () => {
    try {
        let products = await productService.getAllProduct();
        products = products.map((item) => {
            item = {
                _id: item._id,
                categoryId: item.categoryId,
                brandId: item.brandId,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                description: item.description,
                released: date.format(item.released),
            }
            return item;
        })
        return products;
    } catch (error) {
        console.log(error)
        return false;
    }
}

exports.getProductById = async (id) => {
    try {
        let product = await productService.getProductById(id);
        product = {
            _id: product._id,
            categoryId: product.categoryId,
            brandId: product.brandId,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            released: date.format(item.released),
        }
        return product;
    }
    catch (error) {
        return null;
    }
}


exports.insert = async (product) => {
    try {
        await productService.insert(product);
    } catch (error) {
        return null;
    }
}

exports.update = async (id, product) => {
    try {
        await productService.update(id, product);
    } catch (error) {
        return null;
    }
}

exports.delete = async (id) => {
    try {
        await productService.delete(id);
    } catch (error) {
        return null;
    }
}