import express, {Express, Request, Response} from 'express'
import http from 'http'
import dotenv from 'dotenv'


dotenv.config()

const app = express()
const port = process.env.PORT
console.log(port)

app.get('/', (req: Request, res: Response ) => {
    console.log("Runnig")
    res.send("Running")
})

http.createServer(app).listen(port, () => {
    console.log(`Running at port ${port}`)
})