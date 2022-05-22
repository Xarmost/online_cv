// import of our modules

const express = require('express');

// we creat an instance of our express app

var app = express();

// db is our sql server object stocked in a constant because we will not go for another sql server. 

// that function tell to our server that the root package is www. 
// it's usefull for privatise all of our other server files.

app.use(express.static('www'));

// there is the GET root request manager, it's sending user to www/index.html

app.get('/', (req, res) => {
  res.send('root');
});

//there will be the POST request Manager Maybe use an extern file to clear our main server file
/*
*************************************************
*************************************************
*/

// there is our object server that use a callback function listener for any request for our server
// parameters are the port we listen to, the hostname, and the callback function with no parameter.
var server = app.listen(3000, 'localhost', function () {
    // we initialise host and port with real hostname and port.
    var host = server.address().address;
    var port = server.address().port;
    // we write in the consol if the server is running
    console.log('Express app listening at http://%s:%s', host, port)
});
