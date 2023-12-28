// Create web server
// 1. npm init
// 2. npm install express
// 3. npm install body-parser
// 4. npm install nodemon
// 5. npm install cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Add headers
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// GET
app.get('/comments', (req, res) => {
    res.send('GET request to the homepage');
});

// POST
app.post('/comments', (req, res) => {
    res.send('POST request to the homepage');
});

// PUT
app.put('/comments', (req, res) => {
    res.send('PUT request to the homepage');
});

// DELETE
app.delete('/comments', (req, res) => {
    res.send('DELETE request to the homepage');
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});