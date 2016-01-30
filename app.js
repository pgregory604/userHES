var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/userHES');

var User = require('./models/userModel');

var app = express();

var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

userRouter = require('./Routes/userRoutes')(User);


app.use('/api/Users', userRouter);



app.get('/', function(req, res){
	res.send('welcome to the userAPI')
});

app.listen(port, function() {
	console.log('Running on PORT: ' + port);
});

