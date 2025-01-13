// Unit tests for: UseStateHook

import React from "react";
import UseStateHook from "../hooks";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("UseStateHook() UseStateHook method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    it("should render the initial tally number as 0", () => {
      // Render the component
      render(<UseStateHook />);

      // Check if the initial tally number is 0
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("should increment the tally number when the Increment button is clicked", () => {
      // Render the component
      render(<UseStateHook />);

      // Click the Increment button
      fireEvent.click(screen.getByText("Increment"));

      // Check if the tally number is incremented
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("should reset the tally number to 0 when the Reset button is clicked", () => {
      // Render the component
      render(<UseStateHook />);

      // Click the Increment button to change the tally number
      fireEvent.click(screen.getByText("Increment"));

      // Click the Reset button
      fireEvent.click(screen.getByText("Reset"));

      // Check if the tally number is reset to 0
      expect(screen.getByText("0")).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should handle multiple increments correctly", () => {
      // Render the component
      render(<UseStateHook />);

      // Click the Increment button multiple times
      fireEvent.click(screen.getByText("Increment"));
      fireEvent.click(screen.getByText("Increment"));
      fireEvent.click(screen.getByText("Increment"));

      // Check if the tally number is incremented correctly
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("should handle reset after multiple increments", () => {
      // Render the component
      render(<UseStateHook />);

      // Click the Increment button multiple times
      fireEvent.click(screen.getByText("Increment"));
      fireEvent.click(screen.getByText("Increment"));

      // Click the Reset button
      fireEvent.click(screen.getByText("Reset"));

      // Check if the tally number is reset to 0
      expect(screen.getByText("0")).toBeInTheDocument();
    });
  });
});

// End of unit tests for: UseStateHook
