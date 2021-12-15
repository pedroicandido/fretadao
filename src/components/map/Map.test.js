import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Map from "./Map";

describe("Map component", () => {
  it("Should render a map on screen", () => {
    const sut = render(<Map />);
    const mapEl = sut.getByTestId("map")
    expect(mapEl).toBeTruthy()
  });
});
