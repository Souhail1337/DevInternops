const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 4000;

mongoose.connect('localhost:27017',{ 
    useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("EEEEEE CONNECTED TO MONGODB");
    })
    .catch((error) =>{
        console.log('Failed to connect to mongo: ', error);
    });
const exSchema = new mongoose.Schema({
    message: String,
    nuum: Number,
});

const exModel = mongoose.model('Example: ',exSchema);

app.get('/', (req, res) => {
    res.send('Hello Test From backend !');
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