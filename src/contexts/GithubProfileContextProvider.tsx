import { createContext, useCallback, useMemo, useState } from 'react';
import {
  useSearchQuery,
  useSearchReposQuery,
  useUserSearchContext,
} from '../lib/hooks';
import { ApiReposResponse, ApiUserResponse } from '../interfaces/interfaces';
import { compareDesc, differenceInDays, parseISO } from 'date-fns';

type GithubProfileContextType = {
  profileData: ApiUserResponse | undefined;
  isLoadingQuery: boolean;
  isErrorQuery: boolean;
  reposData: ApiReposResponse[] | undefined;
  isLoadingRepos: boolean;
  isErrorRepos: boolean;
  numberOfReposToShow: number;
  handleNumberOfReposToShow: () => void;
  calculateDaysSinceUpdate: (updatedAt: string) => number;
  sortedRepos: ApiReposResponse[] | undefined;
};

export const GithubProfileContext =
  createContext<GithubProfileContextType | null>(null);

type GithubProfileContextProviderProps = {
  children: React.ReactNode;
};

export default function GithubProfileContextProvider({
  children,
}: GithubProfileContextProviderProps) {
  // state
  const [numberOfReposToShow, setNumberOfReposToShow] = useState(4);

  // dependency on other context
  const { debouncedValue } = useUserSearchContext();

  // searchQuery
  const {
    data: profileData,
    isLoading: isLoadingQuery,
    isError: isErrorQuery,
  } = useSearchQuery(debouncedValue);
  const {
    data: reposData,
    isLoading: isLoadingRepos,
    isError: isErrorRepos,
  } = useSearchReposQuery(debouncedValue);

  // Sorted repos by the date of last update
  const sortedRepos = useMemo(
    () =>
      [...(reposData || [])].sort((a, b) =>
        compareDesc(parseISO(a.updated_at), parseISO(b.updated_at)),
      ),
    [reposData],
  );

  const totalRepos = reposData?.length || 4;

  const handleNumberOfReposToShow = useCallback(() => {
    setNumberOfReposToShow(totalRepos);
  }, [totalRepos]);

  const calculateDaysSinceUpdate = useCallback((updatedAt: string) => {
    // Parse the ISO date string
    const updatedDate = parseISO(updatedAt);
    // Get the current date
    const currentDate = new Date();
    // Calculate the difference in days
    const difference = differenceInDays(currentDate, updatedDate);

    return difference;
  }, []);

  const contextValue = useMemo(
    () => ({
      profileData,
      isLoadingQuery,
      isErrorQuery,
      reposData,
      isLoadingRepos,
      isErrorRepos,
      numberOfReposToShow,
      handleNumberOfReposToShow,
      calculateDaysSinceUpdate,
      sortedRepos,
    }),
    [
      profileData,
      isLoadingQuery,
      isErrorQuery,
      reposData,
      isLoadingRepos,
      isErrorRepos,
      numberOfReposToShow,
      handleNumberOfReposToShow,
      calculateDaysSinceUpdate,
      sortedRepos,
    ],
  );

  return (
    <GithubProfileContext.Provider value={contextValue}>
      {children}
    </GithubProfileContext.Provider>
  );
}
