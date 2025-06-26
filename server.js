const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
