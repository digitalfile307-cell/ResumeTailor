const express = require('express');
const app = express();

// This will point to our production backend
const BACKEND_URL = "https://resume-tailor-backend.onrender.com";

app.use(express.static('public'));

app.get('/get-backend-url', (req, res) => {
  res.json({ backendUrl: BACKEND_URL });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));
