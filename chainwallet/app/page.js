import React from "react";
import Navbar from "./Navbar";
import BodySection from "./BodySection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen min-w-screen overflow-none">
      <div className="grid grid-rows-[auto_1fr_auto] h-screen w-screen sm:h-auto sm:w-auto max-h-full max-w-full sm:max-h-[600px] sm:max-w-[450px] bg-customBlack shadow-lg rounded-lg overflow-none">
        <Navbar />
        <BodySection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

{
  /*
  import React from "react";
import Navbar from "./Navbar";
import BodySection from "./BodySection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen min-w-screen">
      <div className="grid grid-rows-[auto_1fr_auto] h-screen w-screen sm:h-auto sm:w-auto sm:max-h-[600px] sm:max-w-[450px] bg-customBlack shadow-lg rounded-lg">
        <Navbar />
        <BodySection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
  */
}
