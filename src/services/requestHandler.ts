// api.ts
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const baseURL = process.env.HOST || "http://localhost:3000";

const api = axios.create({
  baseURL,
  timeout: 10000,
});

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface ApiError {
  message: string;
  status?: number;
}

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api(config);

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<ApiError> = error;

      const { response } = axiosError;

      if (response) {
        throw new Error(response.data.message);
      } else {
        throw new Error("An error occurred while processing the request");
      }
    }

    throw error;
  }
};

export default request;
