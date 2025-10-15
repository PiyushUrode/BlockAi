// pages/Homepage.jsx
import React, { Suspense } from "react";
import Layout from "../MainComponent/Layout.jsx";

// Lazy loaded sections
const S1Hero = React.lazy(() => import("../Homepagesection/S1Hero"));
const S2About = React.lazy(() => import("../Homepagesection/S2About"));
const S3OurMission = React.lazy(() => import("../Homepagesection/S3OurMission"));
// const S4Features = React.lazy(() => import("../Homepagesection/S4Features"));
const S5Tokenomics = React.lazy(() => import("../Homepagesection/S5Tokenomics"));
const S6Roadmap = React.lazy(() => import("../Homepagesection/S6Roadmap"));
const S7Exchanges = React.lazy(() => import("../Homepagesection/S7Exchanges"));
const S8FAQ = React.lazy(() => import("../Homepagesection/S8FAQ.jsx"));
const S9Blockbtn = React.lazy(()=>import("../Homepagesection/S9Blockbtn.jsx"))

const Homepage = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div id="load" className="flex justify-center items-center h-screen bg-black text-white text-4xl space-x-1 animate-pulse">
            {["B", "L", "O", "C", "K", "A",  "I", ].map((char, index) => (
              <div key={index}>{char}</div>
            ))}
          </div>
        }
      >
        <S1Hero />
        <S2About />
        <S3OurMission />
        {/* <S4Features/> */}
        <S5Tokenomics/>
        <S6Roadmap/>
        <S7Exchanges/>
        <S8FAQ/>
        <S9Blockbtn/>



      </Suspense>
    </Layout>
  );
};

export default React.memo(Homepage);
