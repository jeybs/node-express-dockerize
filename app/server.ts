import express, {Express, Request, Response} from 'express'
import http from 'http'
import dotenv from 'dotenv'
import { userRoutes } from './routes/userRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response ) => {
    console.log("Runnig")
    res.send("Running!!")
})

app.use('/user', userRoutes)

http.createServer(app).listen(port, () => {
    console.log(`Running at port ${port}`)
})