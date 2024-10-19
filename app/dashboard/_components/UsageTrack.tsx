"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import { AIHistory } from '../history/page'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import Link from 'next/link'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

const UsageTrack = () => {
    const {user}=useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

    const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);


    useEffect(() => {
     user && GetData();
    }, [user,updateCreditUsage])
    


    const GetData=async()=>{
        {/* @ts-ignore */} 
        const result:AIHistory[]=await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

        GetTotalUsage(result);
    }

    const GetTotalUsage=(result:AIHistory[])=>{
        let total:number=0;
        result.forEach((element)=>{
            total=total +Number(element.aiResponse?.length);
        });

        setTotalUsage(total);
        console.log(total);
    }

    const getUsagePercentage = () => {
      const percentage = (totalUsage / 10000) * 100;
      return Math.min(percentage, 100); // Cap at 100%
  }

    return (
        <div className="m-5">
          <div className="bg-primary text-white rounded-lg p-3">
            <h2 className="font-medium">Credits</h2>
            <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
              <div
                className="h-2 bg-white rounded-full"
                style={{
                  width: `${getUsagePercentage()}%`,
                }}
              ></div>
            </div>
            <h2 className="text-sm my-2">{totalUsage}/10,000 Credits Used</h2>
          </div>
          <Link href={'/dashboard/billing'}>
          <Button variant={"secondary"} className="w-full my-3 text-primary">
            Upgrade
          </Button>
          </Link>
        </div>
      );
      

    }
export default UsageTrack