const express = require('express');
const router = express.Router();
const {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

router.post('/todo', createTodo);
router.get('/todos', getTodos);
router.get('/todo/:id', getTodoById);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

module.exports = router;
