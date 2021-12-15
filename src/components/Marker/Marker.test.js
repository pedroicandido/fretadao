import React from "react";
import { render } from "@testing-library/react-native";
import Marker from "./Marker";

const makeSut = () => {
  return render(<Marker />);
};

describe("Marker component", () => {
  it("Should render a marker on screen", () => {
    const sut = makeSut()
    const markerEl = sut.getByTestId("marker");
    expect(markerEl).toBeTruthy();
  });
});
