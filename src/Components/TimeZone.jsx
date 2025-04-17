import React, { useEffect, useState } from "react";

const TimeCard = ({ title, date, time, location, active }) => {
  return (
    <div className=" p-6 rounded-xl w-full shadow-md border border-chart-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">{date}</p>
      <div className="flex items-center gap-2 text-3xl font-mono my-2">
        {time}
        {active && <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />}
      </div>
      <p className="text-sm text-chart-4">{location}</p>
    </div>
  );
};

const TimeZone = () => {
  const [bdTime, setBdTime] = useState(new Date());
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setBdTime(new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
      ));
      setLocalTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => date.toDateString();
  const formatTime = (date) =>
    date.toLocaleTimeString("en-GB", { hour12: false });

  return (
    <div className="flex gap-4 w-full items-center justify-center">
      <TimeCard
        title="My time"
        date={formatDate(bdTime)}
        time={formatTime(bdTime)}
        location="Asia/Dhaka"
        active={true}
      />
      <TimeCard
        title="Your Time"
        date={formatDate(localTime)}
        time={formatTime(localTime)}
        location={Intl.DateTimeFormat().resolvedOptions().timeZone}
        active={false}
      />
    </div>
  );
};

export default TimeZone;
