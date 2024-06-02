import { IType } from "../../types/types";
import { api } from "./api";

export const typesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllType: builder.query<IType[], void>({
      query: () => ({
        url: "/type",
        method: "GET",
      }),
    }),
    addType: builder.mutation<IType, IType>({
      query: (type) => ({
        url: "/type/create",
        method: "POST",
        body: type,
      }),
    }),
  }),
});

export const { useAddTypeMutation , useGetAllTypeQuery } =
typesApi;

export const {
  endpoints: { getAllType, addType },
} = typesApi;
