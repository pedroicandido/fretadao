import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MarkerHistory from "./MarkerHistory";

const makeSut = () => {
  return render(<MarkerHistory />);
};

describe("MarkerHistory component", () => {
  it("Should show a message if no point was selected", () => {
    const sut = makeSut();
    const textEl = sut.getByText("Adicione um ponto clicando no mapa!");
    expect(textEl).toBeTruthy();
  });
});
