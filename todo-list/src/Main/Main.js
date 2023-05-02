//import './Main.css';
import TodoItem from '../componrents/TodoItem';
import Input from '../componrents/Input';
import Review from '../componrents/Review';
import {useState} from "react";
import styled from "styled-components";

let count=0;

const MainPage = () => {
  const [todoListData, setTodoListData] = useState([{ title : 'example'}])

  const onClickDelete = (id) => () => {
    setTodoListData((prev) => prev.filter((value, index) => id !== index))
    return 
  }

  const onAddTodo = (todoItemData) => {
    setTodoListData((prev) => [...prev, {...todoItemData,id:count}]);
    count ++;
  };

  const handleTitleChange = (index) => (newTitle) => {
    setTodoListData((prev) =>
      prev.map((todo, i) => {
        if (i === index) {
          return { ...todo, title: newTitle };
        }
        return todo;
      })
    );
  };
  
  return (
  <div>
    <TodoHeader>My Todolist</TodoHeader>
    <Input onAddTodo={onAddTodo} />
    {
      todoListData.map((todoItemData, index) => (
        <div key={`todo_item_${todoItemData.id}`} style={{ display: "flex", alignItems: "center" }}>
          <TodoItem {...todoItemData} style={{ flex: "1" }} />
          <Review title={todoItemData.title} onTitleChange={handleTitleChange(index)} />
          <DeleteButton onClick={onClickDelete(index)}>Delete</DeleteButton>
        </div>
      ))
    }
  </div>
  );
}
const TodoHeader = styled.div`
  padding: 10px;
  margin: 0 10px;
  background-color: #b2c9f8;
  width: 800px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 800;
  color: white;
`;

const DeleteButton = styled.button`
  display: block;
  position: relative;
  float: left;
  padding: 5px;
  margin: 7px;
  font-size: 10px;
  font-weight: 800;
  text-align: center;
  color: #fff;
  background: #b2c9f8;
  border-color: #8eb0f6;
  border-radius: 5px;
  &:hover {
    background: #8eb0f6;
  }
`;

export default MainPage;
