import { useEffect, useState, useTransition } from "react";
import { getCountries } from "../api/services";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/layout/CountryCard";
import "./Countries.css";
import { SearchSortFilter } from "../components/ui/SearchSortFilter";

export const Countries = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("None");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountries();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return country;
    }
  };

  const filterCountry = (country) => {
    if (filter !== "All") {
      return country.region === filter;
    } else {
      return country;
    }
  };

  const filteredCountries = countries.filter(
    (currCountry) => searchCountry(currCountry) && filterCountry(currCountry)
  );

  return (
    <section className="countries-container">
      <div className="">
        <div className="mt-5 searchsortfilter-container">
          <SearchSortFilter
            countries={countries}
            setCountries={setCountries}
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div className="mb-5 country-cards-container">
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 g-3 mt-4">
            {filteredCountries.map((currCountry, index) => {
              return <CountryCard key={index} country={currCountry} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
