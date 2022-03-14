import './App.scss';
import { useState } from 'react';
import Input from './Components/Input';
import ToDo from './Components/ToDo';

function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (inputName) => {
    const newTask = {
      name: inputName,
      id: Date.now()
    }
    setTodos([...todos, newTask]);
  }

  const removeTask = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  }


  return (
    <div className='container app-container mt-5'>
      <h1 >Todo App</h1>
      <p >New Todo</p>
      <Input
        addTask={addTask}
      />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            removeTask={removeTask}
          />
        )
      })}
      <p>There is {todos.length} pending tasks</p>
    </div>
  );
}

export default App;
