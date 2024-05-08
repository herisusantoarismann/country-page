import React from "react";
import Thead from "./Thead";
import { Country } from "@/stores/countryStore";
import TBody from "./TBody";

interface IProps {
  headers: string[];
  countries: Country[];
}

function Table({ headers, countries }: IProps) {
  return (
    <table className="w-full border-collapse overflow-x-auto">
      <Thead headers={headers} />
      <TBody data={countries} />
    </table>
  );
}

export default Table;
