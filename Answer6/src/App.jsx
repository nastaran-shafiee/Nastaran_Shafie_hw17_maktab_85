import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./component/counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="Counter-App">Counter App</p>
      <Counter count={0} />
    </div>
  );
}

export default App;
