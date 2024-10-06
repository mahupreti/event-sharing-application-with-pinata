const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.static('public'));
app.use(express.json());


const eventRoutes = require('./routes/events');
app.use('/api', eventRoutes); 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
