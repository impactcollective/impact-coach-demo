import { QueryClient } from "react-query";
import type { QueryKeys } from "./queryNames.api";

export const apiUrl = import.meta.env.VITE_ADMIN_API_URL;

export const graniteApiUrl = "https://api.graniteaccess.io";

export const invalidateQueries = (
  queryClient: QueryClient,
  keys: QueryKeys[]
) => {
  keys.forEach((key) => queryClient.invalidateQueries(key));
};
