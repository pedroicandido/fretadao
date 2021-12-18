import {
  REMOVE_POINT,
  SELECT_POINT_HISTORY,
  SET_POINT,
} from "../actions/point";

const initialState = {
  currentPoint: {
    latitude: 37.78825,
    longitude: -122.4324,
  },
  historyPoints: [],
};

const pointReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POINT:
      const historyPoints = [...state.historyPoints];
      const updatedHistoryPoints = historyPoints.map((hist) => ({
        ...hist,
        isSelected: false,
      }));
      const coordinate = { ...action.payload.coordinate, isSelected: true };
      return {
        currentPoint: coordinate,
        historyPoints: [coordinate, ...updatedHistoryPoints],
      };

    case SELECT_POINT_HISTORY:
      const selectedId = action.payload.id;
      const findedIndex = state.historyPoints.findIndex(
        (hist) => hist.id == selectedId
      );
      const updateHistory =state.historyPoints.map(hist => ({...hist, isSelected: false}));
      updateHistory[findedIndex].isSelected = true;
      const point = {
        latitude: updateHistory[findedIndex].latitude,
        longitude: updateHistory[findedIndex].longitude,
      };
      return {
        ...state,
        historyPoints: updateHistory,
        currentPoint: point,
      };

    case REMOVE_POINT:
      const id = action.payload.id;
      const isSelected = action.payload.isSelected;
      let currentPointState = { ...state.currentPoint };
      const newHistoryPoints = state.historyPoints.filter(
        (hist) => hist.id !== id
      );
      if (isSelected && newHistoryPoints.length > 0) {
        currentPointState = { ...newHistoryPoints[0], isSelected: true };
        newHistoryPoints[0].isSelected = true;
      }
      return {
        ...state,
        currentPoint: currentPointState,
        historyPoints: newHistoryPoints,
      };

    default:
      return state;
  }
};

export default pointReducer;
