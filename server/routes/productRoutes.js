import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
} from '../controller/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
//@desc       Fetch All products
//@route      GET /api/products
//@access     Public
router.route('/').get(getProducts)

//@desc       Fetch a single products
//@route      GET /api/products/:id
//@access     Public
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router
