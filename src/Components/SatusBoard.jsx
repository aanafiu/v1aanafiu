
import React from "react";

const StatusBoard = () => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">

      {/* Currently Learning */}
      <div className=" border border-chart-4 rounded-xl p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-2">📚 Currently Learning</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Advanced JavaScript</li>
          <li>Next.js</li>
          <li>Node.js & Express (Deep Dive)</li>
          <li>Data Structures & Algorithms</li>
        </ul>
      </div>

      {/* Quote */}
      <div className="border glass border-chart-4 rounded-xl p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-2">💬 Favorite Quotes</h2>
        <p className="italic  text-sm">
          "Success is not final, failure is not fatal: It is the courage to continue that counts."
        </p>
        <p className="mt-2 text-center text-xs ">------------------</p>
        <p className="italic text-sm">
          "Keep Proud But Never Satisfied"
        </p>
      </div>

            {/* Working On */}
            <div className=" border border-chart-4 rounded-xl p-6 shadow-md">
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          🛠️ Currently Doing
          <span className="relative">
            <span className="h-3 w-3 -top-1 mx-2 rounded-full bg-green-500 animate-ping absolute inline-flex"></span>
          </span>
        </h2>
        <li>Student and Looking For Intern(Remote/On-Site)</li>
        <li>Part-Time Or Full-Time Possible If Night Shift Available</li>
     
      </div>

    </div>
  );
};

export default StatusBoard;
