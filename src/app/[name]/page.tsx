"use client";

import DefaultLayout from "@/layouts/Default";
import countryServices from "@/services/country";
import useCountriesStore from "@/stores/countryStore";
import React, { useEffect } from "react";

interface IProps {
  params: {
    name: string;
  };
}

const { getCountry } = countryServices();

const Detail = ({ params }: IProps) => {
  const { setState } = useCountriesStore();

  useEffect(() => {
    const getData = async () => {
      const name = params?.name;

      const country = await getCountry(name);

      setState("country", country);
    };

    getData();
  }, []);

  return (
    <DefaultLayout>
      <div className="mx-auto w-3/4 rounded-lg border border-brand-grey bg-secondary"></div>
    </DefaultLayout>
  );
};

export default Detail;
