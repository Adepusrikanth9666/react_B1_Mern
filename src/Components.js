import { useContext } from "react";
import { empInfoContext } from "./App";

export function Component_1() {
  const emp_data = useContext(empInfoContext);
  return (
    // fragments
    <>
      <h1>This is Component 1 !! </h1>
      {JSON.stringify(emp_data)}
    </>
  );
}

export function Component_2() {
  const emp_data = useContext(empInfoContext);
  return (
    <div>
      <h1>This Component_2</h1>
      {JSON.stringify(emp_data)}
    </div>
  );
}

export function Component_3(props) {
  const emp_data = useContext(empInfoContext);
  return (
    <>
      <h1>This is compont 3</h1>
      {JSON.stringify(emp_data)}
    </>
  );
}
