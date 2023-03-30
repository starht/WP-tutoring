import React from "react";
import "./App.css";

export default function Card(props) {
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
          <li>{props.user} users included</li>
          <li>{props.storage} GB of storage</li>
          <li>{props.support} support</li>
          <li>Help center access</li>
        </ul>
        <button class={props.css}>{props.btntext}</button>
      </div>
    </div>
  );
}
