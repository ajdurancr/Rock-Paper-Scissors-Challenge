var championshipController = require('./controllers/championshipController.js');
bodyParser = require('body-parser');

//-------------------------------------------------------------------------
var express       = require('express'),
      app              = express(),
      server          = require('http').createServer(app),
      port              = 8081;
//-------------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//location of the web application directory
app.use('/', express.static(__dirname + '/../WebApp'));

//manage requests before conitnue
app.use(function (req, res, next) {
	//validate credentials for example
  	next();
});



//Start: Routing

//Stores the first and second place of a tournament
app.post('/api/championship/result', championshipController.newRecord);

//Retrieves the top players of all championships.
app.get('/api/championship/top/:count', championshipController.getTop);

//Stores the first and second place of a tournament
app.post('/api/championship/new', championshipController.newChampionship);

//End: Routing

//just for the developer to know what port it is listening on
server.listen(port, function(){
  console.log('Server listening on port: ' + port);
});