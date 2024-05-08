import React from "react";

interface IProps {
  headers: string[];
}

function Thead({ headers }: IProps) {
  return (
    <thead className="sticky top-0 bg-secondary">
      <tr className="border-b-2 border-brand-grey text-left text-sm text-brand-grey">
        {headers.map((header: string, index: number) => {
          return (
            <th
              key={index}
              className={`border-b border-brand-grey pb-4 ${index === 0 ? "min-w-[85px]" : "min-w-[150px]"}`}
              dangerouslySetInnerHTML={{ __html: header }}
            ></th>
          );
        })}
      </tr>
    </thead>
  );
}

export default Thead;
