const Product = require('../models/productModel');

exports.fetchAll = async () => {
    return await Product.find({});
};
