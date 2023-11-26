import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if(newTask.trim()!==''){
      const newTaskObject = {
        id : Date.now(),
        text : newTask,
        completed : false
      };
      setTasks([...tasks, newTaskObject])
      setNewTask('')
    }
  }
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p>
          Todo App
        </p>
        <input type='text' placeholder='Add a new task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addTask}>Add</button>

        </div>
        <ul>
          {tasks.map((task) =>(
            <li key={task.id}>
              <input type='checkbox' checked={task.completed} onChange={() => toggleTask(task.id)} />
              <span style={{textDecoration:task.completed ?'line-through' : 'none'}}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
