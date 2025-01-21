import React, { useMemo, useState } from "react";

const productData = [
  { productName: "Laptop", price: 1200 },
  { productName: "Smartphone", price: 800 },
  { productName: "Headphones", price: 150 },
  { productName: "Keyboard", price: 50 },
  { productName: "Monitor", price: 300 },
  { productName: "Mouse", price: 25 },
  { productName: "Tablet", price: 400 },
  { productName: "Smartwatch", price: 200 },
  { productName: "External Hard Drive", price: 100 },
  { productName: "Wireless Charger", price: 30 },
  { productName: "Camera", price: 900 },
  { productName: "Printer", price: 150 },
  { productName: "Router", price: 80 },
  { productName: "Gaming Console", price: 500 },
  { productName: "Desk Lamp", price: 40 },
  { productName: "Speakers", price: 120 },
  { productName: "Projector", price: 350 },
  { productName: "Graphic Tablet", price: 250 },
  { productName: "Power Bank", price: 50 },
  { productName: "Electric Kettle", price: 40 },
];

const UseMemoHook = () => {
  // waht is the use case??
  //The useMemo hook allows you to memoize a value so that
  // it’s only re-computed when its dependencies change.
  // This can help improve performance by preventing unnecessary re-computations.
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(productData);

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.price > 500);
  }, [items]);

  return (
    <div>
      <h4>Now we are Learning useMemo Hook</h4>
      <p>We are Displaying the Products which are greater than 500rs</p>
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
      {filteredItems.map((item, index) => (
        <li key={index}>
          {item.productName} - {item.price}
        </li>
      ))}
    </div>
  );
};

export default UseMemoHook;
