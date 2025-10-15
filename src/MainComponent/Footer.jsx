import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/icon1.png";
import telegram from "../assets/footer/f1.webp";
import twitter from "../assets/footer/f2.webp";
import cmc from "../assets/footer/f6.webp";
import coingecko from "../assets/footer/f4.webp";
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter)


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BAI Logo" className="w-10 h-10" />
              <div>
                <h2 className="text-white text-xl font-semibold">Block AI</h2>
                <p className="text-gray-400 text-sm">AI Network</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
 <a
    href="https://t.me/blockaiofficals"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 text-3xl hover:scale-110 hover:text-cyan-300 transition-transform duration-300"
  >
    <FaTelegramPlane />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/BLOCKAIoffical"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-3xl hover:scale-110 hover:text-gray-300 transition-transform duration-300"
  >
    <FaXTwitter />
  </a>
              <div className="relative">
                <img src={coingecko} alt="Coingecko" className="w-9 h-9 opacity-50" />
                <span className="absolute -top-1 -right-2 bg-lime-400 text-xs text-black font-semibold px-1.5 py-0.5 rounded-full">
                  soon
                </span>
              </div>
              <div className="relative">
                <img src={cmc} alt="CoinMarketCap" className="w-9 h-9 opacity-50" />
                <span className="absolute -top-1 -right-2 bg-lime-400 text-xs text-black font-semibold px-1.5 py-0.5 rounded-full">
                  soon
                </span>
              </div>
            </div>
          </div>
        <div className="border-t border-neutral-600"></div>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left Logo & Info */}

          {/* Link Groups */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 w-full ">
            <div>
              <h3 className="text-white font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="#">Whitepaper</Link></li>
                <li><Link to="#">Docs</Link></li>
                <li><Link to="#">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="#">Launchpad</Link></li>
                <li><Link to="#">AI Bots</Link></li>
                <li><Link to="#">AI Analyzer</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Presale</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="#">How to Buy</Link></li>
                <li><Link to="#">Don't have a wallet?</Link></li>
                <li><Link to="#">Support</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">BAI Token</h3>
              <ul className="space-y-2 text-sm">
                <li ><Link to="#">Tokenomics</Link></li>
                <li><Link to="#">Staking</Link></li>
                <li><Link to="#roadmap">Roadmap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-600"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">
          <div className="flex flex-wrap gap-4">
            <Link to="#">Terms and Legal</Link>
            <Link to="#">Privacy & Cookie Policy</Link>
            <Link to="#">Risk Disclosure</Link>
          </div>

          <p className="text-gray-400">
            Copyright © {year} <span className="text-white font-semibold">BAI Network</span>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          <span className="font-semibold text-white">Disclaimer:</span> Cryptocurrency may be unregulated in your jurisdiction.
          The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
