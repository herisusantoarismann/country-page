import { create } from "zustand";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;
  unMember: boolean;
  region: string;
  subregion: string;
  area: number;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  [key: string]: any;
}

interface CountriesState {
  countries: Country[];
  country: Country | null;
  filteredCountries: Country[];
  keyword: string;
  sortBy: string;
  regions: string[];
  selectedRegions: string[];
  status: {
    [key: string]: boolean;
  };
  setCountries: (countries: Country[]) => void;
  setState: (key: string, value: string | string[] | object) => void;
  filterCountries: () => void;
}

const useCountriesStore = create<CountriesState>((set, get) => ({
  countries: [],
  country: null,
  filteredCountries: [],
  keyword: "",
  sortBy: "population",
  regions: [],
  selectedRegions: [],
  status: {
    independent: false,
    unMember: false,
  },
  setCountries: (newCountries) => {
    const result = newCountries.sort((a, b) => b.population - a.population);
    const regions = newCountries.map((country: Country) => country.region);

    set({
      countries: result,
      filteredCountries: result,
      regions: Array.from(new Set(regions)),
    });
  },
  setState: (key, value) => {
    set({ [key]: value });
  },
  filterCountries: () => {
    const { countries, keyword, sortBy, selectedRegions, status } = get();

    // filter by keyword * region
    let result = countries.filter((country: Country) => {
      const matchName =
        country?.name?.common.toLowerCase().includes(keyword.toLowerCase()) ||
        country?.name?.official.toLowerCase().includes(keyword.toLowerCase()) ||
        country?.region?.toLowerCase().includes(keyword.toLowerCase()) ||
        country?.subregion?.toLowerCase().includes(keyword.toLowerCase());

      const matchRegion =
        selectedRegions.length > 0
          ? selectedRegions.includes(country.region)
          : true;

      const isUnMember = status.unMember ? country.unMember : true;
      const isIndependent = status.independent ? country.independent : true;

      return matchName && matchRegion && isUnMember && isIndependent;
    });

    // sort countries
    result = result.sort((a, b) =>
      sortBy === "name"
        ? a.name.common.localeCompare(b.name.common)
        : b[sortBy] - a[sortBy],
    );

    set({ filteredCountries: result });
  },
}));

export default useCountriesStore;
