// import "./index.css"
import React, { useState } from "react";
import styled from "styled-components";

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
    <InputForm onSubmit={handleFormSubmit}>
      <InputBox value={title} onChange={handleInputChange}/>
      <SubmitButton type="submit">Add Todo</SubmitButton>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  padding: 10px;
  margin: 0 10px;
`;

const InputBox = styled.input.attrs((props) => ({
  type: "text", placeholder: "Todo를 입력하세요",
}))`
  padding: 10px;
  margin: 10px;
  width: 600px;
  height: 20px;
`;

const SubmitButton = styled.button`
  display: block;
  position: relative;
  float: left;
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 40px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background: #b2c9f8;
  border-color: #8eb0f6;
  border-radius: 5px;
  &:hover {
    background: #8eb0f6;
  }
`;

export default Input;