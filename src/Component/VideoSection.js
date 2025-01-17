import React from "react";

const VideoNews = () => {
  return (
    <section className="bg-[#0A1930] py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Video Thumbnail */}
        <div className="relative w-full md:w-2/3">
          <img
            src="https://c.files.bbci.co.uk/0FDA/production/_128385040_6507a1a7-ed86-43b3-9ddc-1b9349755acf.jpg" // Replace with actual video thumbnail
            alt="News Thumbnail"
            className="w-full h-auto rounded-lg"
          />
          {/* Play Button Overlay */}
          <div className="absolute bottom-3 left-3 bg-blue-500 text-white p-2 rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
            <span className="ml-2 text-sm font-semibold">01:28</span>
          </div>
        </div>

        {/* News Description */}
        <div className="w-full md:w-1/3 md:pl-6 mt-6 md:mt-0 text-white">
          <h3 className="text-lg font-bold flex items-center">
            <span className="mr-2">📹</span> Top stories in 90 seconds
          </h3>
          <p className="text-gray-300 mt-2">
            DW brings you the top international news stories in brief.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            32 minutes ago | 01:28 min
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoNews;
