import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode, useEffect, useState } from 'react';
import RootLayout from '../Layout/RootLayout';

import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '@/reducer/store';
import SocketListener from '@/Layout/SocketListener';
import { Web3Provider } from '@/context/web3model';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const Page = Component as NextPageWithLayout;

  let getLayout: (page: ReactNode) => ReactNode;

  // if (asPath.startsWith('/admin')) {
  //   getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
  //  } else {
    // fallback
    getLayout = Page.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);
  // }

  return (
    <Web3Provider>
      <Provider store={store}>
        {/* <SocketListener /> */}
        {getLayout(<Page {...pageProps} />)}
        <ToastContainer/>
      </Provider>
    </Web3Provider>
  );
}
