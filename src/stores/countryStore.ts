import { create } from "zustand";

export interface Country {
  name: {
    common: string;
    official: string;
  };
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
  filteredCountries: Country[];
  sortBy: string;
  setCountries: (countries: Country[]) => void;
  searchCountry: (keyword: string) => void;
  sortByFunc: (value: string) => void;
}

const useCountriesStore = create<CountriesState>((set, get) => ({
  countries: [],
  filteredCountries: [],
  sortBy: "population",
  setCountries: (newCountries) => {
    const result = newCountries.sort((a, b) => b.population - a.population);

    set({ countries: result, filteredCountries: result });
  },
  searchCountry: (keyword) => {
    const { countries } = get();

    const result = countries.filter(
      (country: Country) =>
        country?.name?.common.toLowerCase().includes(keyword.toLowerCase()) ||
        country?.name?.official.toLowerCase().includes(keyword.toLowerCase()) ||
        country?.region?.toLowerCase().includes(keyword.toLowerCase()) ||
        country?.subregion?.toLowerCase().includes(keyword.toLowerCase()),
    );

    set({ filteredCountries: result });
  },
  sortByFunc: (value: string) => {
    const { filteredCountries } = get();

    const result = filteredCountries.sort((a, b) =>
      value === "name"
        ? a.name.common.localeCompare(b.name.common)
        : b[value] - a[value],
    );

    set({ filteredCountries: result, sortBy: value });
  },
}));

export default useCountriesStore;
