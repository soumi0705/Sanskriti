var router = require("express").Router();
const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:soumi07@cluster0.uap36.mongodb.net/sanskriti?retryWrites=true&w=majority"; //enter your own uri
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("sanskriti").collection("Users");

    router.get("/faceID", function(req, res) {
        res.render("face");
    });
    router.get("/", function(req, res) {
        res.render("login");
    });
    router.get("/register", function(req, res) {
        res.render("reg");
    });
    router.post("/register", function(req, res) {
        console.log(req.body);
        d = new Date();
        s = d.getTime();
        collection.insertOne({ email: req.body.email, acc: req.body.acc, tel: req.body.tel, address: req.body.address, pass: req.body.pass, time_created: s });
    });
    router.get("/payINR", function(req, res) {
        res.render("payment");
    });
    // router.get("/townships",function(req,res){
    //     res.render("townships");
    // });
    // router.get("/housing",function(req,res){
    //     res.render("housing");
    // });
    //router.get("/commercial",function(req,res){
    //    res.render("commercials");
    //});
    //router.get("/villas",function(req,res){
    //    res.render("villas");
    //});
    //router.get("/misc",function(req,res){
    //    res.render("misc");
    //});
});
module.exports = router;