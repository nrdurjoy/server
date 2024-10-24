require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/json', (req, res) => {
    res.json({
        msg : "I'm a JSON"
    })
})

app.get('/books', (req, res) => {
    res.json({
        books: [
            {title: "Book 1", author: "Author 1"},
            {title: "Book 2", author: "Author 2"},
            {title: "Book 3", author: "Author 3"},
            ]
    })
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`)
})