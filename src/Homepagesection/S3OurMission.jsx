import React, { useState } from "react";
import m1 from "../assets/mission/m1.png";
import m2 from "../assets/mission/m2.png";
import m3 from "../assets/mission/m3.png";
import m4 from "../assets/mission/m4.png";
import m5 from "../assets/mission/m5.png";
import m6 from "../assets/mission/m6.png";
import m7 from "../assets/mission/m7.png";
import m8 from "../assets/mission/m8.png";
import m9 from "../assets/mission/m9.png";
import m10 from "../assets/mission/m10.png";
import m11 from "../assets/mission/m11.png";
import m12 from "../assets/mission/m12.png";

const S3OurMission = () => {
  const [selectedMission, setSelectedMission] = useState(null);

  const missions = [
    {
      leftImg: m1,
      leftText: "Gaming Platform",
      leftParagraph:
        "Secure blockchain-based gaming with provably fair outcomes, instant crypto payouts, and cross-platform compatibility.",
      leftDetails: {
        overview:
          "Transform the gaming industry with our blockchain-powered gaming platform that ensures fairness, transparency, and instant rewards.",
        keyFeatures: [
          "Provably fair gaming algorithms",
          "Instant cryptocurrency payouts",
          "Cross-platform compatibility",
          "Decentralized tournament systems",
          "Smart contract-based rewards",
          "Anti-cheat blockchain verification",
        ],
        benefits: [
          "100% transparent and verifiable game outcomes",
          "No waiting periods for withdrawals",
          "Global player base with unified rewards",
          "Automated prize distribution",
        ],
      },

      rightImg: m2,
      rightText: "Live Streaming App",
      rightParagraph:
        "Decentralized streaming platform with crypto-powered tipping, zero censorship, and direct creator-to-audience monetization.",
      rightDetails: {
        overview:
          "Revolutionize content creation with a decentralized streaming platform that empowers creators and removes intermediaries.",
        keyFeatures: [
          "Decentralized content delivery",
          "Crypto-powered tipping system",
          "Zero censorship policies",
          "Direct creator monetization",
          "NFT-based subscriber benefits",
          "Community governance tokens",
        ],
        benefits: [
          "Creators keep 95% of earnings",
          "Instant global payments",
          "Censorship-resistant content",
          "Fan engagement through tokens",
        ],
      },
    },
// 1
{
      leftImg: m3,
      leftText: "OTT Platform",
      leftParagraph:
        "Content streaming service with pay-per-view microtransactions, creator royalties, and AI-powered recommendations.",
leftDetails: {
        overview:
          "Next-generation streaming platform combining AI recommendations with blockchain-based micropayments for fair content distribution.",
        keyFeatures: [
          "Pay-per-view microtransactions",
          "AI-powered content recommendations",
          "Creator royalty distribution",
          "Decentralized content storage",
          "Multi-tier subscription models",
          "Smart contract licensing",
        ],
        benefits: [
          "Pay only for what you watch",
          "Fair compensation for creators",
          "Personalized viewing experience",
          "Global content accessibility",
        ],
      },
      rightImg: m4,
      rightText: "Decentralized Lottery",
      rightParagraph:
        "Transparent blockchain lottery with verifiable randomness, automatic payouts, and zero possibility of manipulation.",
      rightDetails: {
        overview:
          "Experience the most transparent lottery system ever created, powered by blockchain technology and verifiable random number generation.",
        keyFeatures: [
          "Verifiable random number generation",
          "Automatic smart contract payouts",
          "Transparent prize pool tracking",
          "Multi-chain compatibility",
          "Istant winner verification",
          "Community governance",
        ],
        benefits: [
          "100% manipulation-proof system",
          "Instant automatic payouts",
          "Public verification of all draws",
          "Lower operational costs",
        ],
      },
    },
// 2

 {
  leftImg: m5,
  leftText: "Casino Platform",
  leftParagraph:
    "Live and traditional casino games with provably fair algorithms, instant withdrawals, and transparent house edge.",
  leftDetails: {
    overview:
      "Experience the future of online gambling with our blockchain-based casino platform featuring provably fair games and instant payouts.",
    keyFeatures: [
      "Provably fair game algorithms",
      "Live dealer integration",
      "Instant cryptocurrency withdrawals",
      "Transparent house edge display",
      "Multi-game tournament system",
      "VIP tokenized rewards program",
    ],
    benefits: [
      "Mathematically verifiable fairness",
      "No withdrawal delays or fees",
      "Transparent odds and payouts",
      "Enhanced player trust",
    ],
  },
  rightImg: m6,
  rightText: "Colour Prediction Game",
  rightParagraph:
    "Exciting prediction games with instant results, multiple betting options, and secure smart contract execution.",
  rightDetails: {
    overview:
      "Simple yet engaging prediction games powered by smart contracts, offering transparent gameplay and instant rewards.",
    keyFeatures: [
      "Multiple prediction markets",
      "Smart contract automation",
      "Instant result verification",
      "Progressive jackpot system",
      "Social betting features",
      "Mobile-first design",
    ],
    benefits: [
      "Fast-paced entertainment",
      "Guaranteed fair outcomes",
      "Social gaming experience",
      "Low barrier to entry",
    ],
  },},

// 3
 {
  leftImg: m7,
  leftText: "NFT Games",
  leftParagraph:
    "Play-to-earn gaming with tradable assets, interoperable NFTs, and player-owned in-game economies.",
  leftDetails: {
    overview:
      "Revolutionary gaming experience where players truly own their in-game assets and can earn while playing through our NFT-based ecosystem.",
    keyFeatures: [
      "Play-to-earn mechanics",
      "Tradable NFT assets",
      "Cross-game interoperability",
      "Player-owned economies",
      "Breeding and crafting systems",
      "Guild-based governance",
    ],
    benefits: [
      "Real ownership of digital assets",
      "Earn while playing",
      "Assets retain value outside games",
      "Community-driven development",
    ],
  },
  rightImg: m8,
  rightText: "Tap to Earn",
  rightParagraph:
    "Simple mobile earning app with daily rewards, achievement-based bonuses, and instant crypto withdrawals.",
  rightDetails: {
    overview:
      "Gamify your daily routine with our tap-to-earn mobile app that rewards users for simple interactions and consistent engagement.",
    keyFeatures: [
      "Simple tap-based gameplay",
      "Daily reward streaks",
      "Achievement milestone system",
      "Referral bonus program",
      "Energy and upgrade systems",
      "Instant crypto withdrawals",
    ],
    benefits: [
      "Easy passive income generation",
      "No complex learning curve",
      "Daily engagement rewards",
      "Social sharing bonuses",
    ],
  },
},

// 4


 {
  leftImg: m9,
  leftText: "AI Creation Platform",
  leftParagraph:
    "Generate images, content, and websites with AI tools powered by blockchain for ownership verification and monetization.",
  leftDetails: {
    overview:
      "Comprehensive AI-powered creation suite with blockchain-verified ownership, enabling creators to monetize their AI-generated content.",
    keyFeatures: [
      "Multi-modal AI generation",
      "Blockchain ownership verification",
      "Creator monetization tools",
      "Collaborative creation spaces",
      "IP protection mechanisms",
      "Marketplace integration",
    ],
    benefits: [
      "Verified content ownership",
      "Multiple revenue streams",
      "Protection against plagiarism",
      "Global marketplace access",
    ],
  },
  rightImg: m10,
  rightText: "AI Image Generator",
  rightParagraph:
    "Create stunning AI-generated images with blockchain-verified ownership, perfect for NFTs and digital art marketplaces.",
  rightDetails: {
    overview:
      "Professional-grade AI image generation platform with blockchain authentication, designed for artists, creators, and NFT enthusiasts.",
    keyFeatures: [
      "Advanced AI image generation",
      "Blockchain ownership certificates",
      "NFT marketplace integration",
      "Style transfer capabilities",
      "Batch generation tools",
      "Commercial licensing options",
    ],
    benefits: [
      "High-quality image output",
      "Verified authenticity",
      "Easy NFT creation",
      "Commercial usage rights",
    ],
  },
},

// 5


 {
  leftImg: m11,
  leftText: "E-commerce",
  leftParagraph:
    "Decentralized marketplace with crypto payments, transparent supply chain tracking, and tokenized loyalty rewards.",
  leftDetails: {
    overview:
      "Next-generation e-commerce platform combining decentralized payments, supply chain transparency, and tokenized customer rewards.",
    keyFeatures: [
      "Cryptocurrency payment integration",
      "Supply chain transparency",
      "Tokenized loyalty programs",
      "Decentralized reviews system",
      "Smart contract escrow",
      "Multi-vendor marketplace",
    ],
    benefits: [
      "Lower transaction fees",
      "Enhanced product authenticity",
      "Rewarding customer loyalty",
      "Global payment acceptance",
    ],
  },
  rightImg: m12,
  rightText: "Crypto-Powered Work",
  rightParagraph:
    "Remote work platform with instant crypto payments, transparent job markets, and decentralized dispute resolution.",
  rightDetails: {
    overview:
      "Revolutionary freelance and remote work platform leveraging blockchain technology for fair payments, transparent ratings, and decentralized governance.",
    keyFeatures: [
      "Instant cryptocurrency payments",
      "Decentralized dispute resolution",
      "Transparent rating system",
      "Smart contract job agreements",
      "Multi-chain payment support",
      "Community governance tokens",
    ],
    benefits: [
      "Instant global payments",
      "Fair dispute resolution",
      "No platform fee manipulation",
    ],
  },
},

// 6




  ];

  return (
    <section className="bg-black text-white py-5 md:py-10  px-2 md:px-5  relative" id="mission">
      <h1 className="text-3xl md:text-5xl font-bold text-gradient text-center mb-12">
        Our Mission
      </h1>

      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {missions.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between 
              backdrop-blur-md bg-gradient-to-b from-[#111] to-[#000] 
              rounded-3xl px-2 md:px-8 py-8 shadow-[0_0_30px_rgba(128,0,255,0.15)] 
              border border-gray-800 hover:shadow-[0_0_40px_rgba(155,0,255,0.25)] 
              transition-all duration-300 items-center gap-6"
          >
            {/* Left Side */}
            <div
              onClick={() =>
                setSelectedMission({
                  title: item.leftText,
                  image: item.leftImg,
                  details: item.leftDetails,
                })
              }
              className="flex flex-row flex-wrap overflow-hidden items-center gap-4 w-full sm:w-1/2 justify-center sm:justify-start cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <img
                src={item.leftImg}
                alt="mission"
                className="  w-[70px]  h-[70px]  object-contain"
              />
              <div className="flex flex-col gap-2 text-center sm:text-left ">
                <p className="text-sm font-semibold md:w-[13rem]">
                  {item.leftText}
                </p>
                <p className="text-sm text-gray-400">{item.leftParagraph}</p>
              </div>
            </div>

            {/* Right Side */}
            <div
              onClick={() =>
                setSelectedMission({
                  title: item.rightText,
                  image: item.rightImg,
                  details: item.rightDetails, // ✅ fixed key name here
                })
              }
              className="flex flex-row  flex-wrap items-center gap-4 w-full sm:w-1/2 justify-center sm:justify-start cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <img
                src={item.rightImg}
                alt="mission"
                className="w-[70px] h-[70px] object-contain"
              />
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <p className="text-sm font-semibold md:w-[13rem]">
                  {item.rightText}
                </p>
                <p className="text-sm text-gray-400">{item.rightParagraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedMission && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-[#111] border border-gray-700 p-8 rounded-3xl w-[90%] sm:w-[600px] shadow-2xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-5 text-pink-500 text-center">
              {selectedMission.title}
            </h2>

            {/* Overview */}
            <div className="text-gray-300 text-sm mb-4">
              <h3 className="text-lg text-pink-400 font-semibold mb-1">
                Overview
              </h3>
              <p>{selectedMission.details.overview}</p>
            </div>

            {/* Key Features */}
            <div className="text-gray-300 text-sm mb-4">
              <h3 className="text-lg text-pink-400 font-semibold mb-1">
                Key Features
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedMission.details.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="text-gray-300 text-sm mb-6">
              <h3 className="text-lg text-pink-400 font-semibold mb-1">
                Benefits
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedMission.details.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={() => setSelectedMission(null)}
                className="px-5 py-2 bg-pink-600 hover:bg-pink-700 transition rounded-lg font-semibold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default S3OurMission;
