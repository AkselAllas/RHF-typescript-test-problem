import React from "react";
import TestComponent from "./TestComponent";
import { render, screen, fireEvent, act } from "@testing-library/react";
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;

describe("TestComponent", () => {
  it("should not allow submitting negative number", async () => {
    const onSubmit = jest.fn();
    render(<TestComponent onSubmit={onSubmit} />);
    const input = screen.getByLabelText("input label");
    expect(input).toBeTruthy();
    fireEvent.input(input, {
      target: {
        value: "-12"
      }
    });
    await act(async () => {
      fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));
    });
    expect(onSubmit).toBeCalled();
  });
});
