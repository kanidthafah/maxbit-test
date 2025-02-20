import React, { FC } from "react";
import Image from "next/image";
import { PiCoinVerticalFill } from "react-icons/pi";
import * as motion from "motion/react-client";
import { PTCardProps } from "@/types";

const PTCard: FC<PTCardProps> = ({ points }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="bg-[#212122] w-full h-auto sm:h-80 rounded-3xl flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        className="flex items-center"
      >
        <Image
          src="/image/PT-Max-Card.png"
          width={380}
          height={380}
          alt="PT-MAX-CARD PIC"
        />
      </motion.div>
      <div className="flex flex-row sm:flex-col gap-4 text-text2">
        <div>
          <p className="text-sm sm:text-lg font-semibold">Max Card</p>
          <div className="flex items-center">
            <p className="text-xs sm:text-sm font-medium">8364502836</p>
          </div>
        </div>
        <div>
          <p className="text-sm sm:text-lg font-semibold">My Points</p>
          <div className="flex items-center gap-1">
            <PiCoinVerticalFill className="text-yellow-400 w-6 h-6" />
            <p className="text-xs sm:text-sm font-medium">
              {Math.floor(points).toLocaleString("en-US")}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm sm:text-lg font-semibold text-text/30">
            Pending Points
          </p>
          <div className="flex items-center gap-1 text-text2/50">
            <PiCoinVerticalFill className="text-yellow-400 w-6 h-6" />
            <p className="text-xs sm:text-sm font-medium text-text2/50">0</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PTCard;
