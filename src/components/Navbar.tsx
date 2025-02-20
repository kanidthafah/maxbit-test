'use client'
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LuWallet } from "react-icons/lu";
import { LuTimerReset } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import { BiDownload } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import * as motion from "motion/react-client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Links } from "@/types";

const Navbar: FC = () => {
  const pathname = usePathname();
  const links: Links[] = [
    { name: "Market", path: "/market" },
    { name: "Buy/Sell", path: "/buy-sell" },
    { name: "Privilege", path: "/privilege" },
    { name: "Partner Program", path: "/partner-program" },
    { name: "OTC", path: "/otc" },
  ];
  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
      }}
      className="w-full h-16 fixed top-0 bg-bg border-0 lg:border-b-[1px] lg:border-text flex justify-between items-center px-5 text-text2 z-50"
    >
      <div className="flex justify-between gap-4 xl:gap-6 text-[14px] xl:text-base font-semibold">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/maxbit.svg"
            width={100}
            height={100}
            alt="MAX BIT LOGO"
          />
        </Link>
        <div className="hidden lg:flex gap-1 xl:gap-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path ? "bg-primary text-bg" : "bg-none"
              } px-1.5 xl:px-2.5 py-1 xl:py-2 rounded-lg`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 xl:gap-6 text-text2">
        <Link href="#" className="hidden lg:block">
          <LuWallet className="w-6 h-6" />
        </Link>
        <Link href="#" className="hidden lg:block">
          <LuTimerReset className="w-6 h-6" />
        </Link>
        <Link href="#">
          <MdNotificationsNone className="w-6 h-6" />
        </Link>
        <Link href="#" className="hidden lg:block">
          <BiDownload className="w-6 h-6" />
        </Link>
        <div className="relative w-full hidden lg:block">
          <MdLanguage className="absolute top-1/2 -translate-y-1/2 left-2 w-6 h-6 text-text2" />
          <Select defaultValue="english">
            <SelectTrigger className="w-[130px] xl:w-[150px] ps-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="chinese">简体中文</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="thai">ไทย</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Link href="#">
          <GoPerson className="w-6 h-6" />
        </Link>
        <button className="block lg:hidden">
          <FaBars className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;

