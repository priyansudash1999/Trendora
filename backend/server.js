import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";



const app = express()

const port = process.env.PORT || 3000;

connectDB()

connectCloudinary()

// middlewares
app.use(express.json())

app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
  res.send('API is working')
})

app.listen(port, () => console.log('Server is running on', port))