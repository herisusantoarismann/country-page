import { Country } from "@/stores/countryStore";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  data: Country[];
}

const TBody = ({ data }: IProps) => {
  const { push } = useRouter();

  const handleClick = (code: string) => {
    push(`/${code.toLowerCase()}`);
  };

  return (
    <tbody>
      {data.map((country: Country, index: number) => {
        return (
          <tr
            key={index}
            className="cursor-pointer hover:bg-[#2f3238]"
            onClick={() => handleClick(country.cca3)}
          >
            <td className="py-4">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-16 rounded"
              />
            </td>
            <td className="w-1/3 text-sm text-brand-light-grey">
              {country.name.common}
            </td>
            <td className="text-sm text-brand-light-grey">
              {country.population.toLocaleString("id-ID")}
            </td>
            <td className="text-sm text-brand-light-grey">
              {country.area.toLocaleString("id-ID")}
            </td>
            <td className="text-sm text-brand-light-grey">{country.region}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TBody;
