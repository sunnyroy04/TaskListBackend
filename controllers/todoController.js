const Todo = require('../models/todo');
exports.createTodo = async (req, res) => {
    try {
        const {title, description } = req.body;
        const newTodo = new Todo({ title, description });
        await newTodo.save();
        res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: 'Error creating todo', error: error.message });
    }
}

// get all to
exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
}

// single todo

exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todo', error: error.message });
    }   
};


exports.updateTodo = async (req, res) => {
    try {
        const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};