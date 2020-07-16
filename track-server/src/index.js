require('dotenv').config();
const express = require('express');
const db_string = process.env.CLOUD_STRING;
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = db_string;
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
});

mongoose.connection.on('error', (err) => {
    console.log('Connection error' + err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})