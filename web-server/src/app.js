const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { isBuffer } = require('util')
const { report } = require('process')

//console.log(path.join(__dirname, '../public')) //example to check the path

const app = express() // storing express in our variable 
const port = process.env.PORT || 3000  //port for heroku and 3000 for localhost



const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')  //setup handlebars.
app.set('views', path.join(__dirname, '../templates/views')); // adding views folder to express
hbs.registerPartials(partialsPath)   // the path for hbs use the partials


//setup static directory to serve
app.use(express.static(publicDirectoryPath))

//rendering the handlebar view
app.get('', (req, res) => {
    res.render('index', {         //first argument is the view name and the second is the object with the values that we want
        title: 'Weather app',
        name: 'Ratz Pereira'
    })
})


app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About page',
        name: 'Ratz Pereira'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Ratz Pereira',
        email: 'ratzpereira@gmail.com',
        phone: '913439919'
    })
})


app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            Error: 'Please insert one Address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location} = {}) => {
        if(error){
            return res.send({ error })  //if we had an error the function stops here because we have "return"
        }
     
           forecast(latitude, longitude, (error, forecastData) => {
              if(error){
                 return res.send({ error })  //if we had an error the function stops here because we have "return"
              }
              res.send({
                  location,
                  forecast: forecastData,
                  address: req.query.address
            })
        })
     })
})

app.get('/products', (req, res) => {
    
    if(!req.query.search){
        return res.send({
            Error: 'You must provide a search term'
        })    
    }
    
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) =>{
    res.render('404', {
        name: 'Ratz Pereira',
        title: '404',
        message:'Help article not found'
    })
})


app.get('*', (req, res) => {   //   * is wildcard that express provides 
    res.render('404', {
        name: 'Ratz Pereira',
        title: '404',
        message: 'Error 404 not found'
    })
})



//starting the server
app.listen(port, () => {
    console.log('Server up and running on port ' + port)
})