export function Component_1({ employeeData, name }) {
  return (
    // fragments
    <>
      <h1>This is Component 1 !! </h1>
      {JSON.stringify(employeeData)}
      {name}
    </>
  );
}

export function Component_2({ employeeData, name }) {
  return (
    <div>
      <h1>This Component_2</h1>
      {JSON.stringify(employeeData)}
      {name}
    </div>
  );
}

export function Component_3(props) {
  const { employeeData, name } = props;
  return (
    <>
      <h1>This is compont 3</h1>
      {JSON.stringify(employeeData)}
      {name}
    </>
  );
}
