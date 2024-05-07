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
}

interface CountriesState {
  countries: Country[];
  filteredCountries: Country[];
  setCountries: (countries: Country[]) => void;
  searchCountry: (keyword: string) => void;
}

const useCountriesStore = create<CountriesState>((set, get) => ({
  countries: [],
  filteredCountries: [],
  setCountries: (newCountries) => {
    set({ countries: newCountries, filteredCountries: newCountries });
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
}));

export default useCountriesStore;
