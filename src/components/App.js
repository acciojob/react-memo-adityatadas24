{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
import React, { useState, useMemo } from 'react';


const TodoList = ({ todos }) => {
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  const App = () => {
    const [count, setCount] = useState(0);
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
  
    const handleAddTodo = () => {
      setTodos([...todos, 'New todo']);
    };
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleInputChange = (e) => {
      setNewTodo(e.target.value);
    };
  
    const handleSubmit = () => {
      if (newTodo.length > 5) {
        setTodos([...todos, newTodo]);
        setNewTodo('');
      }
    };
  
    // Memoized component
    const MemoizedTodoList = useMemo(() => <TodoList todos={todos} />, [todos]);
  
    return (
      <div>
        <h1>Memo App</h1>
        <div>
          <button onClick={handleAddTodo}>Add Todo</button>
          <button onClick={handleIncrement}>Increment Count: {count}</button>
        </div>
        {MemoizedTodoList}
        <div>
          <h2>Add Todo</h2>
          <input type="text" value={newTodo} onChange={handleInputChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  };
  
  
  
  
  
  export default App;
  