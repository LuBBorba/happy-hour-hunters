const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dealsRoutes = require('./routes/deals');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send('Hello, this is the server side!');
});

// Use the deals routes
app.use('/', dealsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
