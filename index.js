
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const urlPages = require("./router/urls")
const apiPost = require('./router/apiGet')
const app = express()

app.use(cors({
    origin:'http://localhost:2000'
}))


app.set('view engine', 'ejs')

app.use(express.static('./public/'))

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', urlPages)
app.use('/get-Data', apiPost)



app.listen(2000, (err) =>{
    if(err) throw new Error("Aveam o eroare la pornire server")
    console.log("http://localhost:2000")
})
