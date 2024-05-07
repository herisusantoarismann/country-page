"use client";

import Image from "next/image";

import BackgroundImage from "@/assets/images/hero-image-wr.jpg";
import Logo from "@/assets/images/Logo.svg";
import Search from "@/assets/images/Search.svg";
import ChevronDown from "@/assets/images/Expand_down.svg";
import Checkbox from "@/components/form/Checkbox";
import RegionItem from "@/components/RegionItem";
import useCountriesStore, { Country } from "@/stores/countryStore";
import { ChangeEvent, useEffect } from "react";
import countryServices from "@/services/country";

const { getAllCountries } = countryServices();

const Home = () => {
  const { countries, filteredCountries, setCountries, searchCountry } =
    useCountriesStore((state) => state);

  const formCheckBox = [
    {
      label: "Member of the United Nations",
      value: false,
    },
    {
      label: "Independent",
      value: false,
    },
  ];

  const regions = [
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAllCountries();

      setCountries(data);
    };

    getData();
  }, []);

  return (
    <main className="max-w-screen flex min-h-screen flex-col overflow-hidden bg-secondary">
      <div className="relative z-10 flex h-60 w-full items-center justify-center">
        <Image
          src={BackgroundImage}
          alt="background-image"
          className="absolute z-10 h-full w-full object-cover"
          priority
        />
        <Image src={Logo} alt="logo" className="w-1/10 z-20 -mt-10" priority />
      </div>
      <div className="relative -top-12 z-50 flex-1 px-24">
        <div className="h-[calc(100vh_-_240px_+_18px)] overflow-hidden rounded-lg border border-brand-grey bg-secondary p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-brand-grey">
              Found {countries.length.toLocaleString("id-ID")} countries
            </p>
            <div className="flex w-1/5 items-center gap-4 rounded-lg bg-brand-grey/40 px-4 py-3">
              <Image src={Search} alt="search-icon" />
              <input
                type="text"
                placeholder="Search by Name, Region, Subregion"
                className="w-full rounded-lg border-none bg-transparent text-brand-light-grey outline-none placeholder:text-sm"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const keyword = e.target.value;

                  searchCountry(keyword);
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex h-full gap-12 overflow-hidden pt-12">
            <div className="flex h-full w-1/5 flex-col gap-8 overflow-auto">
              {/* Sort By */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="sortBy"
                  className="text-sm font-semibold text-brand-grey"
                >
                  Sort By
                </label>
                <div className="relative w-full overflow-hidden rounded-lg border border-brand-grey">
                  <select
                    name="sortBy"
                    id="sortBy"
                    className="mr-2 w-full appearance-none bg-secondary px-4 py-2 text-brand-light-grey"
                  >
                    <option value="population">Population</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="Area">Area</option>
                  </select>

                  {/* Chevron down */}
                  <Image
                    src={ChevronDown}
                    alt="chevron-down-icon"
                    className="absolute right-4 top-2/4 -translate-y-2/4"
                  />
                </div>
              </div>

              {/* Filter Region */}
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-brand-grey">
                  Region
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  {regions.map((region: string, index: number) => {
                    return <RegionItem key={index} label={region} />;
                  })}
                </div>
              </div>

              {/* Filter Status */}
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-brand-grey">
                  Status
                </h4>
                <div className="flex flex-col gap-3">
                  {formCheckBox.map(
                    (
                      checkbox: { label: string; value: boolean },
                      index: number,
                    ) => {
                      return (
                        <Checkbox
                          key={index}
                          label={checkbox.label}
                          value={checkbox.value}
                        />
                      );
                    },
                  )}
                </div>
              </div>
            </div>
            <div className="h-full flex-1 overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-brand-grey  text-left text-sm text-brand-grey">
                    <th className="pb-4">Flag</th>
                    <th className="pb-4">Name</th>
                    <th className="pb-4">Population</th>
                    <th className="pb-4">
                      Area (km<sup>2</sup>)
                    </th>
                    <th className="pb-4">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCountries.map((country: Country, index: number) => {
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
                          {country.name.official}
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
