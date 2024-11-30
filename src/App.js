import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAdd() {
    setTasks([...tasks, input]);
    setInput('');
  }

  function handleDelete(id) {
    const updateTasks = tasks.filter((task, index) => index !== id);
    setTasks(updateTasks);
  }

  return (
    <div className='app'>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
