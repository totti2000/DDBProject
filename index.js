require('dotenv').config();
const bodyParser = require("body-parser")

const express = require('express');
const app = express();
const cors = require('cors');
  
//connect to Database
const connectDB = require('./db/connect');

// routers
var studentRouter = require('./routes/studentRoute');
var coursetRouter = require('./routes/courseRoute');
var profRouter = require('./routes/profRoute');
var agrrRouter = require('./routes/arrRoute');



app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));




// routes
app.use('/students', studentRouter);
app.use('/courses', coursetRouter);
app.use('/profs', profRouter);
app.use('/agrr', agrrRouter);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();