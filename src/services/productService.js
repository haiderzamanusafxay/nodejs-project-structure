const productRepository = require('../dataAccess/productRepository');

exports.getAllProducts = async () => {
    return await productRepository.fetchAll();
};
