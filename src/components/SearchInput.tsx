import React, { ChangeEvent } from "react";

import Search from "@/assets/images/Search.svg";
import Image from "next/image";
import useCountriesStore from "@/stores/countryStore";

interface IProps {
  placeholder: string;
}

function SearchInput({ placeholder }: IProps) {
  const { setState } = useCountriesStore();

  return (
    <div className="flex w-full items-center gap-2 rounded-lg bg-brand-grey/40 px-3 py-2 lg:w-2/5 lg:gap-4 lg:px-4 lg:py-3 xl:w-1/5">
      <Image src={Search} alt="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border-none bg-transparent text-sm text-brand-light-grey outline-none placeholder:text-xs lg:text-base lg:placeholder:text-sm"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const keyword = e.target.value;

          setState("keyword", keyword);
        }}
      />
    </div>
  );
}

export default SearchInput;
