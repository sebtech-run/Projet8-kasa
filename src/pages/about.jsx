import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import imgBannerAbout from "../images/aboutBanner.png";




const About = () => {
    return (
      <div className="About">
        <Header />
        <main>
        <Banner image={imgBannerAbout} titre="" />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default About;