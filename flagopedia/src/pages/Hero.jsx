import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="text-center d-flex align-items-center justify-content-center p-5 hero">
      <div className="me-5">
        <h2 className="mb-4">
          Explore the Beauty of Flags of the great countries.
        </h2>
        <p className="mb-4">
          Discover the history, culture, and beauty of every nation. Search,
          sort, and filter through countries to find the details you need.
        </p>
        <NavLink to="/country">
          <button className="btn btn-outline-light">
            <span className="me-2">Start Exploring</span>{" "}
            <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
      <div className="hero-image">
        <img
          src="https://t4.ftcdn.net/jpg/03/81/86/29/360_F_381862991_e7LoEZAdjygCv90zQUXgrOjsWiUUrc4M.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
