import express from 'express';

const app = express();

const users = [
    'Cristian',
    'Dayton',
    'Rogerinho',
    'Diego'
];

app.get('/users', (req, res) => {

    res.json(users);

    console.log('Listagem de usuários');
});

app.get('/users/:id', (req, res) => {

    const id = Number(req.params.id);

    const user = users[id];

    console.log('Works')

    return res.json(user);
});

app.post ('/users', (req, res) => {

    return res.json(users);

});

console.log('Server Online');
app.listen(3333);