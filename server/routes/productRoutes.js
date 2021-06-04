import express from 'express'
const router = express.Router()
import { getProducts, getProductById } from '../controller/productController.js'
//@desc       Fetch All products
//@route      GET /api/products
//@access     Public
router.route('/').get(getProducts)

//@desc       Fetch a single products
//@route      GET /api/products/:id
//@access     Public
router.route('/:id').get(getProductById)

export default router
