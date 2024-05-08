"use client";

import DefaultLayout from "@/layouts/Default";
import countryServices from "@/services/country";
import useCountriesStore from "@/stores/countryStore";
import React, { useEffect } from "react";

interface IProps {
  params: {
    name: string;
  };
}

const { getCountry } = countryServices();

const Detail = ({ params }: IProps) => {
  const { setState, country } = useCountriesStore();

  useEffect(() => {
    const getData = async () => {
      const name = params?.name;

      const { data } = await getCountry(name);

      setState("country", data[0]);
    };

    getData();
  }, []);

  return (
    <DefaultLayout>
      <div className="mx-auto w-fit rounded-lg border border-brand-grey bg-secondary">
        {country ? (
          <div className="relative -top-10 flex flex-col gap-10">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="mx-auto w-1/4 rounded-lg"
            />
            <div className="flex flex-col gap-1 text-center text-brand-light-grey">
              <h1 className="text-4xl font-semibold">{country.name.common}</h1>
              <h2 className="">{country.name.official}</h2>
            </div>
            <div className="mx-auto flex justify-center gap-6 px-24">
              <div className="flex w-fit items-center divide-x divide-secondary rounded-lg bg-brand-grey/25 py-4 text-brand-light-grey">
                <span className="px-8 text-sm">Population</span>
                <span className="px-8">
                  {country.population.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex w-fit items-center divide-x divide-secondary rounded-lg bg-brand-grey/25 py-4 text-brand-light-grey">
                <span className="px-8 text-sm">
                  Area (km<sup>2</sup>)
                </span>
                <span className="px-8">
                  {country.area.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
            <div className="flex flex-col divide-y divide-brand-grey/25 border-y border-brand-grey/25">
              <div className="flex items-center justify-between p-6 text-sm">
                <span className="flex-1 text-brand-grey">Capital</span>
                <span className="flex-1 text-right text-brand-light-grey">
                  {country.capital.join(", ")}
                </span>
              </div>
              <div className="flex items-center justify-between p-6 text-sm">
                <span className="flex-1 text-brand-grey">Subregion</span>
                <span className="flex-1 text-right text-brand-light-grey">
                  {country.subregion}
                </span>
              </div>
              <div className="flex items-center justify-between p-6 text-sm">
                <span className="flex-1 text-brand-grey">Language</span>
                <span className="flex-1 text-right text-brand-light-grey">
                  {Object.values(country.languages).join(", ")}
                </span>
              </div>
              <div className="flex items-center justify-between p-6 text-sm">
                <span className="flex-1 text-brand-grey">Currencies</span>
                <span className="flex-1 text-right text-brand-light-grey">
                  {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </div>
              <div className="flex items-center justify-between p-6 text-sm">
                <span className="flex-1 text-brand-grey">Continents</span>
                <span className="flex-1 text-right text-brand-light-grey">
                  {country.continents.join(", ")}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p>Country Null</p>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Detail;
