import Footer from '@/components/FooterComponents/Footer';
import Header from '@/components/HeaderComponents/Header';
import HeadLine from '@/components/HeaderComponents/HeadLine';
import { useRouter } from 'next/router';
import { useState } from 'react';


const RootLayout = (props: any) => {
  const { asPath } = useRouter();

  const [headlineOpen, setheadlineOpen] = useState(true);

  return (
    <div className="w-full min-h-screen flex flex-col text-white">
        {headlineOpen && <HeadLine Open={headlineOpen} setOpen={setheadlineOpen} />}
      <Header/>
      <div className="overflow-x-hidden">{props.children}</div>
      <Footer/>
    </div>
  );
};

export default RootLayout;
