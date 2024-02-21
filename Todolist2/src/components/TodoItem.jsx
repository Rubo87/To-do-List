import React, { useState, useRef, useEffect } from 'react';
function TodoItem({ task, deleteTask, toggleCompleted, editTask }) {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef(null);

    useEffect(() => {
        if (editing) {
          inputRef.current.focus();
        }
      }, [editing]);

    function handleChange() {
    toggleCompleted(task.id);
    }
    function handleEdit() {
        setEditing(true);
    }
    function handleSave() {
        editTask(task.id, editedText);
        setEditing(false);
    }

    function handleInputChange(e) {
        setEditedText(e.target.value);
    }
    
    return (
        <ul>
        <li className={task.completed ? 'todo-item completed' : 'todo-item'}>
        <div>
            <input
            className='checkbox'
            type="checkbox"
            checked={task.completed}
            onChange={handleChange}
        />    
        </div>
        {editing ? (
            <input
            className= 'todo-item-editing'
            type="text"
            value={editedText}
            onChange={handleInputChange}
            ref={inputRef}
            />
        ) : (
            <p>{task.text}</p>
        )}

        {editing ? (
            <button className='save' onClick={handleSave}>Save</button>
        ) : (
            <button className='edit' onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></button>
        )}
            <button className='delete' onClick={() => deleteTask(task.id)}><i className="fa-solid fa-trash-can"></i></button>
        </li>
        </ul>
  );
}

export default TodoItem;