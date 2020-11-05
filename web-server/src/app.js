const express = require('express')

const app = express() // storing express in our variable 

app.get('', (req, res) => {
    res.send('Hello Express')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})


//starting the server
app.listen(3000, () => {
    console.log('Server up and running')
})