const path = require('path')
const express = require('express')

//console.log(path.join(__dirname, '../public')) //example to check the path

const app = express() // storing express in our variable 
const publicDirectoryPath = path.join(__dirname, '../public')


app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
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