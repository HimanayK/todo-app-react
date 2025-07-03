#Steps:
- npm create vite@latest
- cd folder
- npm install
- npm i uuid   (for unique id)
- npm i --save @fortawesome/fontawesome-svg-core (font.awsome.com)
- npm i --save @fortawesome/free-solid-svg-icons
  npm i --save @fortawesome/free-regular-svg-icons
  npm i --save @fortawesome/free-brands-svg-icons
- npm i --save @fortawesome/react-fontawesome@latest




## prop ---> focus on prop: deleteTodo
1. Set prop in parent component inside child element
 - TodoWrapper -> parent component
 - Todo -> child component
```jsx
// parent component - TodoWrapper
mport React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
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

  return (
    <div className="TodoWrapper">
        <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/> //task is a prop pass to Todo component   // always write code inside return in map
        );
      })}
    </div>
  );
};

export default TodoWrapper;
```

```jsx
// child element - Todo
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={()=> toggleComplete(task.id)}
        className={`${task.completed ? 'completed': ""}
        `}>{task.task}</p>   {/* task = {todo} where as todo has property of task*/}
        <div>
            <FontAwesomeIcon icon={faPenToSquare} />
             <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo
```



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
