import { combineReducers } from "redux";
import pointReducer from "./Point";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const pointConfig = {
  key: "point",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  point: persistReducer(pointConfig, pointReducer),
});

export default rootReducer;
