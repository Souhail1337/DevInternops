const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./models/user");
var passport = require("passport");
var bodyParser = require('body-parser');
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
const port = 4000;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


mongoose.connect('mongodb+srv://souhail:souhail@cluster0.0p01gnu.mongodb.net/',options)
    .then(() => {
        console.log("CONNECTED TO MONGODB");
    })
    .catch((error) =>{
        console.log('Failed hhhh to connect to mongo: ', error);
    });
    app.set('view engine','ejs');
    app.engine('html',require('ejs').renderFile);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    const exSchema = new mongoose.Schema({
    message: String,
    nuum: Number,
});

const exModel = mongoose.model('Example: ',exSchema);

app.use(require("express-session")({
    secret: "test a lot of tests",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})


app.get('/', (req, res) => {
    res.send('Hello Test From backend !');
});

app.get("/register", (req,res) => res.render("register"));
app.post("/register", (req, res) => {
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}) ,
    req.body.password, function(err, user){
        if (err)
        {
            console.log("testt " + err);
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/");
        });
    });
});
app.get("/login", function(req,res){
    res.render("login");
});

app.post("/login", passport.authenticate("local",{
       successRedirect:"/success",
       failureRedirect:"/register" }), 
       function(req,res){      


});
app.get('/success', (req, res) =>
{
    res.send('Successfully registred and logged in !');
});


app.get('/Test', (req, res) =>
{
    res.send('Redirected to test!');
});


app.get('/examples', async (req,res)=>{
    try{
        const examples = await exModel.find();
        res.json(examples);
    } catch(error){
        console.error('Error retrieving exapmle ',error);
        res.status(500).json({error: 'an error occured'});
    }
});
app.listen(port,() =>
{
    console.log('Listening on Port 4000');
});