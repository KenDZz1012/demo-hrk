const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})
app.get('/1', (req, res) => {
    res.send("<h1>Hello1</h1>")
})
app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`);
})