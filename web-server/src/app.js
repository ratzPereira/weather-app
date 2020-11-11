const path = require('path')
const express = require('express')

//console.log(path.join(__dirname, '../public')) //example to check the path

const app = express() // storing express in our variable 
const publicDirectoryPath = path.join(__dirname, '../public')


app.set('view engine', 'hbs')  //setup handlebars.
app.set('views', path.join(__dirname, '../views')); // adding views folder to
app.use(express.static(publicDirectoryPath))

//rendering the handlebar view
app.get('', (req, res) => {
    res.render('index')
})


app.get('/weather', (req, res) => {
    res.send('Weather page')
})


//starting the server
app.listen(3000, () => {
    console.log('Server up and running')
})