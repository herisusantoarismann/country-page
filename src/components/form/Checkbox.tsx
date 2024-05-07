"use client";
import Image from "next/image";
import React, { useState } from "react";

import Checked from "@/assets/images/Done_round.svg";

interface IProps {
  label: string;
  value: boolean | undefined;
  onChange: (value: boolean | undefined) => void;
}

const Checkbox = ({ label, value, onChange }: IProps) => {
  const [isChecked, setIsChecked] = useState(value);

  return (
    <div className="relative flex items-center gap-3">
      <input
        type="checkbox"
        checked={isChecked}
        className="relative h-6 w-6 appearance-none rounded border border-2 border-brand-grey bg-transparent checked:border-none checked:bg-blue-600"
        readOnly
      />
      <label htmlFor={label} className="text-sm text-brand-light-grey">
        {label}
      </label>

      {/* Icon checked */}
      <span
        className="absolute mt-1 h-6 w-6"
        onClick={() => {
          onChange(!isChecked);
          setIsChecked((prevState) => !prevState);
        }}
      >
        <Image
          src={Checked}
          alt="checked-icon"
          className={`h-6 w-6 ${isChecked ? "block" : "hidden"}`}
        />
      </span>
    </div>
  );
};

export default Checkbox;
