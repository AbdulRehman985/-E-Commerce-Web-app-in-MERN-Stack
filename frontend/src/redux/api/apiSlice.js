import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../features/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const apiSlice = createApi({
  baseQuery,
  credentials: "include",
  tagTypes: ["Product", "Order", "User", "Category"],
  endpoints: () => ({}),
});
