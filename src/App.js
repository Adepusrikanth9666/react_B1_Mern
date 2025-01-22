import logo from "./logo.svg";
import "./App.css";
import NewComponet from "./NewComponent";
import { Component_1, Component_2, Component_3 } from "./Components";
import StateHook from "./Hooks/hooks";
import UseEffectHook from "./Hooks/useEffectHook";
import Context from "./Hooks/Context";
import { createContext } from "react";
import DataEffect from "./Hooks/userEffect";
import UseReducerHooks from "./Hooks/useReducerHooks";
import UseREfHook from "./Hooks/UseREfHook";
import UseCallbackHook from "./Hooks/UseCallbackHook";
import UseMemoHook from "./Hooks/UseMemoHook";
import UseLayoutEffectHook from "./Hooks/UseLayoutEffectHook";
import WindowWidthComp from "./components/windowWidthComp";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import CheckoutPage from "./components/CheckoutPage";
import PaymentPage from "./components/PaymentPage";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserInfo from "./components/UserInfo";

export const empInfoContext = createContext();

function App() {
  const navigate = useNavigate();
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
        <button onClick={() => navigate("/")}>DashboardPage</button>
        <button onClick={() => navigate("/login")}>LoginPage</button>
        <button onClick={() => navigate("/mywebsite/checkout")}>
          CheckoutPage
        </button>
        <button onClick={() => navigate("/payment")}>PaymentPage</button>
        <header className="App-header">
          <div>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<DashboardPage />} />
              <Route path="/mywebsite/checkout" element={<CheckoutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/user/:cartid" element={<UserInfo />} />
            </Routes>
          </div>
          {/* <UseReducerHooks />
          <WindowWidthComp />
          <UseREfHook />
          <UseCallbackHook />
          <UseMemoHook />
          <UseLayoutEffectHook />
          <UseEffectHook /> */}
          {/* <LoginPage />
          <DashboardPage />
          <CheckoutPage />
          <PaymentPage /> */}

          {/* <h1>Hello World!!!!!!! This is my first React Project Hureyy!!!</h1>
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
          </ul> */}

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* {JSON.stringify(emp_data)} */}
          {/* Props */}
          {/* <NewComponet />
          <Component_1 />
          <Component_2 />
          <Component_3 />
          <StateHook /> */}
        </header>
      </div>
    </empInfoContext.Provider>
  );
}

export default App;
