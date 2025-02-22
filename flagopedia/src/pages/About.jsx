import { NavLink } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaSortAmountDown } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import "./About.css";

export const About = () => {
  return (
    <section className="p-5 about">
      <div className="p-5 mb-5 text-center about-hero">
        <h2 className="">Discover the Flags of the World</h2>
        <p className="">
          Explore the symbols that represent nations across the globe.
        </p>
      </div>
      <div className="mb-5">
        <h2 className="question">What is Flagopedia?</h2>
        <p className="answer">
          Flagopedia is a comprehensive collection of national flags from around
          the world, providing insights into their country, population, region,
          capital, currencies, and languages.
        </p>
      </div>
      <div className="mb-5">
        <h2 className="question">Why Flags Matter?</h2>
        <p className="answer">
          Flags are powerful symbols that represent unity, heritage, and pride.
          They play a crucial role in history, culture, and national identity,
          serving as visual ambassadors for countries around the globe.
        </p>
      </div>
      <div>
        <div>
          <h2>Features of Our Website</h2>
        </div>
        <div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4 mt-1 mb-5">
            <div className="col">
              <div className="card bg-dark text-light border p-4">
                <div className="d-flex mb-4">
                  <span className="d-flex align-items-center justify-content-center me-3 fs-3">
                    <FiGlobe />
                  </span>
                  <h3 className="about-card-heading">Browse All Flags</h3>
                </div>
                <div>
                  <p className="m-0">
                    View high-quality images of national flags from around the
                    world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-light border p-4">
                <div className="d-flex mb-4">
                  <span className="d-flex align-items-center justify-content-center me-3 fs-3">
                    <FaMagnifyingGlass />
                  </span>
                  <h3 className="about-card-heading">Search by Country</h3>
                </div>
                <div>
                  <p className="m-0">
                    Find flags easily by searching country names.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-light border p-4">
                <div className="d-flex mb-4">
                  <span className="d-flex align-items-center justify-content-center me-3 fs-3">
                    <FaSortAmountDown />
                  </span>
                  <h3 className="about-card-heading">Sort Options</h3>
                </div>
                <div>
                  <p className="m-0">
                    Sort flags by country name or population.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-light border p-4">
                <div className="d-flex mb-4">
                  <span className="d-flex align-items-center justify-content-center me-3 fs-3">
                    <LuFilter />
                  </span>
                  <h3 className="about-card-heading">Filter by Continents</h3>
                </div>
                <div>
                  <p className="m-0">
                    Explore flags by selecting specific continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="question">Our Mission</h2>
        <p className="answer">
          We aim to educate and inspire by providing an easy-to-use platform for
          exploring flags worldwide. Our goal is to foster global understanding
          and appreciation for the diverse symbols that represent nations.
        </p>
      </div>
      <div className="mb-5">
        <h2 className="question">About the Developer</h2>
        <p className="answer">
          This project is created by Asim Mulla, a passionate web developer
          fascinated by world geography and design. With a background in
          Bachelors in Computer Application (BCA), we've combined our love for
          technology and cultural symbols to bring you Flagopedia.
        </p>
      </div>
      <div className="mb-5">
        <h2 className="question">Contact & Feedback</h2>
        <p className="answer">
          Have feedback or suggestions? We'd love to hear from you! Reach out to
          us and help make Flagopedia even better.
        </p>
        <NavLink to="/contact">
          <button className="btn btn-outline-light">Contact Us</button>
        </NavLink>
      </div>
    </section>
  );
};
