import React, {useEffect, useState} from 'react';
import './App.css';
//imorting Compents
import Form from "./components/Form";
import Todolist from './components/Todolist';

function App() {
  
  //State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }
  //Run ONCE
  useEffect(() => {
    getLocalTodos();
  }, []);
   //Use Effect
   useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  //Save To Local
  const saveLocalTodos = () => {
    
      localStorage.setItem('todos', JSON.stringify(todos));
    
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
    }
    };
  return (
    <div className="App">
    <header>
      <h1>Len's To Do List</h1>
    
    </header>
    <Form inputText={inputText}
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText} 
     setStatus={setStatus}
      />
    <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
