import React from "react";
import { render } from "@testing-library/react-native";
import WelcomeScreen from "./WelcomeScreen";

const makeSut = () => {
  return render(<WelcomeScreen />);
};


describe("WelcomeScreen component", () => {
  it("Should render a map on screen", () => {
    const sut = makeSut();
    const mapEl = sut.getByTestId("map")
    expect(mapEl).toBeTruthy()
  });
});
