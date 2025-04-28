const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {connectDB} = require('./config.js');

const app = express();


app.use(cors({
    origin: '*',
    methods: '*'
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('this is the hopehub api');
});



const PORT = 8080;
app.listen(PORT, () => {
    connectDB();
    console.log("Server is running at http://localhost:8080/");
});