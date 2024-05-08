"use client";

import Image from "next/image";

import BackgroundImage from "@/assets/images/hero-image-wr.jpg";
import Logo from "@/assets/images/Logo.svg";
import Checkbox from "@/components/form/Checkbox";
import RegionItem from "@/components/RegionItem";
import useCountriesStore, { Country } from "@/stores/countryStore";
import { useEffect } from "react";
import countryServices from "@/services/country";
import Select, { ISelectOption } from "@/components/form/Select";
import Table from "@/components/table/Table";
import SearchInput from "@/components/SearchInput";

const { getAllCountries } = countryServices();

const Home = () => {
  const {
    countries,
    filteredCountries,
    keyword,
    sortBy,
    regions,
    selectedRegions,
    status,
    setCountries,
    setState,
    filterCountries,
  } = useCountriesStore((state) => state);

  const formCheckBox = [
    {
      label: "Member of the United Nations",
      key: "unMember",
    },
    {
      label: "Independent",
      key: "independent",
    },
  ];

  const sortOptions: ISelectOption[] = [
    {
      label: "Population",
      value: "population",
    },
    {
      label: "Alphabetical",
      value: "name",
    },
    {
      label: "Area",
      value: "area",
    },
  ];

  const tableData = {
    headers: ["Flag", "Name", "Population", "Area (km<sup>2</sup>)", "Region"],
    data: filteredCountries,
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAllCountries();

      setCountries(data);
    };

    getData();

    document.title = "Country Page";
  }, []);

  useEffect(() => {
    filterCountries();
  }, [keyword, sortBy, selectedRegions, status]);

  return (
    <main className="max-w-screen flex min-h-screen flex-col bg-secondary lg:overflow-hidden">
      <div className="relative z-10 flex h-60 w-full items-center justify-center">
        <Image
          src={BackgroundImage}
          alt="background-image"
          className="absolute z-10 h-full w-full object-cover"
          priority
        />
        <Image src={Logo} alt="logo" className="w-1/10 z-20 -mt-10" priority />
      </div>
      <div className="relative -top-16 z-50 flex-1 px-4 lg:-top-12 xl:px-24">
        <div className="rounded-lg border border-brand-grey bg-secondary p-4 lg:h-[calc(100vh_-_240px_+_18px)] lg:overflow-hidden lg:p-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <p className="font-semibold text-brand-grey lg:text-xl">
              Found {countries.length.toLocaleString("id-ID")} countries
            </p>
            <SearchInput placeholder="Search by Name, Region, Subregion" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12 overflow-x-auto pt-12 lg:h-[calc(100%_-_48px)] lg:flex-row lg:overflow-hidden">
            <div className="flex h-full w-full flex-col gap-8 lg:w-1/5 lg:overflow-auto">
              {/* Sort By */}
              <Select label="Sort By" name="sortBy" options={sortOptions} />

              {/* Filter Region */}
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-brand-grey">
                  Region
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  {regions.map((region: string, index: number) => {
                    return (
                      <RegionItem
                        key={index}
                        label={region}
                        onClick={() => {
                          const newRegions = selectedRegions.includes(region)
                            ? selectedRegions.filter(
                                (item: string) => item !== region,
                              )
                            : [...selectedRegions, region];

                          setState("selectedRegions", newRegions);
                        }}
                      />
                    );
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
                      checkbox: { label: string; key: string },
                      index: number,
                    ) => {
                      return (
                        <Checkbox
                          key={index}
                          label={checkbox.label}
                          value={status[checkbox.key]}
                          onChange={(value) => {
                            setState("status", {
                              ...status,
                              [checkbox.key]: value,
                            });
                          }}
                        />
                      );
                    },
                  )}
                </div>
              </div>
            </div>
            <div className="h-full w-full flex-1 overflow-auto">
              <Table headers={tableData.headers} countries={tableData.data} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
