import './Main.css';
import TodoItem from '../componrents/TodoItem';
import Input from '../componrents/Input';
import Review from '../componrents/Review';
import {useState} from "react";

const MainPage = () => {
  const [todoListData, setTodoListData] = useState([{ title : '1234'}])

  const onClickDelete = (id) => () => {
    setTodoListData((prev) => prev.filter((value, index) => id !== index))
    return 
  }

  const onAddTodo = (todoItemData) => {
    setTodoListData((prev) => [...prev, todoItemData]);
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
    <Input onAddTodo={onAddTodo} />
    {
      todoListData.map((todoItemData, index) => (
        <div key={`todo_item_${index}`} style={{ display: "flex", alignItems: "center" }}>
          <TodoItem {...todoItemData} style={{ flex: "1" }} />
          <Review title={todoItemData.title} onTitleChange={handleTitleChange(index)} />

          <button onClick={onClickDelete(index)}>Delete</button>
        </div>
      ))
    }
  </div>
  );
}

export default MainPage;
