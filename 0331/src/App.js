import React, { useState } from "react";

let b = 0; // 전역변수 b

function App() {
  let a = 0; // 일반변수 a
  const [c, setC] = useState(0); //state 변수 c

  const local = () => {
    a++;
    console.log("일반변수 a = ", a );
  };

  const global = () => {
    b++;
    console.log("전역변수 b = ", b );
  };

  const state = () => {
    setC((prev) => prev + 1);
    console.log("state 변수 c = ", c );
  };
  /** 2.(1) */


  const setC123 = () => {
    setC(1);
    setC(2);
    setC(3); // 이것만 실행된다.
    console.log("(setC123) state 변수 c = ", c);
  };
  /** 2.(2) */


  const setCplus1 = () => {
    setC(c + 1);
    console.log("(setC+1) state 변수 c = ", c);
  };
  /** 2.(3) */

  
  return (
    <div>
      <div>
        <button style={{padding:10, margin:10}} onClick={local}>일반변수 = {a}</button>
        <button style={{padding:10, margin:10}} onClick={global}>전역변수 = {b}</button>
        <button style={{padding:10, margin:10}} onClick={state}>state 변수 = {c}</button>
      </div>
      <div>
        <button style={{padding:10, margin:10}} onClick={setC123}>setC(123) = {c}</button>
        <button style={{padding:10, margin:10}} onClick={setCplus1}>setC(c+1) = {c}</button>
      </div>
    </div>
  );
}

export default App;