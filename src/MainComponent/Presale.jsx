import React, { useState, useEffect } from "react";
import { FaEthereum, FaArrowDown } from "react-icons/fa";
import BAILogo from "../assets/logo/icon1.png"; // you’ll replace with your image
import e1 from "../assets/presale/e1.svg"
import e2 from "../assets/presale/e2.svg"
import e3 from "../assets/presale/e3.svg"
import e4 from "../assets/presale/e4.svg"
import e5 from "../assets/presale/e5.svg"

const Presale = () => {

 const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // 🧠 Countdown logic
  useEffect(() => {
    // Set your presale end date/time here
    const targetDate = new Date("2025-10-25T00:00:00").getTime(); // example

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
 


  return (
<div className="w-full bg-black rounded-2xl border border-[#2a2a2a] p-5 text-white shadow-[0_0_25px_] border-white shadow-white">

      {/* Header */}
      <div className="text-center mb-3">
        <p className="text-lg font-semibold flex justify-center align-middle gap-2">
         
         <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="12.5" r="12" fill="#FF3CAC" fill-opacity="0.09"></circle><circle cx="12.4998" cy="12.4998" r="8.13259" fill="#FF3CAC" fill-opacity="0.29"></circle><circle cx="12.4971" cy="12.4971" r="3.99708" fill="#FF3CAC"></circle></svg>
         
          Buy <span className="text-pink-500"> 
             $BAI</span> Before Price Increases!
        </p>
      <div className="flex justify-around px-5 gap-2 mt-2 text-[#ff3cac] font-semibold border-[#ff3cac] border-2 rounded-xl">
          <span>{timeLeft.days}D</span> : <span>{timeLeft.hours}H</span> :{" "}
          <span>{timeLeft.minutes}M</span> : <span>{timeLeft.seconds}S</span>
        </div>
      </div>

      {/* Price Info */}
      <div className="bg-[#1a1a1a] rounded-xl p-4 flex justify-between items-center mb-4 ">
        <div>
          <p className="text-sm text-white">
            1 $BAI = <span className="text-[#ff3cac]">$0.00048</span>
          </p>
          <h2 className="text-2xl font-bold">$20,725</h2>
          <p className="text-xs text-white">Total Raised USD</p>
        </div>
        <div className="text-xs text-right text-white">
          <p>Next Price = $0.0005</p>
          <p>Listing Price = $0.025</p>
        </div>
      </div>

      {/* Payment Network */}
      <div className="mb-3">
        <div className="flex justify-between mb-2">
          <p>Choose Payment Network</p>
          <button className="text-[#ff3cac] text-sm">Buy with Card</button>
        </div>
        <div className="flex justify-between gap-1 flex-wrap   ">
          <div className="flex flex-row gap-1  justify-center items-center align-middle rounded-xl  bg-gray-600 hover:bg-black  p-[6px] text-white hover:text-black cursor-pointer">
            <img src={e1} alt="ETH" className="w-4 h-6" />
          <h1 className=" text-xs font-SBR">ETH</h1>
</div>
      <div className="flex flex-row gap-1  justify-center items-center align-middle rounded-xl  bg-gray-600 hover:bg-black  p-[6px] text-white hover:text-black cursor-pointer">
            <img src={e2} alt="ETH" className="w-4 h-6" />
          <h1 className=" text-xs font-SBR">BNB</h1>
</div><div className="flex flex-row gap-1  justify-center items-center align-middle rounded-xl  bg-gray-600 hover:bg-black  p-[6px] text-white hover:text-black cursor-pointer">
            <img src={e3} alt="ETH" className="w-4 h-6" />
          <h1 className=" text-xs font-SBR">BASE</h1>
</div><div className="flex flex-row gap-1  justify-center items-center align-middle rounded-xl  bg-gray-600 hover:bg-black  p-[6px] text-white hover:text-black cursor-pointer">
            <img src={e4} alt="ETH" className="w-4 h-6" />
          <h1 className=" text-xs font-SBR">ARB</h1>
</div><div className="flex flex-row gap-1  justify-center items-center align-middle rounded-xl  bg-gray-600 hover:bg-black  p-[6px] text-white hover:text-black cursor-pointer" >
            <img src={e5} alt="ETH" className="w-4 h-6" />
          <h1 className=" text-xs font-SBR">SOL</h1>
</div>
        </div>
      </div>

      {/* Converter */}
      <div className="bg-black border-[0.2px] border-gray-500 rounded-lg rounded-xl p-3 ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <FaEthereum /> <span>ETH</span>
          </div>
 <div className="flex flex-col ">
           <p className="font-semibold">0.000242</p>
                  <div className="text-xs text-white ">
          $1.00 | Balance: <span className="text-[#ff3cac]">0</span>
        </div>
 </div>
        </div>


        </div>

        <div className="flex justify-center  rounded-full w-8 h-8 bg-white text-black mx-auto items-center">
          <FaArrowDown className="text-black" />
        </div>
  <div className="bg-black border-[0.2px] border-gray-500 rounded-lg rounded-xl p-3 mb-3">
    
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={BAILogo} alt="BAI" className="w-4 h-4" />
            <span>$BAI</span>
          </div>
          <p className="font-semibold">2083.42</p>
        </div>
      </div>

      {/* Bonus Section */}
      <div className="flex justify-between text-xs text-center mb-4">
        <span>$BAI Bonus:</span>
        <span className="text-[#ff3cac]">+10% from $1K</span>
        <span className="text-[#ff3cac]">+30% from $2.5K</span>
        <span className="text-[#ff3cac]">+70% from $5K</span>
      </div>

      {/* Connect Wallet */}
      <button className="w-full py-3 rounded-xl main-bg">
        Connect Wallet
      </button>

      <p className="text-xs text-white mt-3 text-center">
By proceeding, you agree to our 
        <span className="underline cursor-pointer text-[#ff3cac]">Terms of Token Sale </span> and{" "}
        <span className="underline cursor-pointer text-[#ff3cac]" >Privacy Policy</span>
      </p>

      {/* Invite Section */}
      <div className="bg-[#1a1a1a] rounded-xl p-3 mt-4 flex justify-between items-center">
        <p className="text-xs">
          Get <span className="text-[#ff3cac]">10%</span> from every referral’s purchase
        </p>
        <button className="bg-[#400040] text-[#ff3cac] text-xs px-3 py-1 rounded-lg">
          Invite & Earn ✨
        </button>
      </div>
    </div>
  );
};

export default Presale;
