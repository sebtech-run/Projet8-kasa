import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Gallery from "../components/gallery";
import imgHomeBanner from "../images/homeBanner.png";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
      <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
      <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;