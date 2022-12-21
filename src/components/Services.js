import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-section container mx-auto py-20">
      <span className="section-sub-title">Our Services</span>
      <h3 className="section-title">Services We Provide</h3>
      <div className="services">
        <div className="service">
          <div className="service-icon"></div>
          <h4 className="service-title"></h4>
          <p className="service-body"></p>
        </div>
      </div>
      <div className="featured-service">
        <div className="left">
          <img src="" alt="" />
        </div>
        <div className="right">
          <h2 className="headline"></h2>
          <p className="body"></p>
          <Link to="/appointment">Get started today</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
