import Image from "next/image";

import BackgroundImage from "@/assets/images/hero-image-wr.jpg";
import Logo from "@/assets/images/Logo.svg";
import Search from "@/assets/images/Search.svg";
import ChevronDown from "@/assets/images/Expand_down.svg";
import Checkbox from "@/components/form/Checkbox";
import RegionItem from "@/components/RegionItem";

export default function Home() {
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

  return (
    <main className="max-w-screen min-h-screen bg-secondary">
      <div className="relative z-10 flex h-60 w-full items-center justify-center">
        <Image
          src={BackgroundImage}
          alt="background-image"
          className="absolute z-10 h-full w-full object-cover"
        />
        <Image src={Logo} alt="logo" className="w-1/10 z-20 -mt-10" />
      </div>
      <div className="relative z-50 -mt-12 px-24">
        <div className="rounded-lg border border-brand-grey bg-secondary p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-brand-grey">
              Found 234 countries
            </p>
            <div className="flex w-1/5 items-center gap-4 rounded-lg bg-brand-grey/40 px-4 py-3">
              <Image src={Search} alt="search-icon" />
              <input
                type="text"
                placeholder="Search by Name, Region, Subregion"
                className="text-brand-light-grey w-full rounded-lg border-none bg-transparent outline-none placeholder:text-sm"
              />
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 flex gap-12">
            <div className="flex w-1/5 flex-col gap-8">
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
                    className="text-brand-light-grey mr-2 w-full appearance-none bg-secondary px-4 py-2"
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
            <div className="flex-1">
              <table className="w-full">
                <th className="border-b border-brand-grey pb-4 text-sm text-brand-grey">
                  <td className="">Flag</td>
                </th>
                <th className="border-b border-brand-grey pb-4 text-sm text-brand-grey">
                  <td className="">Name</td>
                </th>
                <th className="border-b border-brand-grey pb-4 text-sm text-brand-grey">
                  <td className="">Population</td>
                </th>
                <th className="border-b border-brand-grey pb-4 text-sm text-brand-grey">
                  <td className="">
                    Area (km<sup>2</sup>)
                  </td>
                </th>
                <th className="border-b border-brand-grey pb-4 text-sm text-brand-grey">
                  <td className="">Region</td>
                </th>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
