import "./Loader.css";

export const Loader = () => {
  return (
    <section className="loader-container">
      <div className="loader">
        <div className="wrapper">
          <div className="circle"></div>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      </div>
    </section>
  );
};
