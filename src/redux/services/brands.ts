import { IBrand } from "../../types/types";
import { api } from "./api";

export const brandsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrand: builder.query<IBrand[], void>({
      query: () => ({
        url: "/brand",
        method: "GET",
      }),
    }),
    addBrand: builder.mutation<IBrand, IBrand>({
      query: (type) => ({
        url: "/brand/create",
        method: "POST",
        body: type,
      }),
    }),
  }),
});

export const { useAddBrandMutation, useGetAllBrandQuery } = brandsApi;

export const {
  endpoints: { getAllBrand, addBrand },
} = brandsApi;
