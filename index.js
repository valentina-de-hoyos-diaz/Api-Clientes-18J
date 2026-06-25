require('dotenv').config()

const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const enrutamiento = require('./router/enrutamiento.router')
app.use('/api/v1', enrutamiento)

app.set('view engine', 'ejs')




app.listen(process.env.PORT);