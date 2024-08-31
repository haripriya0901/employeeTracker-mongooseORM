const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const empRoutes = require('./routes/empRoutes');
const depRoutes = require('./routes/departRoutes');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/empRoutes', empRoutes);
app.use('/depRoute',depRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Start The Server
app.listen(port, () => {
    console.log(`Server Satrting on ${port}`);
});
