import React from "react";

interface IProps {
  label: String;
}

function RegionItem({ label }: IProps) {
  return (
    <span className="text-brand-light-grey rounded-xl bg-brand-grey/20 px-5 py-3 text-sm">
      {label}
    </span>
  );
}

export default RegionItem;
