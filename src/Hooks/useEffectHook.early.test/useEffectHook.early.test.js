// Unit tests for: useEffectHook

import UseEffectHook from "../useEffectHook";

// src/Hooks/useEffectHook.js
import { useEffect, useState } from "react";

// src/Hooks/useEffectHook.test.js
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

// src/Hooks/useEffectHook.js
const UseEffectHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default UseEffectHook;

// src/Hooks/useEffectHook.test.js
describe("useEffectHook() useEffectHook method", () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Hello, World!" }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Happy paths", () => {
    it("should display loading initially", () => {
      // Test to ensure the component displays "Loading..." initially
      render(<UseEffectHook />);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("should display fetched data", async () => {
      // Test to ensure the component displays fetched data
      render(<UseEffectHook />);
      await waitFor(() =>
        expect(
          screen.getByText('{"message":"Hello, World!"}')
        ).toBeInTheDocument()
      );
    });
  });

  describe("Edge cases", () => {
    it("should handle fetch error gracefully", async () => {
      // Mock fetch to reject
      global.fetch = jest.fn(() => Promise.reject("API is down"));

      // Test to ensure the component handles fetch errors
      render(<UseEffectHook />);
      await waitFor(() =>
        expect(screen.getByText("Loading...")).toBeInTheDocument()
      );
    });
  });
});

// End of unit tests for: useEffectHook
