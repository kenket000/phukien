"use client";
import { useEffect } from "react";
const ScriptJS = () => {
  useEffect(() => {
    document.querySelectorAll("script").forEach((script) => {
      script.parentNode.removeChild(script);
    });
    console.log("Đã xóa");
    const scriptUrls = [
      "/assets/js/vendor/jquery-3.6.0.min.js",
      "/assets/js/vendor/jquery-migrate-3.3.0.min.js",
      "/assets/js/vendor/bootstrap.bundle.min.js",
      "/assets/js/plugins/slick.js",
      "/assets/js/vendor/modernizr-3.6.0.min.js",
      "/assets/js/plugins/jquery.syotimer.min.js",
      "/assets/js/plugins/waypoints.js",
      "/assets/js/plugins/wow.js",
      "/assets/js/plugins/perfect-scrollbar.js",
      "/assets/js/plugins/magnific-popup.js",
      "/assets/js/plugins/select2.min.js",
      "/assets/js/plugins/counterup.js",
      "/assets/js/plugins/jquery.countdown.min.js",
      "/assets/js/plugins/images-loaded.js",
      "/assets/js/plugins/isotope.js",
      "/assets/js/plugins/scrollup.js",
      "/assets/js/plugins/jquery.vticker-min.js",
      "/assets/js/plugins/jquery.theia.sticky.js",
      "/assets/js/plugins/jquery.elevatezoom.js",
      "/assets/js/main.js?v=5.6",
      "/assets/js/shop.js?v=5.6",
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

    console.log("Đã thêm mới");
    return () => {
      // Hủy tải các tập tin khi component bị hủy
      scriptUrls.forEach((url) => {
        const script = document.querySelector(`script[src="${url}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);
  return null;
};

export default ScriptJS;
