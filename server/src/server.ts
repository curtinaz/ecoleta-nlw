import express from 'express';

const app = express();

app.get('/users', (req, res) => {

    res.json({"message": "hello world"});

    console.log('Listagem de usuários');
})

console.log('Server Online');

app.listen(3333);