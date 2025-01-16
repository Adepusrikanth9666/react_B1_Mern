import logo from "./logo.svg";
import "./App.css";
import NewComponet from "./NewComponent";
import { Component_1, Component_2, Component_3 } from "./Components";
import StateHook from "./Hooks/hooks";
import UseEffectHook from "./Hooks/useEffectHook";

function App() {
  const emp_data = {
    emp_name: "Jhon",
    emp_id: 123,
    address: "UK",
  };
  return (
    <div className="App">
      <header className="App-header">
        <UseEffectHook />
        <h1>Hello World!!!!!!! This is my first React Project Hureyy!!!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>Html</li>
          <li>React</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {JSON.stringify(emp_data)}
        {/* Props */}
        <NewComponet employeeData={emp_data} name="Srikanth" />
        <Component_1 employeeData={emp_data} name="Jhon" />
        <Component_2 employeeData={emp_data} name="smith" />
        <Component_3 employeeData={emp_data} name="Joe" />
        <StateHook />
      </header>
    </div>
  );
}

export default App;
