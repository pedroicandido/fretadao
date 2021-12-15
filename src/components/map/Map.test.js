import React from "react";
import { render } from "@testing-library/react-native";
import Map from "./Map";

const makeSut = () => {
  return render(<Map />);
};


describe("Map component", () => {
  it("Should render a map on screen", () => {
    const sut = makeSut();
    const mapEl = sut.getByTestId("map")
    expect(mapEl).toBeTruthy()
  });
});
