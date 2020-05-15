// Import global module
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();

// Set App
const app = express()

// Set Cors
app.use(cors())

// Set Body Parse
app.use(bodyParser.json())

// Set routes
const {
	adminRoutes,
	authRoutes
} = require('./routes');
app.get('/', (req, res) => res.status(200).send('Server pwa-portofolio is running...'));
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Parse application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false }))

// Set Static File
app.use(express.static('public'));

// Check database connection
const db = require('./database/db');
db.connect(err => {
	if (err) throw err;
	console.log('MySql connected...');
});

// Set PORT
const PORT = process.env.PORT || 2020;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));