import { createContext, useState } from 'react';
import { useDebounce, useSearchQuery, useSearchReposQuery } from '../lib/hooks';
import { ApiReposResponse, ApiUserResponse } from '../interfaces/interfaces';
import { differenceInDays, parseISO } from 'date-fns';

type GithubProfileContextType = {
  userSearch: string;
  handleUserSearch: (value: string) => void;
  profileData: ApiUserResponse | undefined;
  isLoadingQuery: boolean;
  isErrorQuery: boolean;
  reposData: ApiReposResponse[] | undefined;
  isLoadingRepos: boolean;
  isErrorRepos: boolean;
  numberOfReposToShow: number;
  handleNumberOfReposToShow: () => void;
  calculateDaysSinceUpdate: (updatedAt: string) => number;
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
  const [userSearch, setUserSearch] = useState('GitHub');
  const [numberOfReposToShow, setNumberOfReposToShow] = useState(4);

  // debounce
  const { debouncedValue } = useDebounce(userSearch);

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

  const totalRepos = reposData?.length || 4;

  const handleUserSearch = (value: string) => {
    setUserSearch(value);
  };

  const handleNumberOfReposToShow = () => {
    setNumberOfReposToShow(totalRepos);
  };

  function calculateDaysSinceUpdate(updatedAt: string) {
    // Parse the ISO date string
    const updatedDate = parseISO(updatedAt);
    // Get the current date
    const currentDate = new Date();
    // Calculate the difference in days
    const difference = differenceInDays(currentDate, updatedDate);

    return difference;
  }

  return (
    <GithubProfileContext.Provider
      value={{
        userSearch,
        handleUserSearch,
        profileData,
        isLoadingQuery,
        isErrorQuery,
        reposData,
        isLoadingRepos,
        isErrorRepos,
        numberOfReposToShow,
        handleNumberOfReposToShow,
        calculateDaysSinceUpdate,
      }}
    >
      {children}
    </GithubProfileContext.Provider>
  );
}
