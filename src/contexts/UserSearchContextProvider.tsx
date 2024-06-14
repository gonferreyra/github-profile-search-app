import { createContext, useState } from 'react';
import { useDebounce } from '../lib/hooks';

type UserSearchContextType = {
  userSearch: string;
  handleUserSearch: (value: string) => void;
  debouncedValue: string;
};

export const UserSearchContext = createContext<UserSearchContextType | null>(
  null,
);

type UserSearchContextProviderProps = {
  children: React.ReactNode;
};

export default function UserSearchContextProvider({
  children,
}: UserSearchContextProviderProps) {
  const [userSearch, setUserSearch] = useState('GitHub');

  // debounce
  const { debouncedValue } = useDebounce(userSearch);

  const handleUserSearch = (value: string) => {
    setUserSearch(value);
  };

  return (
    <UserSearchContext.Provider
      value={{ userSearch, handleUserSearch, debouncedValue }}
    >
      {children}
    </UserSearchContext.Provider>
  );
}
