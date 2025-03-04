import express from 'express'
import cors from 'cors'
import server from 'serverless-http'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Backend is running on Vercel!')
})

// Export a function properly for Vercel
export default server
