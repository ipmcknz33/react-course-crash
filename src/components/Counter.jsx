import React, { useState } from "react";

function Counter() {
  const [arr, setArr] = useState([]);   

function addPlus() {
    setArr(prevArr => [
      ...prevArr, "+"])
  }

    function addminus() {
     setArr(prevArr => [
        ...prevArr, "-"])
  }

  return (
    <div>
      <button onClick={addPlus}>+</button>
        
      <button onClick={addminus}>-</button>
      {arr.toString()}
      
    </div>
  );
}

export default Counter;
