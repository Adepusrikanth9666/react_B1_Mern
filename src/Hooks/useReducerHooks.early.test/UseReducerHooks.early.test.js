// Unit tests for: UseReducerHooks

import React from "react";
import UseReducerHooks from "../useReducerHooks";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("UseReducerHooks() UseReducerHooks method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    it("should render the component with the correct heading", () => {
      // Test to ensure the component renders with the expected heading text
      render(<UseReducerHooks />);
      const headingElement = screen.getByText(
        /Today we are learning about useReducer/i
      );
      expect(headingElement).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should render without crashing when no props are passed", () => {
      // Test to ensure the component renders without any props
      render(<UseReducerHooks />);
      const headingElement = screen.getByText(
        /Today we are learning about useReducer/i
      );
      expect(headingElement).toBeInTheDocument();
    });

    // Since the component is static and does not accept props or state, there are limited edge cases to test.
    // If the component were to accept props or have more complex logic, additional edge case tests would be necessary.
  });
});

// End of unit tests for: UseReducerHooks
