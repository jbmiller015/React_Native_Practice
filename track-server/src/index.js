require('dotenv').config();
const express = require('express');

const db_string = process.env.CLOUD_STRING;

const app = express();

const mongoUri = db_string;

console.log(db_string);

app.get('/', (req, res) =>{
   res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})