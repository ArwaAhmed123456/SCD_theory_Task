const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Gracefully close server on process exit
process.on('SIGTERM', () => {
    server.close(() => {
        console.log("🔻 Server shut down.");
        process.exit(0);
    });
});

module.exports = { app, server };
