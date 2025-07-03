import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ?
         {...todo, completed: !todo.completed}: todo));
  }

  const deleteTodo = id => {
    setTodos(todos.filter((todo) => todo.id !== id))   // it removes the element that is equal to id, means it returns the todo items that are not equal to id 
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
  }

  return (
    <div className="TodoWrapper">
        <h1>📝 Your Daily Focus!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return (
            todo.isEditing ? 
        (<EditTodoForm editTodo={editTask} task={todo}/>) 
        : 
        (<Todo task={todo} key={index}
         toggleComplete={toggleComplete} 
         deleteTodo={deleteTodo} 
         editTodo={editTodo}/>) //task is a prop pass to Todo component   // always write code inside return in map
        )
        
      })}
    </div>
  );
};

export default TodoWrapper;
