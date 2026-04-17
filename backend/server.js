const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store for quotes (swap with a database in production)
const quotes = [];

// POST /api/quote — receive a quote request
app.post('/api/quote', (req, res) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !phone || !email || !service) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const quote = {
    id: quotes.length + 1,
    name,
    phone,
    email,
    service,
    message: message || '',
    createdAt: new Date().toISOString(),
  };

  quotes.push(quote);
  console.log('New quote received:', quote);

  res.status(201).json({ success: true, message: 'Quote request received!', quote });
});

// GET /api/quotes — list all quotes (for admin use)
app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
