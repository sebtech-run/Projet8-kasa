import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ErrorPageDisplay from "../components/errorPage";

const NoPage = () => {
    return (
      <>
        <div className="NoPage">
          <Header />
          <main>
            <ErrorPageDisplay />
          </main>
          <Footer />
        </div>
      </>
    );
  };
  
  export default NoPage;