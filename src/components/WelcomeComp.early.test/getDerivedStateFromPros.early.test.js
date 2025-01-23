// Unit tests for: getDerivedStateFromPros

import React from "react";
import Welcome from "../WelcomeComp";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

export default Welcome;
describe("Welcome.getDerivedStateFromPros() getDerivedStateFromPros method", () => {
  describe("Happy paths", () => {
    test("should update state name when props name changes", () => {
      // Initial render with initial props
      const { rerender, getByText } = render(
        <Welcome name="Alice" email="alice@example.com" />
      );

      // Verify initial state
      expect(getByText("Alice")).toBeInTheDocument();

      // Rerender with new props
      rerender(<Welcome name="Bob" email="bob@example.com" />);

      // Verify state update
      expect(getByText("Bob")).toBeInTheDocument();
    });

    test("should not update state name when props name remains the same", () => {
      // Initial render with initial props
      const { rerender, getByText } = render(
        <Welcome name="Alice" email="alice@example.com" />
      );

      // Verify initial state
      expect(getByText("Alice")).toBeInTheDocument();

      // Rerender with the same props
      rerender(<Welcome name="Alice" email="alice@example.com" />);

      // Verify state remains unchanged
      expect(getByText("Alice")).toBeInTheDocument();
    });
  });

  describe("Edge cases", () => {
    test("should handle undefined name prop gracefully", () => {
      // Initial render with undefined name
      const { rerender, getByText } = render(
        <Welcome name={undefined} email="alice@example.com" />
      );

      // Verify initial state
      expect(getByText("Jhon")).toBeInTheDocument(); // Default state name

      // Rerender with a defined name
      rerender(<Welcome name="Charlie" email="charlie@example.com" />);

      // Verify state update
      expect(getByText("Charlie")).toBeInTheDocument();
    });

    test("should handle null name prop gracefully", () => {
      // Initial render with null name
      const { rerender, getByText } = render(
        <Welcome name={null} email="alice@example.com" />
      );

      // Verify initial state
      expect(getByText("Jhon")).toBeInTheDocument(); // Default state name

      // Rerender with a defined name
      rerender(<Welcome name="David" email="david@example.com" />);

      // Verify state update
      expect(getByText("David")).toBeInTheDocument();
    });
  });
});

// End of unit tests for: getDerivedStateFromPros
