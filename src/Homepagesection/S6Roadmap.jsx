import React from 'react'

const S6Roadmap = () => {
  const roadmapItems = [
    {
      id: "now-live",
      title: "Q3 2024",
      iconColor: "bg-pink-500",
      description:
        "Foundation & Core Infrastructure.",
      bgColor: "bg-[#2A0F3A]",
      status: "active",
            completed: [
      "Blockchain infrastructure setup",
      "Core smart contract development",
      "Multi-chain compatibility",
      "Basic wallet integration",
      "Security audit framework",
    ],

    },
    {
      id: "h1-2026",
      title: "Q4 2024",
      iconColor: "bg-yellow-500",
      description:
        "Gaming & Entertainment Launch",
      bgColor: "bg-gray-800",
      status: "upcoming",
            completed: [
      "Decentralized Lottery platform",
      "Colour Prediction Game",
      "Tap to Earn mobile app",
      "Provably fair algorithms",
    ],
    inProgress: [
      "Casino Platform development",
      "Gaming Platform alpha",
      "Smart contract optimizations",
    ],
    },
    {
      id: "h2-2026",
      title: "Q1 2025",
      iconColor: "bg-yellow-500",
      description:
        "AI-Powered Creation Suite",
      bgColor: "bg-gray-800",
      status: "upcoming",
            completed: [
      "AI Image Generator",
      "Blockchain ownership verification",
      "NFT marketplace integration",

    ],
    inProgress: [
      "AI Creation Platform",
      "Multi-modal AI generation",
      "Creator monetization tools",
    ],
    },
    {
      id: "h1-2027",
      title: "Q2 2025",
      iconColor: "bg-blue-500",
      description:
        "Content & Streaming Platforms",
      bgColor: "bg-gray-800",
      status: "upcoming",
            planned: [
      "Live Streaming App with crypto tipping",
      "OTT Platform with pay-per-view",
      "Decentralized content delivery",
      "Creator royalty distribution",
      "Zero censorship policies",
      "Community governance tokens",
    ],
    },
    {
      id: "h2-2027",
      title: "Q3 2025",
      iconColor: "bg-green-500",
      description:
        "NFT Gaming & Play-to-Earn",
      bgColor: "bg-gray-800",
      status: "upcoming",
            upcoming: [
      "NFT Games with play-to-earn",
      "Cross-game asset interoperability",
      "Player-owned economies",
      " Guild-based governance",
      "Breeding and crafting systems",
      "Tournament and competitive play",
    ],
    },

        {
      id: "h2-2027",
      title: "Q4 2025",
      iconColor: "bg-green-500",
      description:
        "Commerce & Work Platforms",
      bgColor: "bg-gray-800",
      status: "upcoming",
            futureVision: [
      "E-commerce marketplace",
      "Crypto-Powered Work platform",
      "Supply chain transparency",
      "Decentralized dispute resolution",
      "Tokenized loyalty programs",
      "Global payment infrastructure",
    ],
    },

    {
      id: "h2-2027",
      title: "2026+",
      iconColor: "bg-green-500",
      description:
        "Ecosystem Expansion & Innovation",
      bgColor: "bg-gray-800",
      status: "upcoming",
            longTermVision : [
      "Cross-platform ecosystem integration",
      "Advanced AI model marketplace",
      "Metaverse gaming experiences",
      "Enterprise blockchain solutions",
      "Global DeFi protocol expansion",
      "Web3 social networking features",
    ],
    },
  ];

  return (
    <div className='bg-black text-white py-5 md:py-10  px-2 md:px-5 font-sans relative overflow-hidden' id='roadmap'>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 main-text">
          Roadmap
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white">
          The Evolution of Intelligent Infrastructure
        </p>
      </div>

      {/* Progress Line */}
      <div className="relative w-full h-1 rounded-full mb-12 bg-gray-700">
        <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 h-1 w-1/2 rounded-full"></div>
      </div>

      {/* Scrollable Roadmap Section */}
      <div className="relative overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 max-w-[95vw] sm:max-w-[95vw] md:max-w-[65vw]  xl:max-w-[65vw] py-5 ">
      {/* <div className="relative overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 max-w-[64vw] py-5 "> */}
        {/* <div className="overflow-x-auto overflow-y-hidden pb-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"> */}
          <div className="flex flex-nowrap gap-6 md:gap-8 px-2 sm:px-0">
            {roadmapItems.map((item) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-[85%] sm:w-72 md:w-80 lg:w-96 ${item.bgColor} rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-between h-full transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Title & Status */}
                <div className="flex items-center text-lg font-semibold mb-3">
                  <div
                    className={`w-3 h-3 rounded-full ${item.iconColor} mr-2 flex items-center justify-center`}
                  >
                    {item.status === "active" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <div className="w-2 h-2 rounded-full border border-white"></div>
                    )}
                  </div>
                  {item.title}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
      <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
  {item.completed && item.completed.length > 0 && (
    <div className="mb-2">
      <span className="font-semibold text-green-400">✅ Completed</span>
      <ul className="list-disc list-inside ml-2">
        {item.completed.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  )}

  {item.inProgress && item.inProgress.length > 0 && (
    <div className="mb-2">
      <span className="font-semibold text-yellow-400">🔄 In Progress</span>
      <ul className="list-disc list-inside ml-2">
        {item.inProgress.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  )}

  {item.planned && item.planned.length > 0 && (
    <div className="mb-2">
      <span className="font-semibold text-blue-400">📝 Planned</span>
      <ul className="list-disc list-inside ml-2">
        {item.planned.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  )}

  {item.upcoming && item.upcoming.length > 0 && (
    <div className="mb-2">
      <span className="font-semibold text-purple-400">⏳ Upcoming</span>
      <ul className="list-disc list-inside ml-2">
        {item.upcoming.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  )}

  {item.futureVision && item.futureVision.length > 0 && (
    <div className="mb-2">
      <span className="font-semibold text-pink-400">🌟 Future Vision</span>
      <ul className="list-disc list-inside ml-2">
        {item.futureVision.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  )}

  {item.longTermVision && item.longTermVision.length > 0 && (
    <div className="mb-2">
      <span className="font-semibold text-red-400">🚀 Long Term Vision</span>
      <ul className="list-disc list-inside ml-2">
        {item.longTermVision.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  )}
</div>


              </div>
            ))}
          </div>
        </div>
      </div>

    // </div>
  )
}

export default S6Roadmap
