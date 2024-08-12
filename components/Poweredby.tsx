import React from "react";
import { companies } from "../data";

const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-20">
      {/* Title for the companies section */}
      
   <p className="opacity-25 text-center text  "> Powered by Vercel</p>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 mt-5">
        {companies.map(({ id, img, name }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-1 p-2  rounded-lg shadow-lg"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full ${
                id === 1 ? "bg-gray-100" : ""
              }`}
            >
              <img
                src={img}
                alt={`${name} logo`}
                className="w-5 h-5 md:w-8 md:h-8"
              />
            </div>
            <span className="text-center text-sm font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
