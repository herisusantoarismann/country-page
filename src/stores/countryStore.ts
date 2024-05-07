import { create } from "zustand";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  region: string;
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
  setCountries: (countries: Country[]) => void;
}

const useCountriesStore = create<CountriesState>((set) => ({
  countries: [],
  setCountries: (newCountries) => set({ countries: newCountries }),
}));

export default useCountriesStore;
