import { FaBriefcase, FaHeart } from "react-icons/fa";

const ExperienceAndHobbies = () => {
  const experiences = ["YouTubing", "AdMob", "AdSense"];
  const hobbies = ["Traveling", "Video Editing", "Photo Editing", "Cooking", "Challenges"];

  return (
    <div id="experience-hobbies" data-aos="fade-up" className="mb-20">
      {/* Experience Section */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaBriefcase className="text-blue-400" /> Experience
      </h2>
      <div className="flex flex-wrap gap-4 mb-10">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="glass px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-800/60 transition-all"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Hobbies Section */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaHeart className="text-pink-400" /> Hobbies
      </h2>
      <div className="flex flex-wrap gap-4">
        {hobbies.map((item, index) => (
          <div
            key={index}
            className="glass px-5 py-3 rounded-full text-sm font-medium hover:bg-pink-800/60 transition-all"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAndHobbies;
