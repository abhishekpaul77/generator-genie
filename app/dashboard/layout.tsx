"use client"
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [totalUsage, setTotalUsage] = useState<Number>(0); 
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>()

  

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>
    {/* <TotalUsageProvider>    */}
    {/* <UpdateCreditUsageProvider> */}
      <div className="bg-slate-100 h-100% p-3">
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
        </div>
    </div>
    {/* </UpdateCreditUsageProvider>
    </TotalUsageProvider> */}
 
    </UpdateCreditUsageContext.Provider>  
     </TotalUsageContext.Provider>
  );
};

export default layout;
