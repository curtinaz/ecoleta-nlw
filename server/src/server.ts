import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json ({ message: 'Hello World'})
})

console.log('Server Online');
app.listen(3333);