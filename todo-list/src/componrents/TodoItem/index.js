import "./index.css"
import { useState } from "react"

const TodoItem = ({ title }) => {

    const [checked, setChecked] = useState(false);

    const onChangeCheckbox = () => {
        setChecked((prev) => !prev);
      };

    return <div className = "todo_root">
        <input 
        type = "checkbox" 
        checked = {checked} 
        onChange={onChangeCheckbox}
        className={checked ? "todo_title" : ""} // 클래스 조건부 적용
      />
      <span className={checked ? "todo_title" : ""}>{title}</span> {}
    </div>
}
export default TodoItem