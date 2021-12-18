import React from "react";
import renderWithRedux from "../../utils/tests/renderWithRedux";
import Map from "./Map";

const makeSut = () => {
  return renderWithRedux(<Map />);
};

describe("Map component", () => {
  it("Should render a map on screen", () => {
    const sut = makeSut();
    const mapEl = sut.getByTestId("map");
    expect(mapEl).toBeTruthy();
  });
});
