import { IBrand } from "../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { brandsApi } from "../services/brands";

interface InitialState {
  types: IBrand[] | null;
  selectedBrand: number | null;
}

const initialState: InitialState = {
  types: null,
  selectedBrand: null,
};

const slice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    logout: () => initialState,
    selectBrand: (state, action: PayloadAction<number>) => {
      state.selectedBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      brandsApi.endpoints.getAllBrand.matchFulfilled,
      (state, action) => {
        state.types = action.payload;
      }
    );
  },
});

export default slice.reducer;
export const { selectBrand } = slice.actions;

export const selectTypes = (state: RootState) => state.brands;
