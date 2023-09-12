import axios from "axios";
import { useMutation } from "react-query";

const apiUrl = "https://1dff-2601-680-8004-a320-70b7-9a2c-867b-6928.ngrok.io";

export function useChat() {
  return useMutation(
    (data: { query: string }) => {
      return axios
        .post(`${apiUrl}/chat`, data)
        .then(({ data }) => {
          return data;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    },
    {
      onSuccess: (data) => {
        return data;
      },
      onError: (err: Error) => {
        throw new Error(err.message);
      },
    }
  );
}
