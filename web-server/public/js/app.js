console.log('Client side JS file is loaded!')



const weatherForm = document.querySelector('form')  // to get the form
const search = document.querySelector('input')   // to get the input
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // to prevent the page to refresh when we click submit in our form

    const location = search.value  // store the value passed in the form in the location variable 

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
            if(data.error) {
                //console.log(data.error)

                messageOne.textContent = data.error //if error
            } else {
                //console.log(data)
                //console.log(data.location)
                //console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})