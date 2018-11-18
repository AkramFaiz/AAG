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

//  painting
router.get('/painting/:id',(req, res, next) => {
    var curId = req.params.id;
    db.painting.find(curId,function (err, docs) {
        console.log('curId:', docs);
        res.json(docs);
    });
})

router.get('/painting',(req, res, next) => {
    db.painting.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})

router.put('/painting/:id',function(req,res){
    var curId = req.params.id;
    db.painting.findAndModify({query: {_id: mongojs.ObjectId(curId)},update:{$set:
        {   path : req.body.path,
            cost: req.body.cost,
            width: req.body.width,
            liked: req.body.liked,
            likeCount: req.body.likeCount,
            addedToCart: req.body.addedToCart,
            title: req.body.title,
            desc: req.body.desc,
            dimentions: req.body.dimentions,
        }},new: true}, function(err,doc){
        console.log(doc);
		res.json(doc);
    });

});

// admin
router.post('/painting',(req, res, next) => {
    var newObj = req.body;
    db.painting.insert(newObj, function(err, doc) {
    if (err) throw err;
    console.log("1 document inserted");
    res.json(doc);
    });
});

// painting end

module.exports = router;