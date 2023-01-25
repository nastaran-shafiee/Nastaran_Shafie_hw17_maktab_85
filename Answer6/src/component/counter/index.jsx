import { useState } from "react";
import "./style.css";
function Counter({ count }) {
  const [changeConter, setChangeCounter] = useState(count);
  function increment() {
    setChangeCounter(changeConter + 1);
  }
  function decrement() {
    setChangeCounter(changeConter - 1);
  }
  function reset() {
    setChangeCounter(count);
  }
  return (
    <>
      <p className="counter">{changeConter}</p>
      <div className="containerButton">
        <button onClick={increment} className="Increment">
          Increment
        </button>
        <button onClick={reset} className="Reset">
          Reset
        </button>
        <button onClick={decrement} className="Decrement">
          Decrement
        </button>
      </div>
    </>
  );
}
export default Counter;
