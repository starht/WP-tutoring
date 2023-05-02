// import "./index.css"
import { useState } from "react"
import styled from "styled-components";

const TodoItem = ({ title }) => {

    const [checked, setChecked] = useState(false);

    const onChangeCheckbox = () => {
        setChecked((prev) => !prev);
      };

    return (
      <TodoRoot>
        <TodoInput checked={checked} onChange={onChangeCheckbox} />
        <TodoTitle checked={checked}>{title}</TodoTitle> {}
      </TodoRoot>
    );
}

const TodoRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const TodoInput = styled.input.attrs(props => ({
  type: 'checkbox',
  checked: props.checked
}))`
  width: 20px;
  height: 20px;
	cursor: pointer;
`;

const TodoTitle = styled.span`
  padding-left: 5px;
  font-size: 25px;
  font-weight: lighter;
  color : ${props => props.checked ? 'rgb(131, 131, 131)' : ''};
  text-decoration : ${props => props.checked ? 'line-through' : ''};
`;

export default TodoItem