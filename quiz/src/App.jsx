import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1>Quiz de programação</h1>
        <Welcome />
      </div>
    </>
  );
}

export default App;
