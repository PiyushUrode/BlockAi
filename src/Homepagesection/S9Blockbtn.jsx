import React from 'react'
import logo from "../assets/logo/icon1.png"

const S9Blockbtn = () => {
  return (
    <div className='bg-black text-white py-5 md:py-10  px-2 md:px-5 flex flex-col justify-center items-center text-center' id='join'>

      {/* Header */}
      <h1 className="text-md sm:text-xl md:text-3xl font-bold mb-4 main-text">
        Buy $BAI Now
      </h1>
      <p className="text-xl  sm:text-2xl md:text-4xl text-gray-300 mb-8">
        Be part of the network of the future.
      </p>

      {/* Button */}
      <button
        type="button"
        className="flex items-center gap-3 bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-white font-semibold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg"
      >
        <img src={logo} alt="BAI Logo" className="w-5 h-5 sm:w-7 sm:h-7" />
        <span className='text-sm'>Join the BlockAi Presale</span>
      </button>

    </div>
  )
}

export default S9Blockbtn
