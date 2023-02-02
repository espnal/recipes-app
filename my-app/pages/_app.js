import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Layout from '../componets/layout/layout';
import {Toaster} from "react-hot-toast";
import '../styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

function App({ Component, pageProps }) {
  return (
  <QueryClientProvider client={queryClient}>
    <Toaster
    position="bottom-right"
    toastOptions={{
      toastOptions:{
        style:{
          fontSize:"1.4rem",
        }
      }
    }}
    />

    <Layout>
      <Component{...pageProps}/>
    </Layout>
    </QueryClientProvider>
    );
}

export default App;