import React from "react";

interface IProps {
  label: string;
  value: number | string;
}

const CountryDetail = ({ label, value }: IProps) => {
  return (
    <div className="flex items-center justify-between p-6 text-sm">
      <span className="flex-1 text-brand-grey">{label}</span>
      <span className="flex-1 text-right text-brand-light-grey">{value}</span>
    </div>
  );
};

export default CountryDetail;
