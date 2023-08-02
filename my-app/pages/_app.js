import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import axios from 'axios';
import Layout from '../components/layout/layout';
import {Toaster} from "react-hot-toast";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import '../styles/globals.css';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

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
  <ReactQueryDevtools initialIsOpen={false} />
  
    </QueryClientProvider>
    );
}

export default App;