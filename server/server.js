import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

//db connection
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello ')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// 404 routing error handler
app.use(notFound)

// custom error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`)
})
