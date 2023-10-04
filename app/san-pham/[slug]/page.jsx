import React from "react";
import ProductDetails from "@/app/components/ProductDetails";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("@/app/components/Footer"), {
  ssr: false,
});

const pageProduct = () => {
  return (
    <React.Fragment>
      <ProductDetails />
      <DynamicFooter />
    </React.Fragment>
  );
};

export default pageProduct;
