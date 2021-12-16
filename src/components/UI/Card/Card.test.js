import React from "react";
import { render } from "@testing-library/react-native";
import Card from "./Card";

const makeSut = () => {
  return render(<Card />);
};

describe("Marker component", () => {
  it("Should render a Card on screen", () => {
    const sut = makeSut()
    const markerEl = sut.getByTestId("card");
    expect(markerEl).toBeTruthy();
  });
});
