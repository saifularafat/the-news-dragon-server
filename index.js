const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors());

app.get('/categories', (req,res) => {
    res.send(categories);
})

app.get('/', (req, res) => {
    res.send('The Dragon news Server Port.')
})

app.listen(port, () => {
    console.log(`This is dragon server Dynamic listen : ${port}`)
})