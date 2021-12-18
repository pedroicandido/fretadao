export const SET_POINT = "SET_POINT";
export const REMOVE_POINT = "REMOVE_POINT";
export const SELECT_POINT_HISTORY = "SELECT_POINT_HISTORY";

export const setPoint = (coordinate) => ({
  type: SET_POINT,
  payload: {
    coordinate,
  },
});

export const selectPointOnHistory = (id) => ({
  type: SELECT_POINT_HISTORY,
  payload: {
    id,
  },
});

export const removePoint = ({ id, isSelected }) => ({
  type: REMOVE_POINT,
  payload: {
    id,
    isSelected,
  },
});
