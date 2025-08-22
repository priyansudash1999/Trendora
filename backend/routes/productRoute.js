import express from "express"
import { addProducts, listProducts, removeProduct, singleProduct } from "../controllers/productController.js"
import upload from "../middleware/multer.js"
import adminAuth from "../middleware/adminAuth.js"

const productRouter = express.Router()

productRouter.post('/add', adminAuth, upload.fields([{name: 'image1', maxCount: 1}, {name: 'image2', maxCount: 1}, {name: 'image3', maxCount: 1}, {name: 'image4', maxCount: 1}]), addProducts)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.post('/single', singleProduct)
productRouter.get('/list-of-products', listProducts)

export default productRouter