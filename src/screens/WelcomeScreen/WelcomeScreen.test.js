import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { renderWithRedux } from "../../utils/tests/renderWithRedux";
import WelcomeScreen from "./WelcomeScreen";

const makeSut = () => {
  return renderWithRedux(<WelcomeScreen />);
};

describe("WelcomeScreen component", () => {
  it("Should render a map on screen", () => {
    const sut = makeSut();
    const mapEl = sut.getByTestId("map");
    expect(mapEl).toBeTruthy();
  });

  it("Should render a marker on map click", () => {
    const sut = makeSut();
    const mapEl = sut.getByTestId("map")
    fireEvent.press(mapEl)
    const markerEl = sut.getByTestId("marker")
    expect(markerEl).toBeTruthy()
  });
});
