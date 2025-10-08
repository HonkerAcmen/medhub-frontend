import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
  QueryKey,
} from "@tanstack/react-query";
import { del, get, post, put } from "./http";

// GET hook
export function useGetQuery<TData = unknown>(
  key: QueryKey,
  url: string,
  options?: UseQueryOptions<TData>
) {
  return useQuery({
    queryKey: key,
    queryFn: () => get<TData>(url),
    ...options,
  });
}

// POST mutation
export function usePostMutation<TRes = unknown, TVars = unknown>(
  url: string,
  options?: UseMutationOptions<TRes, unknown, TVars>
) {
  return useMutation<TRes, unknown, TVars>({
    mutationFn: (vars: TVars) => post<TRes, TVars>(url, vars),
    ...options,
  });
}

// PUT mutation
export function usePutMutation<TRes = unknown, TVars = unknown>(
  url: string,
  options?: UseMutationOptions<TRes, unknown, TVars>
) {
  return useMutation<TRes, unknown, TVars>({
    mutationFn: (vars: TVars) => put<TRes, TVars>(url, vars),
    ...options,
  });
}

// DELETE mutation
export function useDeleteMutation<TRes = unknown>(
  url: string,
  options?: UseMutationOptions<TRes, unknown, void>
) {
  return useMutation<TRes, unknown, void>({
    mutationFn: () => del<TRes>(url),
    ...options,
  });
}
