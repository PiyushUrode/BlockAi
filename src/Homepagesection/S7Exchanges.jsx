import React from 'react';
import Ex1 from "../assets/partners/ai-driven-fraud-prevention.webp";
import Ex2 from "../assets/partners/biconomy.webp";
import Ex3 from "../assets/partners/ai-image-generator.webp";
import Ex4 from "../assets/partners/ai-powered-blockchain-protocol.webp";
import Ex5 from "../assets/partners/binance.webp";
import Ex6 from "../assets/partners/bitfinex.webp";
import Ex7 from "../assets/partners/bitget.webp";
import Ex8 from "../assets/partners/bitmart.webp";
import Ex9 from "../assets/partners/bitstamp.webp";
import Ex10 from "../assets/partners/bybit.webp";
import Ex11 from "../assets/partners/coinex.webp";
import Ex12 from "../assets/partners/decentralized-lottery.webp";
import Ex13 from "../assets/partners/e-commerce.webp";
import Ex14 from "../assets/partners/exchange-platform.webp";
import Ex15 from "../assets/partners/gaming-platform.webp";
import Ex16 from "../assets/partners/gate.webp";
// import Ex17 from "../assets/partners/gemini.webp";
// import Ex18 from "../assets/partners/htx.webp";
// import Ex19 from "../assets/partners/kraken.webp";
// import Ex20 from "../assets/partners/kucoin.webp";
// import Ex21 from "../assets/partners/lbank.webp";
// import Ex22 from "../assets/partners/live-streaming-app.webp";
// import Ex23 from "../assets/partners/logo.webp";
// import Ex24 from "../assets/partners/mexc.webp";
// import Ex25 from "../assets/partners/nft.webp";
// import Ex26 from "../assets/partners/okx.webp";
// import Ex27 from "../assets/partners/ott-platform.webp";
// import Ex28 from "../assets/partners/p2b.webp";
// import Ex29 from "../assets/partners/upbit.webp";
// import Ex30 from "../assets/partners/weex.webp";
// import Ex31 from "../assets/partners/xt.webp";

const S7Exchanges = () => {
  const images = [Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12, Ex13, Ex14 , Ex15, Ex16, ];

  return (
    <div className="flex flex-col gap-8 items-center py-5 md:py-10  px-2 md:px-5 w-full" id='technology'>
      <h1 className="text-3xl md:text-5xl text-gradient font-bold text-center">
        Powered By Technology
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center
              backdrop-blur-md 
              shadow-[0_0_20px_#7e22ce50] 
              hover:shadow-[0_0_30px_#ec489950] 
              shadow-[inset_0_-6px_12px_rgba(255,255,255,0.25)]
              bg-gradient-to-b from-[#111] to-[#000] 
              rounded-3xl p-6 
              border border-gray-800 
              hover:shadow-[0_0_40px_rgba(155,0,255,0.25)] 
              transition-all duration-300"
          >
            <img
              src={image}
              alt={`partner-${index + 1}`}
              className="w-[60px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default S7Exchanges;