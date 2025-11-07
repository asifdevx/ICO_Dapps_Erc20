import Hero from '@/components/HeroComponent/Hero';
import { usePublicIcoData } from '@/hooks/usePublicIcoData';
import React, { useEffect } from 'react';

const index = () => {
  const { data } = usePublicIcoData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
    <main className=" w-full">
      <Hero />
    
    </main>
    
    </>
  );
};

export default index;
