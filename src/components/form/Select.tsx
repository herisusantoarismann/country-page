import Image from "next/image";
import React, { ChangeEvent } from "react";

import ChevronDown from "@/assets/images/Expand_down.svg";
import useCountriesStore from "@/stores/countryStore";

export interface ISelectOption {
  label: string;
  value: string;
}

interface IProps {
  label: string;
  name: string;
  options: ISelectOption[];
}

const Select = ({ label, name, options }: IProps) => {
  const { setState } = useCountriesStore((state) => state);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-sm font-semibold text-brand-grey">
        {label}
      </label>
      <div className="relative w-full overflow-hidden rounded-lg border border-brand-grey">
        <select
          className="mr-2 w-full appearance-none bg-secondary px-4 py-2 text-brand-light-grey"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;

            setState(name, value);
          }}
        >
          {options.map((option: ISelectOption, index: number) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        {/* Chevron down */}
        <Image
          src={ChevronDown}
          alt="chevron-down-icon"
          className="absolute right-4 top-2/4 -translate-y-2/4"
        />
      </div>
    </div>
  );
};

export default Select;
