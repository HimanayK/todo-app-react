import React, { useState } from "react";
import Swal from 'sweetalert2'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    // Form Submit
    const handleSubmit = (e) => {
      // If input is empty, show alert

        if(value === "") {
            Swal.fire("Enter Task");
             e.preventDefault();   // when you submit form the page reloads, to prevent that we need to call preventDefault()
            return;
        }
        e.preventDefault();   // when you submit form the page reloads, to prevent that we need to call preventDefault()
        addTodo(value);
        setValue("");   // after clicking add task, it makes input box empty
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
