import {
    FaGraduationCap,
    FaUniversity,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaLandmark,
    FaUserTie,
  } from "react-icons/fa";
  
  const Education = () => {
    const educationList = [
      {
        degree: "B.Sc In Computer Science & Engineering",
        institution: "National University Of Bangladesh",
        duration: "Jun 2022",
        location: "Dhaka, Bangladesh",
        result: "3.52 CGPA (upto 5 Semester)",
      },
      {
        degree: "Higher Secondary Certificate(HSC)",
        institution: "Mirpur Cantonment Public School & College",
        duration: "Jun 2018 - Mar 2020",
        location: "Dhaka, Bangladesh",
        result: "5.00 CGPA",
      },
      {
        degree: "Secondary School Certificate(SSC)",
        institution: "ABC High School",
        duration: "Jun 2016 - Mar 2018",
        location: "Dhaka, Bangladesh",
        result: "5.00 GPA",
      },
    ];
  
    return (
      <div className="space-y-10 p-5" >
        {/* Education Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            🎓 Education
          </h2>
  
          {educationList.map((edu, index) => (
            <div data-aos="fade-up"
              key={index}
              className="relative pl-6 border-purple-600/50"
            >
              <span className="absolute -left-2 top-1.5 h-4 w-4 drop-shadow-2xl rounded-full border-chart-4 border-2 animate-pulse" />
  
              <p className="text-lg font-semibold flex items-center gap-2">
                <FaGraduationCap className="text-chart-4" />
                {edu.degree}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <FaUniversity /> {edu.institution}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <FaCalendarAlt /> {edu.duration}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <FaMapMarkerAlt /> {edu.location}
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <FaLandmark /> {edu.result}
              </p>
            </div>
          ))}
        </div>
  
        {/* Extra Curricular Section */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🎯 Extra-Curricular Activity
          </h2>
          <div className="relative pl-6 ">
          <span className="absolute -left-2 top-1.5 h-4 w-4 drop-shadow-2xl rounded-full border-chart-4 border-2 animate-pulse" />
            <p className="text-lg font-semibold flex items-center gap-2">
              <FaUserTie className="text-chart-4" />
              Lead Technical Coordinator & Instructor
            </p>
            <p className="text-sm text-muted-foreground pl-7">
              Programming Club, Tejgaon College
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;
  