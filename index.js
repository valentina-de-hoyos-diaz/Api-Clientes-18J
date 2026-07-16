require('dotenv').config()
const path = require('path')

const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const enrutamiento = require('./router/enrutamiento.router')
app.use('/api/v1', enrutamiento)

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'./public')));

app.get('/login', (req, res) => {
  res.render('pages/login');
});

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.listen(process.env.PORT); 