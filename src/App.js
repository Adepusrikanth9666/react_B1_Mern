import logo from "./logo.svg";
import "./App.css";
import NewComponet from "./NewComponent";
import { Component_1, Component_2, Component_3 } from "./Components";
import StateHook from "./Hooks/hooks";
import UseEffectHook from "./Hooks/useEffectHook";
import Context from "./Hooks/Context";
import { createContext } from "react";
import DataEffect from "./Hooks/userEffect";
export const empInfoContext = createContext();

function App() {
  const emp_data = {
    emp_name: "Jhon",
    emp_id: 123,
    address: "UK",
  };

  const blogInfo = {
    React: {
      post: "Learn useContext Hooks",
      author: "Adhithi Ravichandran",
    },
    GraphQL: {
      post: "Learn GraphQL Mutations",
      author: "Adhithi Ravichandran",
    },
  };

  return (
    <empInfoContext.Provider value={emp_data}>
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
          <NewComponet />
          <Component_1 />
          <Component_2 />
          <Component_3 />
          <StateHook />
        </header>
      </div>
    </empInfoContext.Provider>
  );
}

export default App;
