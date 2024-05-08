"use client";

import CountryDetail from "@/components/country/CountryDetail";
import CountryNeightbour from "@/components/country/CountryNeightbour";
import CountryStats from "@/components/country/CountryStats";
import DefaultLayout from "@/layouts/Default";
import countryServices from "@/services/country";
import useCountriesStore, { Country } from "@/stores/countryStore";
import React, { useEffect } from "react";

interface IProps {
  params: {
    name: string;
  };
}

const { getCountry, getCountryByCode } = countryServices();

const Detail = ({ params }: IProps) => {
  const { setState, country } = useCountriesStore();

  useEffect(() => {
    const getData = async () => {
      const name = params?.name;

      const { data } = await getCountry(name);

      let neighbourContries = [];
      for (let i = 0; i < data[0].borders.length; i++) {
        const cca3 = data[0].borders[i];
        const response = await getCountryByCode(cca3);

        neighbourContries.push(response.data[0]);
      }
      data[0].neighboringCountries = neighbourContries;

      setState("country", data[0]);
    };

    getData();
  }, []);

  const details = [
    {
      label: "Capital",
      value: country?.capital.join(", "),
    },
    {
      label: "Subregion",
      value: country?.subregion,
    },
    {
      label: "Language",
      value: (country && Object.values(country!.languages).join(", ")) ?? "",
    },
    {
      label: "Currencies",
      value:
        (country &&
          Object.values(country.currencies)
            .map((currency) => currency.name)
            .join(", ")) ??
        "",
    },
    {
      label: "Continents",
      value: country?.continents.join(", "),
    },
  ];

  return (
    <DefaultLayout>
      <div className="mx-auto w-fit rounded-lg border border-brand-grey bg-secondary">
        {country ? (
          <div className="relative -top-10 flex h-[calc(100vh_-_240px_+_18px)] flex-col gap-10">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="mx-auto w-1/4 rounded-lg"
            />
            <div className="flex flex-col gap-1 text-center text-brand-light-grey">
              <h1 className="text-4xl font-semibold">{country.name.common}</h1>
              <h2 className="">{country.name.official}</h2>
            </div>

            <div className="flex h-full flex-col gap-10 overflow-y-auto">
              <div className="mx-auto flex flex-col justify-center gap-6 px-4 md:flex-row lg:px-24">
                <CountryStats
                  label="Population"
                  value={country.population.toLocaleString("id-ID")}
                />
                <CountryStats
                  label="Area (km<sup>2</sup>)"
                  value={country.area.toLocaleString("id-ID")}
                />
              </div>
              <div className="flex flex-col divide-y divide-brand-grey/25 border-y border-brand-grey/25">
                {details.map(
                  (item: { label: string; value: any }, index: number) => {
                    return (
                      <CountryDetail
                        key={index}
                        label={item.label}
                        value={item.value}
                      />
                    );
                  },
                )}
              </div>

              <div className="flex flex-col gap-6 px-6">
                <h4 className="text-brand-grey">Neighbouring Countries</h4>
                <div className="flex flex-wrap items-start gap-6">
                  {country.neighboringCountries.map(
                    (country: Country, index: number) => {
                      return (
                        <CountryNeightbour
                          key={index}
                          flag={country.flags.png}
                          name={country.name.common}
                        />
                      );
                    },
                  )}
                </div>
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
