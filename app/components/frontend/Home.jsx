import React from "react";
import Slider from "./Slider";
import Banner from "./Banner";
import PoplularProducts from "./PoplularProducts";
import DealProducts from "./DealProducts";

const HomePage = () => {
  return (
    <React.Fragment>
      <main className="main">
        <Slider />
        <Banner />
        <PoplularProducts />
        <DealProducts />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
