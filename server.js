const express = require('express');
const connectDB = require('./config/db');
const fileRoutes = require('./routes/fileRoutes');
const authRoutes = require('./routes/authRoutes'); // Add this line

require('dotenv').config();

const app = express();

// Connect Database
connectDB()
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/files', fileRoutes);
app.use('/api/auth', authRoutes); // Add this line

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
