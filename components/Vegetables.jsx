import React from "react";

function Vegetables({ quantity, vName }) {
  const [count, setCount] = React.useState(quantity, vName);

  function newCount(quantity) {
    setCount(count + quantity);
  }

  return (
    <>
      <h1>
        {" "}
        {vName} : {count}{" "}
      </h1>

      <button onClick={() => newCount(+1)}></button>

      <button onClick={() => newCount(-1)}></button>
    </>
  );
}

export default Vegetables;
