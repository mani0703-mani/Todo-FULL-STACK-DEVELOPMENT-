import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({
    title: '', description: '', deadline: ''
  });

  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/tasks', task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTask({ title: '', description: '', deadline: '' });
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" placeholder="Title" value={task.title}
             onChange={(e) => setTask({ ...task, title: e.target.value })} required />

      <textarea placeholder="Description" value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>

      <input type="datetime-local" value={task.deadline}
             onChange={(e) => setTask({ ...task, deadline: e.target.value })} required />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
