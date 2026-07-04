import { AppRouter } from '@/app/router/AppRouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/queryClient';

export const AppProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};
