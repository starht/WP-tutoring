import React, {useState} from "react";
import "./App.css";

export default function Card(props) {
  
  const [number, setCounter] = useState(parseInt(props.user));
  const onIncrease = () => {
    setCounter((prev) => prev + 1); // +1 보다 prev 사용할 것
  };


  return (
    <div class="card">
      <div class="card_header">
        <h4>{props.name}</h4>
      </div>
      <div class="card_body">
        <p>
          <span id="style1">${props.money}</span>
          <span id="style2"> / mo</span>
        </p>
        <ul>
          <li>{number} users included</li>
          <li>{props.storage} GB of storage</li>
          <li>{props.support} support</li>
          <li>Help center access</li>
        </ul>
        <button className={props.css} onClick={onIncrease}>{props.btntext}</button>
      </div>
    </div>
  );
}
