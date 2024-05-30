const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send('Hello, this is the server side!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
