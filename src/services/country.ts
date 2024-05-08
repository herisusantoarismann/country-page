import axios from "@/lib/axios";

const countryServices = () => {
  const getAllCountries = async () => {
    try {
      const countries = await axios.get("/all");

      return countries;
    } catch (err) {
      throw new Error("Error while fetching countries: " + err);
    }
  };

  const getCountry = async (name: string) => {
    try {
      const country = await axios.get(`/name/${name}`);

      return country;
    } catch (err) {
      throw new Error("Error while fetching country: " + err);
    }
  };

  return { getAllCountries, getCountry };
};

export default countryServices;
