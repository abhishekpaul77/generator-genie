"use client";
import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS {
  aiOutput:string;
}

const OutputSection = ({aiOutput}:PROPS) => {
  const editorRef:any =useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className="flex justify-between items-center p-5">
      <h2 className='font-bold text-lg'>Your Result</h2>
      <Button 
        className='flex gap-2' 
        onClick={() => {
          navigator.clipboard.writeText(aiOutput);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        <Copy className='w-4 h-4'/>
        {copied ? 'Copied' : 'Copy'}
      </Button>
      </div>
 
      <Editor
      ref={editorRef}
    initialValue="Your result will be displayed here"
    initialEditType="wysiwyg"
    height="600px"
    useCommandShortcut={true}
    onChange={() => {console.log(editorRef.current.getInstance().getMarkdown())}}
  />
    </div>
  )
}

export default OutputSection