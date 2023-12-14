import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import imgBannerAbout from "../images/aboutBanner.png";
import Collapse from "../components/collapse";
import CollapseData from "../datas/collapses.json";




const About = () => {
    return (
      <div className="About">
        <Header />
        <main>
        <Banner image={imgBannerAbout} titre="" />
        <div className="collapse">
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>


        </main>
        <Footer />
      </div>
    );
  };
  
  export default About;