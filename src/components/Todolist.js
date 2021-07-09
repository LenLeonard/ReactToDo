import React from 'react';
import Todo from './Todo.js';
const Todolist = ({todos, setTodos, filteredTodos}) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                    setTodos={setTodos}
                    todos={todos}
                    key={todo.id} 
                    text={todo.text} 
                    id={todo.id} 
                    todo={todo} 
                    filteredTodos={filteredTodos} />
                ))}
            </ul>
        </div>
    );
};

export default Todolist;