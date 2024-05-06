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

  return { getAllCountries };
};

export default countryServices;
