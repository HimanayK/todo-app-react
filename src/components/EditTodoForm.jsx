import React, { useState } from "react";

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    // Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();   // when you submit form the page reloads, to prevent that we need to call preventDefault()
        editTodo(value, task.id);
        setValue("");   // after clicking add task, it makes input box empty
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
