"use client";
import React, { FC } from "react";
import Link from "next/link";
import { PiCoinVerticalFill } from "react-icons/pi";
import { ProductProps } from "@/types";

const ProductCard: FC<ProductProps> = ({
  title,
  description,
  price,
  thumbnail,
  redeemProduct,
}) => {
  return (
    <Link
      href="#"
      className="w-full h-80 flex flex-col justify-between bg-[#212122] rounded-xl cursor-pointer"
    >
      <div className="overflow-hidden h-[200px] rounded-t-xl">
        <img
          src={thumbnail}
          alt={title}
          className="hover:scale-110 duration-150 transition-all ease-out  object-contain h-full w-full bg-white"
        />
      </div>
      <div className="flex flex-col gap-1 p-3">
        <p className="text-sm font-semibold text-text2 capitalize line-clamp-1">
          {title}
        </p>
        <p className="text-text text-[10px] font-light line-clamp-1">
          {description}
        </p>
        <div className="inline-flex justify-between mb-2">
          <p className="inline-flex items-center text-text2 text-xs font-medium gap-1">
            <span>
              <PiCoinVerticalFill className="text-yellow-400 w-4 h-4" />
            </span>
            {price}
            {/* {Math.floor(price * 20).toLocaleString("en-US")} */}
          </p>
          <button
            onClick={() => redeemProduct(price)}
            className="bg-primary rounded-3xl px-3 py-2 text-xs font-semibold text-bg capitalize mt-2 hover:scale-105 hover:bg-primary/70 transition-all"
          >
            Redeem
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
