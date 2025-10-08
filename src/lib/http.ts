import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

// 可根据环境或 .env 配置
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";

export type HttpError = {
  status?: number;
  message: string;
  code?: string | number;
  data?: unknown;
};

function createHttpClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    withCredentials: true,
  });

  // 请求拦截器：添加鉴权、统一 headers 等
  instance.interceptors.request.use((config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers = config.headers ?? {};
      (config.headers as Record<string, string>)[
        "Authorization"
      ] = `Bearer ${token}`;
    }
    return config;
  });

  // 响应拦截器：统一错误处理、数据解包
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      const httpError: HttpError = {
        status: error.response?.status,
        message:
          error.response?.data && typeof error.response.data === "object"
            ? (error.response.data as any).message ?? error.message
            : error.message,
        data: error.response?.data,
        code: (error.response?.data as any)?.code,
      };
      return Promise.reject(httpError);
    }
  );

  return instance;
}

export const http = createHttpClient();

// 便捷方法
export async function get<T = unknown>(
  url: string,
  config?: AxiosRequestConfig
) {
  const res = await http.get<T>(url, config);
  return res.data as T;
}

export async function post<T = unknown, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
) {
  const res = await http.post<T>(url, body, config);
  return res.data as T;
}

export async function put<T = unknown, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig
) {
  const res = await http.put<T>(url, body, config);
  return res.data as T;
}

export async function del<T = unknown>(
  url: string,
  config?: AxiosRequestConfig
) {
  const res = await http.delete<T>(url, config);
  return res.data as T;
}
