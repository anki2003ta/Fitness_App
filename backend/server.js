const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const API_URL = "https://exercisedb.p.rapidapi.com/exercises";
const API_KEY = process.env.RAPID_API_KEY;

// Fetch all exercises by body part
app.get('/api/exercises', async (req, res) => {
  const bodyPart = req.query.bodyPart || '';
  try {
    const response = await axios.get(`${API_URL}/bodyPart/${bodyPart}`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch exercise details by ID
app.get('/api/exercise/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${API_URL}/exercise/${id}`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));