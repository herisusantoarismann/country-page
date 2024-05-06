import { create } from "zustand";

interface Country {
  name: {
    common: String;
    official: String;
  };
  region: String;
  area: number;
  population: number;
  flags: {
    png: String;
    svg: String;
    alt: String;
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
