import axios from "axios";

export type CountryPhonesProps = {
  name: string;
  dial_code: string;
  code: string;
};

export const getCountryCodes = async () => {
  const url =
    "https://raw.githubusercontent.com/RaihanSyahSP/country-phones-code/main/db.json";
  const { data } = await axios.get<CountryPhonesProps[]>(url);
  return data;
};
