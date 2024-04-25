const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

//=====================================================

const tarefaController = require('./Controller/tarefaController');
app.use('/tarefas', tarefaController);

//=====================================================
//mongodb+srv://fsricco:<password>@ac1.41y9egz.mongodb.net/?retryWrites=true&w=majority&appName=AC1

mongoose.connect('mongodb+srv://fsricco:F9wp7cytjr@ac1.41y9egz.mongodb.net/?retryWrites=true&w=majority&appName=AC1')
    .then(() => {
        app.listen(27017, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor MongoDB iniciado na porta 27017');
        })
    })
    .catch((err) => {
        console.log(err);
    });

//======================================================
app.listen(3000, () => {
    console.log('Server NodeJS is running on Port 3000');
});


//teste de commit