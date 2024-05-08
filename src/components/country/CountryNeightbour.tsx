import React from "react";

interface IProps {
  flag: string;
  name: string;
}

const CountryNeightbour = ({ flag, name }: IProps) => {
  return (
    <div className="flex w-20 flex-col gap-2">
      <img
        src={flag}
        alt={name}
        className="h-12 w-fit overflow-hidden rounded"
      />
      <p className="text-sm text-brand-light-grey">{name}</p>
    </div>
  );
};

export default CountryNeightbour;
