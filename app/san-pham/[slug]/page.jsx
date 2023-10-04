import React from "react";
import ProductDetails from "@/app/components/frontend/ProductDetails";
import dynamic from "next/dynamic";

const pageProduct = () => {
  return (
    <React.Fragment>
      <ProductDetails />
    </React.Fragment>
  );
};

export default pageProduct;
