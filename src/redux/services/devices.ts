import { IDevice } from "../../types/types";
import { api } from "./api";

export const deviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllDevice: builder.query<IDevice[], void>({
      query: () => ({
        url: "/device",
        method: "GET",
      }),
    }),
    getDevice: builder.query<IDevice, string>({
      query: (id) => ({
        url: `/device/${id}`,
        method: "GET",
      }),
    }),
    addDevice: builder.mutation<IDevice, IDevice>({
      query: (device) => ({
        url: "/device/create",
        method: "POST",
        body: device,
      }),
    }),
  }),
});

export const { useAddDeviceMutation, useGetDeviceQuery, useGetAllDeviceQuery } =
  deviceApi;

export const {
  endpoints: { getAllDevice, getDevice, addDevice },
} = deviceApi;
