const express = require('express');
const path = require('path');
const app = express();
const port = 8070;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname }, (err) => {
        if (err) {
            res.status(404).sendFile('404.html', { root: __dirname });
        }
    });
});

app.get('*', (req, res) => {
    const requestedFile = path.join(__dirname, req.path);
    res.sendFile(requestedFile, (err) => {
        if (err) {
            res.status(404).sendFile('404.html', { root: __dirname });
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
