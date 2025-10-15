import React from "react";
import { FaPlus } from "react-icons/fa";
import Presale from "../MainComponent/Presale.jsx";
// import i1 from "../assets/newimage/i1.jpg";
import Herovideo from "../assets/hero/herovideo3.mp4";
import m1 from "../assets/hero/m1.jpg"
import m2 from "../assets/hero/m2.png"
import m3 from "../assets/hero/m3.png"

const S1Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-5 bg-black text-white ">
        {/* 🟣 HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center text-center gap-8  py-5 px-2 sm:px-10 md:px-16 overflow-hidden">

          {/* 🎥 Hero Video */}
          <div className="relative   flex justify-center items-center">
            <video
              className="w-40 md:w-60  xl:w-72 object-cover ]"
              src={Herovideo}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
<div className="flex flex-col  justify-center align-middle items-center ">  
          {/* 🧠 Headings */}
          <h2 className="text-xl sm:text-2xl md:text-3xl italic text-gray-300 font-light tracking-wide ">
            AI CAN TRUST YOU
          </h2>

          <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-2xl font-extrabold mt-3 leading-tight ">
            <span className="text-gradient ">
              Revolutionizing Trust & Transparency in AI
            </span>
          </h1>

          {/* 🧩 Description */}
          <p className="text-gray-400 max-w-xl mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed  px-4">
            We’re creating AI that can truly{" "}
            <span className="text-white font-semibold">trust humans</span> — just
            as humans learn to trust AI. 

          </p>
</div>
          {/* ⚙️ Features Row */}
 <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12 lg:mt-12 w-full px-4">
  {[
    { img: m1, title: "RWA", desc: "Link Digital and Reality" },
    { img: m2, title: "DeFi", desc: "Difficult made Easy Work" },
    { img: m3, title: "Web3", desc: "Play and Earn in Games" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-row sm:flex-row items-center sm:items-center w-full sm:w-auto md:w-1/3 lg:w-auto justify-center sm:justify-center gap-3 hover:scale-105 transition-transform duration-300"
    >
      <div className="rounded-full flex-shrink-0">
        <img
          src={item.img}
          alt={item.title}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-purple-600 object-cover"
        />
      </div>
      <div className="text-left">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
          {item.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>



        </section>

        {/* 📱 Presale Section for mobile */}
        <div className="lg:hidden px-4 md:px-8 mt-0 mb-10">
          <Presale />
        </div>
      </div>
    </>
  );
};

export default S1Hero;
