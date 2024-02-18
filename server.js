// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Fake user data (for demonstration purposes)
const users = [
    { username: 'leon', password: 'test' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Ungültige Anmeldedaten.' });
    }
});

// Edit page endpoint
app.get('/edit', (req, res) => {
    // Render the edit page
    res.send('Hier kannst du die Webseite bearbeiten.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
