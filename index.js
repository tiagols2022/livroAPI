const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 9000;

app.get('/', (req, res)=>{
    res.send('Olá Mundo!');
});

app.listen(port, ()=>{
    console.log(`O servidor está executando na porta ${port}`);
});