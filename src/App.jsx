import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const addCount = (num) => {
    if (num >= 10) {
      setCount("Done !");
      setDisable(true);
    } else {
      setCount(count + 1);
    }
  };

  const subtCount = (num) => {
    if (num <= 0) {
      setCount("Done !");
      setDisable(true);
    } else {
      setCount(count - 1);
    }
  };

  const setReset = () => {
    setCount(0);
    setDisable(false);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          onClick={() => {
            addCount(count);
          }}
          disable={disable}
        >
          +
        </Button>
        <p>{count}</p>
        <Button
          onClick={() => {
            subtCount(count);
          }}
          disable={disable}
        >
          -
        </Button>

        <br />
        <br />
        <Button onClick={setReset} disable={!disable}>
          Reset
        </Button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
