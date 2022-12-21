import { Link } from "react-router-dom";
import haircutImg from "../assets/images/hair-cutting.png";
import facialImg from "../assets/images/makeover.png";
import massageImg from "../assets/images/facial-treatment.png";
import nailImg from "../assets/images/nail-polish.png";

const data = [
  {
    id: 1,
    title: "Haircuts and coloring",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, laboriosam?",
    icon: haircutImg,
  },
  {
    id: 2,
    title: "Facials and skincares",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, laboriosam?",
    icon: facialImg,
  },
  {
    id: 3,
    title: "Massages and body treatments",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, laboriosam?",
    icon: massageImg,
  },
  {
    id: 4,
    title: "Nail cares, manicures and pedicures",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, laboriosam?",
    icon: nailImg,
  },
];

const Services = () => {
  return (
    <div className="services-section container mx-auto py-20">
      <span className="section-sub-title text-center block uppercase font-semibold text-primary">
        Our Services
      </span>
      <h3 className="section-title text-center text-3xl font-medium mb-10 mt-1">
        Services We Provide
      </h3>
      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((service) => (
          <div
            className="service shadow-md p-5 rounded-xl flex flex-col items-center text-center gap-3 border"
            key={service.id}
          >
            <div className="service-img w-3/12">
              <img src={service.icon} alt={service.title} />
            </div>
            <h4 className="service-title text-xl">{service.title}</h4>
            <p className="service-body">{service.body}</p>
          </div>
        ))}
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
