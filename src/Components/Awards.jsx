import { FaTrophy } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { PiCalendarBlankLight } from "react-icons/pi";
import { MdPlace } from "react-icons/md";

const Awards = () => {
  return (
    <div id="awards" className="mb-10">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaTrophy className="text-yellow-400" /> Awards
      </h2>

      <div className="gap-6">
        {/* CSE Fest Hackathon Card */}
        <div className="border border-purple-700 p-5 rounded-xl hover:shadow-purple-500/30 transition-all">
          <h3 className="text-xl font-semibold mb-2 text-chart-4">
            Hackathon - CSE Fest 2024{" "}
           
          </h3>
          <span className="bg-purple-700 my-2 text-white text-xs px-3 py-1 rounded-full">
              Second Place
            </span>
          <p className="text-sm flex items-center gap-2 my-2 text-muted-foreground">
            <BsBuilding /> Department of CSE
          </p>
          <p className="text-sm flex items-center gap-2 mb-2 text-muted-foreground">
            <PiCalendarBlankLight /> Mar 2024
          </p>
          <p className="text-xs flex items-center gap-2 text-muted-foreground italic">
            <MdPlace /> Intra-University
          </p>
        </div>

        {/* Add other award cards below as needed */}
      </div>
    </div>
  );
};

export default Awards;
