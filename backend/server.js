const express = require('express');
const cors = require('cors');
const promBundle = require('express-prom-bundle');
require('dotenv').config();

const app = express();

// Set up Prometheus metrics middleware
const metricsMiddleware = promBundle({
    includeMethod: true,
    includePath: true,
    includeStatusCode: true,
    includeUp: true,
    promClient: {
        collectDefaultMetrics: {}
    }
});

// Middleware
app.use(metricsMiddleware);
app.use(cors());
app.use(express.json());

// Basic Route for the DevOps Pipeline to test
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'success', 
        message: 'Student Admission System Backend is running!' 
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});