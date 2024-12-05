const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// Import Routes

const aggregationRoutes = require('./routes/aggregation');
// Middleware

app.use(express.json()); // Parse incoming JSON data
// Use Routes

app.use('/api/aggregation', aggregationRoutes);
// Start Server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});