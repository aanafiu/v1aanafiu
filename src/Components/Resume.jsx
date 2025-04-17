import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="p-6 rounded-xl col-span-6 shadow-md border border-chart-4">
      <h2 className="text-xl font-semibold mb-4">Resume</h2>

      {/* PDF Preview without toolbar */}
      <div className="rounded-md w-full mb-4 overflow-hidden">
        <iframe
          src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          title="Resume Preview"
          className="w-full h-72 rounded-md"
        ></iframe>
      </div>

      <p className="text-sm mb-4">
        View and download my resume by clicking on the button below
      </p>

      <a
        href="/Resume.pdf"
        download
        className="flex items-center justify-center gap-2 bg-chart-4 hover:bg-primary text-white hover:text-chart-4 font-medium px-4 py-2 rounded-lg transition-all duration-200"
      >
        Download resume <FaFileDownload />
      </a>
    </div>
  );
};

export default Resume;
