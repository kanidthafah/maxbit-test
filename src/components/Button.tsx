import React, { FC } from "react";
import { TbBuildingStore } from "react-icons/tb";
import { GiMirrorMirror } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import { LuArmchair } from "react-icons/lu";
import * as motion from "motion/react-client";
import { IconFilters, ButtonProps } from "@/types";

const Button: FC<ButtonProps> = ({ onCategorySelect}) => {
  const iconFilters: IconFilters[] = [
    {
      name: "Groceries",
      icon: <TbBuildingStore className="w-8 h-8 md:w-10 md:h-10" />,
      category: "groceries",
    },
    {
      name: "Beauty",
      icon: <GiMirrorMirror className="w-8 h-8 md:w-10 md:h-10" />,
      category: "beauty",
    },
    {
      name: "Fragrances",
      icon: <TbPerfume className="w-8 h-8 md:w-10 md:h-10" />,
      category: "fragrances",
    },
    {
      name: "Furniture",
      icon: <LuArmchair className="w-8 h-8 md:w-10 md:h-10" />,
      category: "furniture",
    },
  ];

  return (
    <motion.div
      initial={{ y: "15%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 1.2, duration: 0.8, ease: "easeIn" },
      }}
      className="flex justify-center items-center gap-4 md:gap-6"
    >
      {iconFilters.map((filter, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 text-text cursor-pointer"
          onClick={() => onCategorySelect(filter.category)}
        >
          <div
            className={`w-14 h-14 md:w-16 md:h-16 bg-[#212122] rounded-xl border border-text flex flex-col justify-center items-center gap-1 hover:scale-105 transition-all duration-200`}
          >
            {filter.icon}
          </div>
          <p className="text-[12px]">{filter.name}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Button;
