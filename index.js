//import readFile function from 'fs' module to read our html
const { readFile } = require("fs")
// import express by requiring it and storing it in express
const express = require('express')

// Holding the express function into app variable
const app = express()

// When a user navigates to a URL in the browser and it's called a get request
// Set up an endpoint with the first endpoint being the '/' for the root url (you can create multiple pages)
// The second argument of the get is the call back function that handles the event in this case the event is 'request'
// and we don't need to parse any data from the request like headers to authenticate the user
app.get('/', (request, response) => {

    // use the readFile() from fs to read the HTML file and send back the file if sucessful
    // use utf8 encoding because that's what html is encoded in
    readFile('./home.html', 'utf8', (err,html) => {

        // If there is an error send a response back to the client  saying there is an error with the server
        // 500 -> internal server error
        if(err) {
            response.status(500).send('sorry, out of order')
        }
        // Send response back to the client
        // You can send objects back with this as well
        response.send(html)
    })
})

// Tell our express app to start listening to incoming requests
// We do that by defining a port which comes from a node environment variable.
// use port 3000 unless there exists a preconfigured port (Heroku,AWS)
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))