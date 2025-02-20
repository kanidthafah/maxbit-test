"use client";
import React, { FC } from "react";
import { PiCoinVerticalFill } from "react-icons/pi";
import Image from "next/image";
import { ActivitiesProps } from "@/types";

const ActivitiesBox: FC<ActivitiesProps> = ({ activities }) => {
  return (
    <div className="relative w-full max-h-[350px] flex flex-col gap-3 overflow-y-scroll">
      <div className="sticky top-0 w-full bg-bg flex justify-between items-center border-b border-text2">
        <p className="text-text2 text-base font-semibold">Recent Activities</p>
        <p className="text-text text-sm">See all</p>
      </div>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-4"
        >
          <div className="flex gap-3 items-center">
            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-primary">
              <Image
                src="/maxbit.svg"
                width={30}
                height={30}
                alt="MAX BIT LOGO"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-text2 text-sm">ซื้อขายสินทรัพย์ดิจิทัล</p>
              <p className="text-text text-xs">Maxbit</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="inline-flex justify-end gap-1 items-center">
              <PiCoinVerticalFill className="text-yellow-400 w-4 h-4" />
              <p className="text-primary text-sm">
                + {activity.points}
              </p>
            </div>
            <p className="text-text text-xs">{activity.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesBox;
