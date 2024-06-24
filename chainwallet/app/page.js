import React from "react";
import Navbar from "./Navbar";
import BodySection from "./BodySection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen min-w-screen">
      <div className="grid grid-rows-[auto_1fr_auto] h-screen w-screen sm:h-[600px] sm:w-[450px] bg-customBlack shadow-lg rounded-lg">
        <Navbar />
        <BodySection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
