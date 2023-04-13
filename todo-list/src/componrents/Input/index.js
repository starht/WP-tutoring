import "./index.css"
import React, { useState } from "react";

const Input = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAddTodo({ title });
      setTitle("");
    }
  }

  return (
    <form className="input_form" onSubmit={handleFormSubmit}>
      <input
        className="inputbox"
        type="text"
        placeholder="Todo를 입력하세요"
        value={title}
        onChange={handleInputChange}
      />
      <button className="submit_button" type="submit">Add Todo</button>
    </form>
  );
}

export default Input;