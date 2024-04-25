const mongoose = require('mongoose');

const Tarefa = mongoose.model('Tareda', {
    titulo: String,
    descricao: String,
    concluida: Boolean
});

module.exports = Tarefa;