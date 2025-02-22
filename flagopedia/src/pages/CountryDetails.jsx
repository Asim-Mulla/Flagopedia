import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getSingleCountry } from "../api/services";
import { Loader } from "../components/ui/Loader";
import "./CountryDetails.css";

export const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState();
  const country = useParams();

  useEffect(() => {
    startTransition(async () => {
      const res = await getSingleCountry(country.name);
      if (res.status === 200) {
        setCountryData(res.data[0]);
      }
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="d-flex align-items-center justify-content-between">
      {countryData && (
        <div className="d-flex align-items-center justify-content-between p-5 country-details-container">
          <div className="detail-country-flag-img">
            <img src={countryData.flags.svg} alt="" />
          </div>
          <div className="d-flex justify-content-evenly details-info-back">
            <div className="px-5 info">
              <h1 className="mb-4">{countryData.name.common}</h1>
              <p>
                <span className="opacity-07">Native Names : </span>
                {Object.keys(countryData.name.nativeName)
                  .map(
                    (currNativeName) =>
                      countryData.name.nativeName[currNativeName].common
                  )
                  .join(", ")}
              </p>
              <p>
                <span className="opacity-07">Population : </span>
                {countryData.population.toLocaleString()}
              </p>
              <p>
                <span className="opacity-07">Region : </span>
                {countryData.region}
              </p>
              <p>
                <span className="opacity-07">Subregion : </span>
                {countryData.subregion}
              </p>
              <p>
                <span className="opacity-07">Capital : </span>
                {countryData.capital}
              </p>
              <p>
                <span className="opacity-07">Top Level Domain : </span>
                {countryData.tld}
              </p>
              <p>
                <span className="opacity-07">Currencies : </span>
                {Object.keys(countryData.currencies)
                  .map(
                    (currCurrency) => countryData.currencies[currCurrency].name
                  )
                  .join(", ")}
              </p>
              <p>
                <span className="opacity-07">Languages : </span>
                {Object.keys(countryData.languages)
                  .map((currLanguage) => countryData.languages[currLanguage])
                  .join(", ")}
              </p>
            </div>
            <div className="mt-auto">
              <NavLink to="/country">
                <button className="btn btn-outline-light back">Go Back</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
