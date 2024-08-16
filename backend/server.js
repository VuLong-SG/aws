const express = require('express')
const app = express()
const webRouter = require('./routers/web')
const mysqlPool = require('./database')
require('dotenv').config()


const port = process.env.PORT || 8081


mysqlPool.query('select * from users').then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error)
})

app.use(express.json())
app.get('/',webRouter)

app.listen(port, ()=>{
    console.log(`server is running ar port ${port}`)
})



