import { NavLink } from "react-router-dom";
import "./CountryCard.css";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <div className="col">
      <div className="card bg-dark text-light p-3">
        <div className="card-image-container">
          <img src={flags.svg} className="card-img-top" alt={name.common} />
        </div>
        <div className="card-body p-0 pt-3">
          <h5 className="card-title mb-3 into-ellipsis">{name.common}</h5>
          <p className="card-text into-ellipsis">
            <span className="text-06">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p className="card-text into-ellipsis">
            <span className="text-06">Region:</span> {region}
          </p>
          <p className="card-text into-ellipsis">
            <span className="text-06">Capital:</span> {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button className="btn btn-outline-light w-100">Read More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
