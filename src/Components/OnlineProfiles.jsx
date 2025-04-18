import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const OnlineProfiles = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=break_end`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "OK") {
          setData(res.result[0]);
          //   console.log(res.result);
        }
      });
  }, []);

  if (!data) return <p>Loading...</p>;

  const profileUrl = `https://www.beecrowd.com.br/judge/en/profile/638529`;
  //   console.log(profileUrl);

  return (
    <div className="mt-10 mb-20 b mx-auto space-y-5">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 animate__animated animate__rotateInDownLeft">
        💻 Online Profiles
      </h1>
      {/* Codeforces */}
      <div data-aos="fade-up" className="p-4 rounded-lg border border-chart-4">
        <h2 className="text-xl font-bold mb-2">Codeforces</h2>
        <p>
          <strong>Handle:</strong> {data.handle}
        </p>
        <p>
          <strong>Rating:</strong> {data.rating}
        </p>
        <p>
          <strong>Rank:</strong> {data.rank} (
          <span className="text-chart-2 font-semibold">
            Max Rating: {data.maxRating}
          </span>
          )
        </p>
        <p>
          <strong>Total Problem Solved:</strong> 500+
        </p>
        <a
          href={`https://codeforces.com/profile/break_end`}
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-2 text-chart-4 text-lg flex items-center gap-2 font-semibold group"
        >
          View Profile{" "}
          <FaArrowRight className="group-hover:scale-105 group-hover:-rotate-45 duration-300" />
        </a>
      </div>
      {/* BeeCrowd */}
      <div
        data-aos="fade-up"
        className="relative p-4 rounded-lg border border-chart-4"
      >
        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
          BeeCrowd
        </h2>
        <p>
          <strong>Username:</strong> aa_nafiu
        </p>
        <p>
          <strong>User ID:</strong> {638529}
        </p>
        <p>
          <strong>Total Problem Solved:</strong> 119+
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-2 group text-chart-4 text-lg font-semibold"
        >
          View Profile{" "}
          <FaArrowRight className="group-hover:scale-105 group-hover:-rotate-45 duration-300" />
        </a>
      </div>

      {/* Cofechef */}
      <div
        data-aos="fade-up"
        className="relative p-4 rounded-lg border border-chart-4"
      >
        <h2 className="text-xl font-bold mb-2">CodeChef</h2>
        <p>
          <strong>Username:</strong> aa_nafiu
        </p>
        <p>
          <strong>Rating:</strong> {1203}
        </p>
        <p>
          <strong>Stars:</strong> {1} ⭐
        </p>
        <p>
          <strong>Total Problem Solved:</strong> 16+
        </p>
        <a
          href="https://www.codechef.com/users/aa_nafiu"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-2 group text-chart-4 text-lg font-semibold"
        >
          View Profile{" "}
          <FaArrowRight className="group-hover:scale-105 group-hover:-rotate-45 duration-300" />
        </a>
      </div>

      {/* UVA */}
      <div
        data-aos="fade-up"
        className="relative p-4 rounded-lg border border-chart-4"
      >
        <h2 className="text-xl font-bold mb-2">UVA-Online Judge</h2>
        <p>
          <strong>Username:</strong> aa_nafiu
        </p>
        <p>
          <strong>Total Problem Solved:</strong> 63+
        </p>
        <a
          href="https://www.codechef.com/users/aa_nafiu"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-2 group text-chart-4 text-lg font-semibold"
        >
          View Profile{" "}
          <FaArrowRight className="group-hover:scale-105 group-hover:-rotate-45 duration-300" />
        </a>
      </div>
    </div>
  );
};

export default OnlineProfiles;
