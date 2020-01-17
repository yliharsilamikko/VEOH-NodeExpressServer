const express = require('express');
const PORT = process.env.PORT || 8080;

let app = express();

app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next();
});

app.use('/TEST', (req, res, next) => {
    console.log('USE /TEST');
    next();
});

app.get('/TEST/', (req, res, next) => {
    console.log('GET /TEST');
    next();
});

app.post('/TEST', (req, res, next) => {
    console.log('POST /TEST');
    next();
});


app.get('/', (req, res, next) => {
    res.send(`Hello world 3`);
});

app.use((req, res, next) => {
    res.status(404);
    res.send(`
        page not found
    `);
});

//Shutdown server CTRL + C in terminal
app.listen(PORT);