const express = require('express');
const mongoose = require('mongoose');
const {PORT} = require('./config.js');
const applicationRoute = require('./routes/applicationRoutes.js');
const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json())

app.use('/applications', applicationRoute);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.mongoDBURL).then(() => {
    console.log('App connected to DB');
    app.listen(process.env.PORT || PORT, () => {
        console.log(`App is listening on PORT: ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})