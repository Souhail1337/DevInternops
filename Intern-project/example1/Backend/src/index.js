const express = require('express');
const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.send('Hello Test From backend !');
});



app.get('/Test', (req, res) =>
{
    res.send('Redirected to test!');
});

app.listen(port,() =>
{
    console.log('Listening on Port 4000');
});