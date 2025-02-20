import React, { FC } from "react";
import { Input } from "./ui/input";
import { IoGiftOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const SearchBar: FC = () => {
  return (
    <div className="w-full flex items-center justify-end">
      <div className="relative w-full lg:w-2/3 flex items-center gap-2">
        <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-text w-6 h-6" />
        <Input
          type="text"
          placeholder="Search discount or promotion"
          className="ps-10"
        />
        <IoGiftOutline className="text-text2 w-7 h-7" />
      </div>
    </div>
  );
};

export default SearchBar;
