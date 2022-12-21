import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 text-center lg:text-left">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          className="max-w-xs lg:max-w-md
         rounded-tl-full rounded-tr-full"
        />
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
            Indulge in luxury spa treatments and revitalize your mind, body, and
            soul.
          </h1>
          <p className="py-6">
            <q>
              The best and most beautiful things in the world cannot be seen or
              even touched - they must be felt with the heart.
            </q>{" "}
            - Helen Keller
          </p>
          <Link to="/appointment" className="btn btn-primary px-8">
            Start beautify yourself
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
