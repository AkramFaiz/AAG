var express = require('express');
var _bp = require('body-parser');
var _path = require('path');
var _http = require('http');
var app = express();
var cors = require('cors');
var api = require('./server/api');

console.log(api);

app.use(_bp.json());
app.use(_bp.urlencoded({extended: false}));
app.use(express.static(_path.join(__dirname,'dist')));

app.use('/',api);
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept, Authorization, sid");
	res.header("Access-Control-Allow-Methods"," POST, GET, OPTIONS, DELETE, PUT");
	next();
});
app.use('/file',api);
app.use(cors());

app.get('*'),(req,res) => {
    res.sendFile(_path.join(__dirname,'dist/index.html'));
}

var port = process.env.PORT || '3000';
app.set('port',port);

var server = _http.createServer(app);
server.listen(port, () => console.log("Server",port,"is running !!!" ));
