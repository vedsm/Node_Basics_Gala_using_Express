var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 8080;

var router = express.Router();

var databaseFile = "./database.json";
/*
{
	"userName":{
		"password":"supersecurepassword",
		"about":"i am sexy and I know it";
		"images":[{
			"imagePath":image path1",
			"caption" : "Awesome image",
			"comments":[{
				"name":"ved",
				"timestamp":14444437655,
				"comment":"awesome photo bro!"
			}]
		}]
	}
}
*/

require('./app/routes/userRoute.js')(router,databaseFile);

app.use('/api', router);

app.listen(port);
console.log("code is running");