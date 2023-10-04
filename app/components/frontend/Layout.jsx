"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

const Layout = ({ children }) => {
  const params = useParams();
  useEffect(() => {
    document.querySelectorAll("script").forEach((script) => {
      script.parentNode.removeChild(script);
    });
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
    return () => {
      // Hủy tải các tập tin khi component bị hủy
      scriptUrls.forEach((url) => {
        const script = document.querySelector(`script[src="${url}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, [params.slug]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
