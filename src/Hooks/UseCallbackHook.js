// what is callback..?
//   function multiple(a, b) {
//     return a * b;
//   }
//   function add(c, d) {
//     return c + d;
//   }

//   function result(multiple, add) {
//     console.log(multiple(3, 4), "Multiplee");
//     console.log(add(1, 2), "add function");
//   }

//   useCallBackHok does? -> only teh function exectute when the dependencie changes...
// result(multiple, add);

import React, { useState } from "react";
import { useCallback } from "react";

const userDate = [
  { name: "John", email: "john@gmail.com" },
  { name: "Emily", email: "emily@gmail.com" },
  { name: "Michael", email: "michael@gmail.com" },
  { name: "Sarah", email: "sarah@gmail.com" },
  { name: "David", email: "david@gmail.com" },
  { name: "Sophia", email: "sophia@gmail.com" },
  { name: "Daniel", email: "daniel@gmail.com" },
  { name: "Olivia", email: "olivia@gmail.com" },
  { name: "James", email: "james@gmail.com" },
  { name: "Emma", email: "emma@gmail.com" },
  { name: "William", email: "william@gmail.com" },
  { name: "Isabella", email: "isabella@gmail.com" },
  { name: "Alexander", email: "alexander@gmail.com" },
  { name: "Mia", email: "mia@gmail.com" },
  { name: "Benjamin", email: "benjamin@gmail.com" },
  { name: "Charlotte", email: "charlotte@gmail.com" },
  { name: "Matthew", email: "matthew@gmail.com" },
  { name: "Amelia", email: "amelia@gmail.com" },
  { name: "Joseph", email: "joseph@gmail.com" },
  { name: "Ava", email: "ava@gmail.com" },
];

const UseCallbackHook = () => {
  const [data, setData] = useState(userDate);
  const [searchTerm, setSearchTerm] = useState("");
  //  usecallbachHook:
  //   const value = useCallback(() => {}, [dependencies]);

  const filterData = useCallback(() => {
    return data.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm]);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h3>We are learing UseCallback hook today!!!!!!!!</h3>
      <input type="text" value={searchTerm} onChange={handleSearchTerm} />
      <ul>
        {filterData().length > 0 ? (
          filterData().map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })
        ) : (
          <li>No User Found with this Name</li>
        )}
      </ul>
    </div>
  );
};

export default UseCallbackHook;
