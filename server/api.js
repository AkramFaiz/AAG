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

//  user
router.get('/login',(req, res, next) => {
    db.user.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})
router.post('/login',(req, res, next) => {
var newObj = req.body;

db.user.insert(newObj, function(err, doc) {
   if (err) throw err;
   console.log("1 document inserted");
   res.json(doc);
 });
});
// user end
module.exports = router;