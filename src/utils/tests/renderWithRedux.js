import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../store/reducers";
import { render } from "@testing-library/react-native";

export const renderWithRedux = (
  Component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{Component}</Provider>),
  };
};
