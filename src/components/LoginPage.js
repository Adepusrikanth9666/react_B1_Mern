import React from "react";
import Welcome from "./WelcomeComp";

const LoginPage = () => {
  return (
    <div>
      <h2>This is a Login page we are rendering by using Router</h2>
      <p>
        `// hOOKS HAS BEEN INTRODUCED IN FUNCTIONAL COMPONENTS // THere are
        Differetn types of Hooks // UseState - intail values UseEffect - side
        effects ,Dom manipulations // UseContextuseReducer hook - function and
        intial value`
      </p>
      <Welcome name="john" email="jhon@email.com" />
    </div>
  );
};

export default LoginPage;
