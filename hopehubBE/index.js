const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {connectDB} = require('./config.js');


const {UserRouter} = require('./routes/userRoute.js');
const {VerificationRouter} = require('./routes/verificationRoute.js');
const {UpdateRouter} = require('./routes/updateRoute.js');
const {ShelterRouter} = require('./routes/shelterRoute.js');
const {RequestRouter} = require('./routes/requestRoute.js');
const {CommentRouter} = require('./routes/commentRoute.js');



const app = express();


app.use(cors({
    origin: '*',
    methods: '*'
}));


app.use(express.json());



app.use('/users', UserRouter);
app.use('/verification', VerificationRouter);
app.use('/update', UpdateRouter);
app.use('/shelters', ShelterRouter);
app.use('/requests', RequestRouter);
app.use('/comments', CommentRouter);



app.get('/', (req, res) => {
    res.send('this is the hopehub api');
});



const PORT = 8080;
app.listen(PORT, () => {
    connectDB();
    console.log("Server is running at http://localhost:8080/");
});