import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GithubProfileContextProvider from './contexts/GithubProfileContextProvider';
import UserSearchContextProvider from './contexts/UserSearchContextProvider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserSearchContextProvider>
        <GithubProfileContextProvider>
          <App />
        </GithubProfileContextProvider>
      </UserSearchContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
