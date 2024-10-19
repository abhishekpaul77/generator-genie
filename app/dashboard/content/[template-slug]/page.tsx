"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft, Divide } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user}=useUser();
  const {totalUsage,setTotalUsage} = useContext(TotalUsageContext);
  const router = useRouter();
  const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext);

  /**
   * Used to generate AI content
   * @param formData 
   * @returns 
   */

  const GenerateAIContent = async (formData: any) => {
    if(totalUsage>=10000){
      alert('You have reached your daily limit of 10000 words requests');
      router.push('/dashboard/billing');
      return;
    }
    
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    setLoading(true);

    const FinalAIPrompt = JSON.stringify(formData) + "," + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    // console.log(result.response.text());
    setAiOutput(result.response.text());
    await SaveInDb(formData,selectedTemplate?.slug,result.response.text());
    setLoading(false);

    setUpdateCreditUsage(Date.now());
  };
  


  const SaveInDb=async (formData:any,slug:any,aiRes:string)=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiRes,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/YYYY'),
    })

    console.log(result);
  }

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* formSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          loading={loading}
          userFormInput={(v: any) => GenerateAIContent(v)}
        />

        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
