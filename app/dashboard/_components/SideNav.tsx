"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CreditCard, FileClock, Home, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: CreditCard,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={70} height={70} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} >
            <div
              key={index}
              className={`flex gap-2 p-3 mb-3 cursor-pointer hover:bg-primary hover:text-white rounded-lg items-center ${
                path == menu.path && "bg-primary text-white"
              }`}
            >
              <menu.icon className="h-6 w-7" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 w-full ">
        <UsageTrack/>
      </div>
    </div>
  );
};

export default SideNav;
