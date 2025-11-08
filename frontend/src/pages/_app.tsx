import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode, useEffect, useState } from 'react';
import RootLayout from '../Layout/RootLayout';

import { useRouter } from 'next/router';

import { Web3Provider } from '@/context/web3model';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/Layout/themeProvider';

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Web3Provider>
      
        {getLayout(<Page {...pageProps} />)}
        <ToastContainer />
      </Web3Provider>
    </ThemeProvider>
  );
}
