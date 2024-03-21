const express = require('express');
const bodyParser = require('body-parser');
const employeeRouter = require('./routes/employeeRoute');
const assetsRouter = require('./routes/assetsRoute');
const assetCategoryRouter = require('./routes/assetCategoryRoute');
// const db = require('./models/index');
const dotenv = require('dotenv');
const cors = require('cors');
// Create an express application
const app = express();
// Middleware to parse JSON bodies and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
// Load environment variables from the .env file
dotenv.config();

// Connect to the database


// Define a route to handle requests to the root URL ("/")
app.get('/', (req, res) => {
    res.send('Welcome to the Asset Management System!');
});

// Use employee routes
app.use('/employees', employeeRouter);

// Use asset routes
app.use('/assets', assetsRouter);

// Use asset category routes
app.use('/asset-categories', assetCategoryRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
