const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', '../src/views');


app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }

});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));