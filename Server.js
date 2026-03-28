const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.get('/', (req, res) => {
    res.send('Hello from express')
})

app.get('/about', (req, res) => {
    res.send('This page is about page')
})

app.get('/contact', (req, res) => {
    res.send('This page is contact page')
})

app.get('/products', (req, res) => {
    res.json([
        {id: 1, name: 'Laptop', price: 1299},
        {id: 2, name: 'mouse', price: 499}
    ])
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)

    const products = [
        {id: 1, name: 'Laptop', price: 1299},
        {id: 2, name: 'mouse', price: 499}
    ]

    const requestedproduct = products.find((product) => product.id === id)
    res.json(requestedproduct)
})
 
app.get('/message', (req, res) => {
    res.json({message: "Hello this from express backend 😍"})
})

app.listen(3000, () => {
    console.log('The Server is running');
})