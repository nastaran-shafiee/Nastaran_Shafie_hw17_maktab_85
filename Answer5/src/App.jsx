import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HelloClass from "./Component/classComponenet";
import HelloFunction from "./Component/functionComponent";
function App() {
  return (
    <div className="App">
      <HelloClass />
      <HelloFunction />
    </div>
  );
}

export default App;
