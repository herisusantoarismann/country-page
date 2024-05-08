import React from "react";
import Thead from "./Thead";
import { Country } from "@/stores/countryStore";

interface IProps {
  headers: string[];
  countries: Country[];
}

function Table({ headers, countries }: IProps) {
  return (
    <table className="w-full border-separate overflow-x-auto">
      <Thead headers={headers} />
      <tbody>
        {countries.map((country: Country, index: number) => {
          return (
            <tr key={index}>
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
              <td className="text-sm text-brand-light-grey">
                {country.region}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
