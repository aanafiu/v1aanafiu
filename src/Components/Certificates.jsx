import { FaCertificate } from "react-icons/fa";
import { PiCalendarBlankLight } from "react-icons/pi";
import { BsGlobe } from "react-icons/bs";

const Certificates = () => {
  return (
    <div id="certificates" className="mb-10">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaCertificate className="text-green-400" /> Certificates
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Programming Hero Certificate */}
        <div className="border border-chart-4 p-5 rounded-xl hover:shadow-green-500/30 transition-all">
          <h3 className="text-xl font-semibold mb-2 text-chart-4">
            Web Development
          </h3>
          <p className="text-sm flex items-center gap-2 mb-2 text-muted-foreground">
            <BsGlobe /> Programming Hero
          </p>
          <p className="text-sm flex items-center gap-2 text-muted-foreground">
            <PiCalendarBlankLight /> 2024
          </p>
        </div>

        {/* Coursera Python Certificate */}
        <div className="border border-chart-4 p-5 rounded-xl hover:shadow-green-500/30 transition-all">
          <h3 className="text-xl font-semibold mb-2 text-chart-4">
            Python Programming
          </h3>
          <p className="text-sm flex items-center gap-2 mb-2 text-muted-foreground">
            <BsGlobe /> Coursera
          </p>
          <p className="text-sm flex items-center gap-2 text-muted-foreground">
            <PiCalendarBlankLight /> 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
