"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { eq } from "drizzle-orm";
import Templates from "@/app/(data)/Templates";
import { Loader2Icon } from "lucide-react";

export interface AIHistory {
  id: number;
  templateSlug: string;
  aiResponse: string;
  createdAt: string;
}

const HistorySection = () => {
  const [historyData, setHistoryData] = useState<AIHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const { user } = useUser();
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({}); // Track expanded responses

  useEffect(() => {
    const fetchData = async () => {
      const userEmail = user?.primaryEmailAddress?.emailAddress;
      if (!userEmail) return;

      try {
        const data = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, userEmail));

        const filteredData = data.map((item) => ({
          ...item,
          aiResponse: item.aiResponse || "",
          createdAt: item.createdAt || "",
        })) as AIHistory[];

        setHistoryData(filteredData);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    };

    fetchData();
  }, [user]);

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      alert("Content copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy content:", err);
    }
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white m-10 rounded-lg">
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-5">History</h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            {/* <Spinner className="w-10 h-10 text-purple-600 animate-spin" /> */}
            <Loader2Icon className="w-10 h-10 text-purple-600 animate-spin" />
            <p className="ml-3 text-gray-500">Loading...</p>
          </div>
        ) : historyData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Template
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left max-w-[300px]">
                    AI Response
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Date
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Copy
                  </th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {item.templateSlug}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 break-words max-w-[300px]">
                      {expanded[item.id] ? (
                        <>
                          {item.aiResponse}
                          <Button
                            onClick={() => toggleExpand(item.id)}
                            variant="link"
                            className="ml-2 text-blue-600"
                          >
                            Show Less
                          </Button>
                        </>
                      ) : (
                        <>
                          {item.aiResponse.slice(0, 100)}...
                          <Button
                            onClick={() => toggleExpand(item.id)}
                            variant="link"
                            className="ml-2 text-blue-600"
                          >
                            Read More
                          </Button>
                        </>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {moment(item.createdAt, "YYYY-MM-DD").format(
                        "MMM DD, YYYY"
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <Button
                        onClick={() => handleCopy(item.aiResponse)}
                        variant="outline"
                      >
                        Copy
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No history found.</p>
        )}
      </div>
    </div>
  );
};

export default HistorySection;
