import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return <>
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  </QueryClientProvider>


  </>;
}

export default App;
