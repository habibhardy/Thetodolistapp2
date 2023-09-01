
import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTask, seteditTask] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
             <TaskForm input={input} setInput={setInput} tasks={tasks} setTasks={setTasks} editTask={editTask} seteditTask={seteditTask}   />
             <Tasks  tasks={tasks} setTasks={setTasks}  seteditTask={seteditTask}  />
      </header>
    </div>
  );
}

export default App;
