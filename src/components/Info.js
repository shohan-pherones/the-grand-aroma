import { BsClock, BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const data = [
  {
    id: 1,
    title: "Opening Hours",
    details: "Monday to Friday from 10:00 AM to 11:00 PM",
    icon: <BsClock />,
  },
  {
    id: 2,
    title: "Visit our Location",
    details: "123 Main Street, Anytown, USA 12345",
    icon: <GoLocation />,
  },
  {
    id: 3,
    title: "Contact us 24/7",
    details: "+123 456 789",
    icon: <BsPhone />,
  },
];

const Info = () => {
  return (
    <div className="info-wrapper container mx-auto py-20 grid grid-cols-3 gap-10">
      {data.map((info) => (
        <div
          className="info bg-primary text-black/75 flex items-center gap-5 p-5 rounded-lg h-40 even:bg-secondary"
          key={info.id}
        >
          <div className="left text-5xl">{info.icon}</div>
          <div className="right">
            <span className="text-2xl font-semibold">{info.title}</span>
            <p className="mt-1">{info.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
