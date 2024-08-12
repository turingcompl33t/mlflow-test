import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/api/2.0/mlflow/experiments/get-by-name?experiment_name=Default")
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
