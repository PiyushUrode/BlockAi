
import Headroom from "react-headroom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";
import Presale from "../MainComponent/Presale.jsx"

const Layout = ({ children }) => {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>

<div className="flex flex-col lg:flex-row w-full min-h-screen mx-auto bg-black px-4 md:px-8 gap-6">
  {/* Left Scrollable Content */}
  <main className="w-full lg:w-[70%] flex flex-col justify-center items-center ">
    {children}
  </main>

  {/* Right Presale Section */}
  <aside
    className="
      w-full 
      lg:w-[30%]
      hidden
      lg:block
      lg:sticky 
      lg:top-10 
      self-start
      h-auto 
      p-4 
    "
  >
    <Presale />
  </aside>
</div>


      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
