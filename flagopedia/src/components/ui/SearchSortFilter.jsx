import "./SearchSortFilter.css";

export const SearchSortFilter = ({
  countries,
  setCountries,
  search,
  setSearch,
  sort,
  setSort,
  filter,
  setFilter,
}) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = (value) => {
    let sortedCountries = [];
    if (value === "Name Asc") {
      sortedCountries = [...countries].sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
      setCountries(sortedCountries);
    } else if (value === "Name Desc") {
      sortedCountries = [...countries].sort((a, b) => {
        return b.name.common.localeCompare(a.name.common);
      });
      setCountries(sortedCountries);
    } else if (value === "Popu Asc") {
      sortedCountries = [...countries].sort(
        (a, b) => a.population - b.population
      );
      setCountries(sortedCountries);
    } else if (value === "Popu Desc") {
      sortedCountries = [...countries].sort(
        (a, b) => b.population - a.population
      );
      setCountries(sortedCountries);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="d-flex justify-content-between search-sort-filter">
      <input
        type="text"
        name="search"
        className="form-control bg-dark text-light search"
        value={search}
        onChange={handleInputChange}
        placeholder="Search"
      />

      <div className="d-flex dropdowns">
        <div className="">
          <button
            className="btn btn-dark border dropdown-toggle me-4 sort"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="me-2">Sort By</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end bg-dark">
            <li>
              <button
                onClick={() => handleSort("Name Asc")}
                className="dropdown-item text-light"
                href="#"
              >
                Name Asc
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSort("Name Desc")}
                className="dropdown-item text-light"
                href="#"
              >
                Name Desc
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSort("Popu Asc")}
                className="dropdown-item text-light"
                href="#"
              >
                Population Asc
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSort("Popu Desc")}
                className="dropdown-item text-light"
                href="#"
              >
                Population Desc
              </button>
            </li>
          </ul>
        </div>

        <select
          className="form-select bg-dark text-light select"
          name="continent"
          value={filter}
          onChange={handleFilterChange}
          aria-label="Default select example"
        >
          <option value="All" defaultValue>
            All
          </option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
