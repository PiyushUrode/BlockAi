import React from "react";
import about1 from "../assets/About/abt2.mp4";

const S2About = () => {
  return (
    <section className="relative text-white w-full  py-5 md:py-10  px-2 md:px-5 overflow-hidden flex flex-col items-center justify-center" id="features">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src={about1}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Headings */}
      <div className="text-center relative z-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Key Features
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient">
          $BAI Ecosystem
        </h3>
      </div>


<div className="relative z-10 max-w-7xl mx-auto px-4 py-10 flex flex-col gap-6 md:gap-12 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 place-items-center">
    {/* Top Left - Digital & Reality */}
    <div className="bg-[#0c0202]/80 border border-purple-700 rounded-2xl p-6 md:p-8 w-full h-full max-w-sm backdrop-blur-md shadow-[0_0_20px_#7e22ce50] hover:shadow-[0_0_30px_#ec489950] transition-all flex flex-col justify-between text-center">
      <h4 className="text-pink-400 text-xl font-semibold mb-4">
AI-Powered Blockchain Protocol
      </h4>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
Our innovative Proof of AI consensus mechanism combines blockchain security with artificial intelligence to create a more efficient, scalable network.
      </p>
    </div>

    {/* Top Right - Web 3 */}
    <div className="bg-[#0c0202]/80 border border-purple-700 rounded-2xl p-6 md:p-8 w-full h-full max-w-sm backdrop-blur-md shadow-[0_0_20px_#7e22ce50] hover:shadow-[0_0_30px_#ec489950] transition-all flex flex-col justify-between text-center">
      <h4 className="text-pink-400 text-xl font-semibold mb-4">AI-Driven Fraud Prevention </h4>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
Protect your assets with our advanced smart contracts that leverage machine learning to detect and prevent scams, automatically verifying transactions for maximum security.
      </p>
    </div>
  </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 place-items-center">
    {/* Top Left - Digital & Reality */}
    <div className="bg-[#0c0202]/80 border border-purple-700 rounded-2xl p-6 md:p-8 w-full h-full max-w-sm backdrop-blur-md shadow-[0_0_20px_#7e22ce50] hover:shadow-[0_0_30px_#ec489950] transition-all flex flex-col justify-between text-center">
      <h4 className="text-pink-400 text-xl font-semibold mb-4">
User-Friendly Exchange Platform
      </h4>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
Trade with confidence on our centralized exchange, featuring institutional-grade security, high liquidity, and an intuitive interface for both beginners and professionals.
      </p>
    </div>

    {/* Top Right - Web 3 */}
    <div className="bg-[#0c0202]/80 border border-purple-700 rounded-2xl p-6 md:p-8 w-full h-full max-w-sm backdrop-blur-md shadow-[0_0_20px_#7e22ce50] hover:shadow-[0_0_30px_#ec489950] transition-all flex flex-col justify-between text-center">
      <h4 className="text-pink-400 text-xl font-semibold mb-4"> Complete DeFi Ecosystem </h4>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
Access a comprehensive suite of decentralized finance tools including token swaps, cross-chain bridges, staking rewards, yield farming, secure wallet, and NFT marketplace.
      </p>
    </div>
  </div>




</div>

    </section>
  );
};

export default S2About;
