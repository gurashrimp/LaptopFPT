const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const produtctSchema = new Schema( {
    id : {type : ObjectId},
    categoryId: { type: Schema.Types.ObjectId, ref: 'category' },
    brandId: { type: Schema.Types.ObjectId, ref: 'brand' },
    name: { type: String },
    price: { type: String },
    quantity: { type: String },
    description: { type: String },
    released: { type: Date },
}); 
module.exports = mongoose.model('product', produtctSchema);