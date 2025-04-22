// app.js

const express = require('express');
const app = express();

// Serve static files from 'public' folder
app.use(express.static('public'));

// Route to ensure server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
