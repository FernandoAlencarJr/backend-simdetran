require('./bin/server')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('./src/config/cors')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors)