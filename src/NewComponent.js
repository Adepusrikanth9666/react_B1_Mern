import React from "react";

const NewComponet = function (props) {
  const { employeeData, name } = props;
  console.log(employeeData);

  // Destructuring *****

  //   console.log(emp_data.emp_id);
  //   console.log(emp_data.emp_name);
  //   console.log(emp_data.address);
  //   //   ------------------------------------------------------------------
  //   const { emp_name, emp_id, address } = emp_data;
  //   console.log(emp_id);
  //   console.log(emp_name);
  //   console.log(address);

  let age = 19;
  if (age > 18) {
    console.log("im Adult");
  } else {
    console.log("im child");
  }

  const courseList = [
    "Node.js",
    "React.js",
    "Html",
    "CSS",
    "express.js",
    "javascript",
  ];

  return (
    <div>
      <h1 className="conjainer" id="">
        Hey!! This is my first functional NewComponet
      </h1>
      {courseList.map((list) => (
        <h1>{list}</h1>
      ))}
      {age > 18 ? <h1>im Adult</h1> : <h1>Imm Child</h1>}
      {JSON.stringify(employeeData)}
      {name}
    </div>
  );
};

export default NewComponet;
