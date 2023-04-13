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
        className={checked ? "todochecked" : ""}
      />
      <span className={`todo_title ${checked ? "todochecked" : ""}`}>{title}</span> {}
    </div>
}
export default TodoItem