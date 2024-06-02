import { IType } from "../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { typesApi } from "../services/types";

interface InitialState {
  types: IType[] | null;
  selectedType: number | null;
}

const initialState: InitialState = {
  types: null,
  selectedType: null,
};

const slice = createSlice({
  name: "types",
  initialState,
  reducers: {
    logout: () => initialState,
    selectType: (state, action: PayloadAction<number>) => {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      typesApi.endpoints.getAllType.matchFulfilled,
      (state, action) => {
        state.types = action.payload;
      }
    );
  },
});

export default slice.reducer;
export const { selectType } = slice.actions;

export const selectTypes = (state: RootState) => state.types;
