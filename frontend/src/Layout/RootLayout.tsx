import Header from '@/components/HeaderComponents/Header';
import { useRouter } from 'next/router';


const RootLayout = (props: any) => {
  const { asPath } = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col bg-nft-dark-gradient text-white">
      <Header/>
     
      <div className="mt-2 ">{props.children}</div>
 
    </div>
  );
};

export default RootLayout;
