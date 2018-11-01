var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('AAG',['login','painting','photography']);

let response = {
    sts : 200,
    msg : null,
    data:[]
};
var sendErr = (err,res)=>{
    response.status = 501;
    response.message = typeof err == "object"  ? err.message : err;
    res.status(501).json(response);
}

//  login
router.get('/login',(req, res, next) => {
    db.login.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})
router.post('/login',(req, res, next) => {
var newObj = req.body;

db.login.insert(newObj, function(err, doc) {
   if (err) throw err;
   console.log("1 document inserted");
   res.json(doc);
 });
});
// login end

//  login
router.get('/painting',(req, res, next) => {
    db.painting.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})
router.post('/painting',(req, res, next) => {
    var newObj = req.body;
    db.painting.insert(newObj, function(err, doc) {
    if (err) throw err;
    console.log("1 document inserted");
    res.json(doc);
    });
});
// login end

module.exports = router;