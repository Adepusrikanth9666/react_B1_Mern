import React, { useReducer, useState } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload]; //[{ id: 1, name: "item 1", price: "12345"}]

    case "remove":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}

const UseReducerHooks = () => {
  // const [value, setValue] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => {
    //{ id: 1, name: "item 1", price: "12345"}
    dispatch({ type: "add", payload: item });
  };

  console.log(cart);
  const removeItem = (item) => {
    dispatch({ type: "remove", payload: item });
  };

  return (
    <div>
      <h1> Today we are learning about useReducer</h1>
      <h3>Shoping Cart</h3>

      <ul>
        {cart.map((cartItem) => (
          <li>
            {cartItem.name} - {cartItem.price}
            <button onClick={() => removeItem(cartItem)}>remove</button>
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          addItem({
            id: Math.random(),
            name: `item ${Math.random()}`,
            price: "12345",
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default UseReducerHooks;
