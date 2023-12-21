import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import FicheLogementDisplay from ".././components/logement/ficheLogementDisplay";


const FicheLogement = () => {
    return (
      <div className="fichelogement">
        <Header />
        <main>
          <FicheLogementDisplay />
 
        </main>
        <Footer />
      
      </div>
    );
  };
  
  export default FicheLogement;