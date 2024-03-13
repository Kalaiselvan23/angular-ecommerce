//express server for e-commerce web applications
const express = require('express');
const app = express();
const dotenv=require("dotenv").config();
const routes=require('./routes/productRoute');

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // Serve static files

// Routes
app.use('/products', routes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
