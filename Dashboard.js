dashboard-container {
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to right, #e0f7fa, #f1f8e9);
  transition: background 0.4s ease;
}

.dark {
  background: linear-gradient(to right, #2c3e50, #34495e);
  color: white;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-count {
  color: #666;
  margin-bottom: 15px;
  text-align: center;
}

.task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  width: 100%;
}

.task-input {
  flex-grow: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #bbb;
  border-radius: 5px;
}

.add-btn {
  padding: 10px 15px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
}

.add-btn:hover {
  background-color: #27ae60;
}

.task-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.task-item {
  background-color: white;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.3s ease-in;
}

.task-item:hover {
  background-color: #f0f0f0;
}

.delete-btn {
  font-size: 0.8rem;
  padding: 4px 10px;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in;
}

.delete-btn:hover {
  background-color: #fef0f0;
  border-color: #c0392b;
  color: #c0392b;
}

.mode-toggle {
  padding: 5px 10px;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.mode-toggle:hover {
  background-color: #2980b9;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logout-container {
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 999;
}

.logout-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #d32f2f;
}
