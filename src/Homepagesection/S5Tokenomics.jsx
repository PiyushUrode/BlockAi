import React from "react";
import token from "../assets/tokenomics/token1.png";

const S5Tokenomics = () => {
  return (
    <section className="bg-black text-white flex items-center justify-center py-5 md:py-10  px-5 w-full" id="tokenomics">
      <div className="w-full max-w-5xl rounded-3xl p-8 md:p-12 gap-5 md:gap-10 flex flex-col justify-center items-center align-middle  bg-[#121316] border border-purple-700/30 backdrop-blur-md shadow-[0_0_30px_rgba(147,51,234,0.2)]">
        {/* Headings */}
        <header className="text-center mb-1">
          <h2 className="text-3xl md:text-5xl main-text font-SBRI font-bold mb-3">
            Tokenomics
          </h2>

        </header>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={token}
            alt="Tokenomics"
            className="w-[220px] sm:w-[280px] md:w-[450px] lg:w-[600px] h-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default S5Tokenomics;
