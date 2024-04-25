const express = require('express');
const Tarefa = require('../Models/tarefa');
const router = express.Router();

//=======================================================================
//Criação de tarefas
router.post('/', async (req, res) => {
    const { titulo, descricao, concluida } = req.body;

    const tarefa = {
        titulo, descricao, concluida
    }
    try {
        await Tarefa.create(tarefa);
        res.status(201).json(tarefa);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Alterar o status da tarefa
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, descricao, concluida } = req.body;

        const tar = {
            titulo, descricao, concluida
        }

        const updateTar = await Tarefa.updateOne({ _id: id }, tar);

        if (updateTar.matchedCount === 0) {
            res.status(422).json({ mensagem: "Tarefa não encontrado" });
            return
        }
        res.status(200).json(tar);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Listagem de todas as tarefas
router.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefa.find();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Apagar tarefa
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const tarefa = await Tarefa.findOne({ _id: id });

        if (!tarefa) {
            res.status(422).json({ mensagem: "Tarefa não encontrada" });
            return;
        }

        await Tarefa.deleteOne({ _id: id });
        
        res.status(200).json({ mensagem: "Tarefa excluída com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//=======================================================================

module.exports = router;

