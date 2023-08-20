import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
    dateStrings: true
})

db.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) throw error
    console.log("DB Connected")
});

export {db}