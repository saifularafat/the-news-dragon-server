const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

const news = require('./data/news.json')

app.use(cors());

// !category api create
app.get('/categories', (req,res) => {
    res.send(categories);
})

// ? category api create
app.get('/news', (req,res) => {
    res.send(news)
})
//~ dynamic and specific news id create
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectNews = news.find(n => n._id === id);
    res.send(selectNews);
})

//^ machining data

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if(id === 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews)
    }
})

app.get('/', (req, res) => {
    res.send('The Dragon news Server Port.')
})

app.listen(port, () => {
    console.log(`This is dragon server Dynamic listen : ${port}`)
})