


import ConnectBtn from "@/components/commonComponents/ConnectBtn";
import { usePublicIcoData } from "@/hooks/usePublicIcoData";
import React ,{useEffect} from "react";

const index = () => {
  const {data}= usePublicIcoData();
  
  useEffect(() => {
    console.log(data)
  
    
  }, [data])
  
  return (
    <section className="section_padding w-full flex flex-col gap-8 ">
      
     <ConnectBtn/>
    </section>
  );
};

export default index;
