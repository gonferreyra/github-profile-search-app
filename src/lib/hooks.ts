import { useQuery } from '@tanstack/react-query';
import { ApiReposResponse, ApiUserResponse } from '../interfaces/interfaces';
import { BASE_API_URL } from './constants';
import { useEffect, useState } from 'react';
import { handleError } from './utils';

// type GitHubApiResponse = {
//   data: ApiUserResponse;
// };

export const fetchGithubProfiles = async (
  userName: string,
): Promise<ApiUserResponse> => {
  const response = await fetch(`${BASE_API_URL}/${userName}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};

export const useSearchQuery = (userName: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', userName],
    queryFn: () => fetchGithubProfiles(userName),
    staleTime: 1000 * 60 * 60, // 1 hora
    refetchOnWindowFocus: false,
    enabled: Boolean(userName),
    retry: false,
    onError: handleError,
  });

  return { data, isLoading, isError };
};

// ----------------------------------------------------------------------

export const fetchGithubRepos = async (
  userName: string,
): Promise<ApiReposResponse[]> => {
  const response = await fetch(`${BASE_API_URL}/${userName}/repos`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  console.log(data);
  return data;
};

export const useSearchReposQuery = (userName: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['repos', userName],
    queryFn: () => fetchGithubRepos(userName),
    staleTime: 1000 * 60 * 60, // 1 hora
    refetchOnWindowFocus: false,
    enabled: Boolean(userName),
    retry: false,
    onError: handleError,
  });

  return { data, isLoading, isError };
};

// ----------------------------------------------------------------------

export function useDebounce(textToFetch: string) {
  const [debouncedValue, setDebouncedValue] = useState(textToFetch);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(textToFetch);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [textToFetch]);

  return { debouncedValue };
}
