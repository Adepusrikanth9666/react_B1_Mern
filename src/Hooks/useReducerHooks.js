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
  const [wishlist, setWishlist] = useState([]); // Wishlist state

  const addItem = (item) => {
    //{ id: 1, name: "item 1", price: "12345"}
    dispatch({ type: "add", payload: item });
  };

  console.log(cart);
  const removeItem = (item) => {
    dispatch({ type: "remove", payload: item });
  };
  const addToWishlist = (item) => {
    
    if (!wishlist.some((wishItem) => wishItem.id === item.id)) {
      setWishlist((prev) => [...prev, item]);
      removeItem(item); 
    }
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
            <button onClick={() => addToWishlist(cartItem)}>Add to Wishlist</button>

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

      <h3>Wishlist</h3>
      <ul>
        {wishlist.map((wishItem) => (
          <li key={wishItem.id}>
            {wishItem.name} - {wishItem.price}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default UseReducerHooks;
