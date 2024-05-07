"use client";

import useCountriesStore from "@/stores/countryStore";
import React from "react";

interface IProps {
  label: string;
  onClick: () => void;
}

function RegionItem({ label, onClick }: IProps) {
  const { selectedRegions } = useCountriesStore();

  return (
    <span
      className={`rounded-xl px-5 py-3 text-sm text-brand-light-grey ${selectedRegions.includes(label) && "bg-brand-grey/20"} cursor-pointer transition hover:bg-brand-grey/20`}
      onClick={onClick}
    >
      {label}
    </span>
  );
}

export default RegionItem;
