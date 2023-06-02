const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello Test');
});


app.listen(port,() =>
{
    console.log('Listening on Port 3000');
});