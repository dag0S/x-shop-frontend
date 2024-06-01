import { IDevice } from "../../types/types";
import { createSlice } from "@reduxjs/toolkit";
import { deviceApi } from "../services/devices";
import { RootState } from "../store";

interface InitialState {
  devices: IDevice[] | null;
}

const initialState: InitialState = {
  devices: null,
};

const slice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      deviceApi.endpoints.getAllDevice.matchFulfilled,
      (state, action) => {
        state.devices = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectDevices = (state: RootState) => state.devices;
