var express = require('express'); 			// import express
var app = express();						// express is a function call which create an
var http = require('http').Server(app);

http.listen(3000, function(){				// begins a server which listens on port 3000
  console.log('listening on *:3000');
});

app.use(express.static('public')); 	// serve the static files found in the 'public' folder

// javascript is eventbased. Examples of events of the io socket is 
// when a connection is established to a client, a message is received / sent, disconnection.


