const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.get('/', (request, response) => {
    response.json({ message: "Hello WOrld!" });
});

app.listen(3001, () => {
    console.log(`sever is running @ http://localhost:3001`);
});

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connect to MongoDB');
})
    .catch((error) => {
    console.log ('Error Connecting to MongoDB')
})