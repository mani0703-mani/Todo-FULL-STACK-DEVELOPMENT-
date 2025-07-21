const { Task, User } = require('../models');

exports.createTask = async (req, res) => {
  const { title, description, deadline } = req.body;
  const userId = req.user.id;

  try {
    const task = await Task.create({
      title,
      description,
      deadline,
      UserId: userId,
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

exports.getTasks = async (req, res) => {
  const userId = req.user.id;

  try {
    const tasks = await Task.findAll({ where: { UserId: userId } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, deadline, completed } = req.body;
  const userId = req.user.id;

  try {
    const task = await Task.findOne({ where: { id, UserId: userId } });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.title = title;
    task.description = description;
    task.deadline = deadline;
    task.completed = completed;
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error updating task' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const task = await Task.findOne({ where: { id, UserId: userId } });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.destroy();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};
