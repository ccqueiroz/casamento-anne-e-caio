import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 } },
});

export { queryClient };
