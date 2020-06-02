import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Cristian',
    'Dayton',
    'Rogerinho',
    'Diego'
];

app.get('/users', (req, res) => {

    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(users => users.includes(search)) : users;

    res.json(filteredUsers);

    console.log('Listagem de usuários');
});

app.get('/users/:id', (req, res) => {

    const id = Number(req.params.id);

    const user = users[id];

    console.log('Works')

    return res.json(user);
});

app.post ('/users', (req, res) => {

    const data = req.body;

    const user = {
        "name": data.name,
        "email": data.email
    }

    return res.json(user);

});

console.log('Server Online');
app.listen(3333);