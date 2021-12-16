import pointReducer from "./Point";

describe("PointReducer", () => {
  it("Should return default state if no case type match", () => {
    const fakeInitialState = {
      any_field: "any_value",
    };

    const fakeAction = {
      type: "any_type",
      payload: "any_value",
    };

    const state = pointReducer(fakeInitialState, fakeAction);
    expect(state).toEqual(fakeInitialState);
  });
});
