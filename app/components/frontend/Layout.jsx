"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const params = useParams();
  useEffect(() => {
    const scriptUrls = [
      "/assets/js/jquery-3.6.0.min.js",
      "/assets/js/jquery-ui.min.js",
      "/assets/js/bootstrap/bootstrap.bundle.min.js",
      "/assets/js/bootstrap/bootstrap-notify.min.js",
      "/assets/js/bootstrap/popper.min.js",
      "/assets/js/feather/feather.min.js",
      "/assets/js/feather/feather-icon.js",
      "/assets/js/lazysizes.min.js",
      "/assets/js/slick/slick.js",
      "/assets/js/slick/slick-animation.min.js",
      "/assets/js/slick/custom_slick.js",
      "/assets/js/auto-height.js",
      "/assets/js/timer1.js",
      "/assets/js/fly-cart.js",
      "/assets/js/quantity-2.js",
      "/assets/js/wow.min.js",
      "/assets/js/custom-wow.js",
      "/assets/js/script.js",
    ];
    const loadScript = (index) => {
      if (index >= scriptUrls.length) {
        return;
      }
      const script = document.createElement("script");
      script.src = scriptUrls[index];
      if (index === 0) {
        script.defer = true;
      } else {
        script.async = true;
      }

      document.body.appendChild(script);

      script.onload = () => {
        loadScript(index + 1);
      };
    };
    loadScript(0);
    console.log(params);
    return () => {
      // Hủy tải các tập tin khi component bị hủy
      scriptUrls.forEach((url) => {
        const script = document.querySelector(`script[src="${url}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, [params]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
