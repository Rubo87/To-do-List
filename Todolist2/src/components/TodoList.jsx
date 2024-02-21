import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));

  const [tasks, setTasks] = useState(storedTasks || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [text, setText] = useState('');

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setText('');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addTask(text);
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    return alert('Estas seguro Rubén?');
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function editTask(id, newText) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list">
      <div className="header">
        <input
          placeholder="Title..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
      <div>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;