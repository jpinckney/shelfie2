require('dotenv').config()

const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()

app.use(express.json())

// ANCHOR DataBase Connection
massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
    console.log('Database Connected')
    // ANCHOR Server Connection 
    app.listen(SERVER_PORT, () => {
      console.log(`server running on ${SERVER_PORT}`)
    })
  })


app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.create_product)
app.delete('/api/edit/:id', ctrl.delete_product)
app.put('/api/edits/:id', ctrl.update_product)