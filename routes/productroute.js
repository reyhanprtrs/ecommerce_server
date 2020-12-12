const product = require('express').Router()
const ProductController = require('../controllers/productcontroller')
const { authentication, authorization } = require('../middlewares')

product.get('/', ProductController.getProduct)

product.use(authentication)
product.post('/', ProductController.createProduct)

product.use('/:id', authorization)
product.get('/:id', ProductController.getProductById)
product.put('/:id', ProductController.updateProduct)
product.delete('/:id', ProductController.deleteProduct)

module.exports = product