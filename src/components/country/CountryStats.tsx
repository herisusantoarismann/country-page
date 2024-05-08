import React from "react";

interface IProps {
  label: string;
  value: number | string;
}

const CountryStats = ({ label, value }: IProps) => {
  return (
    <div className="flex w-full items-center divide-x divide-secondary rounded-lg bg-brand-grey/25 py-4 text-brand-light-grey lg:w-fit">
      <span
        className="px-8 text-sm"
        dangerouslySetInnerHTML={{ __html: label }}
      ></span>
      <span className="px-8">{value}</span>
    </div>
  );
};

export default CountryStats;
