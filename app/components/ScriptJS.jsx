"use client";
import React, { useEffect } from "react";

const ScriptJS = () => {
  useEffect(() => {
    const scriptUrls = [
      "/assets/js/lib/jquery-3.0.0.min.js",
      "/assets/js/lib/jquery-migrate-3.0.0.min.js",
      "/assets/js/lib/bootstrap.bundle.min.js",
      "/assets/js/lib/jquery-ui.min.js",
      "/assets/js/lib/slider-mob-touch.js",
      "/assets/js/lib/wow.min.js",
      "/assets/js/lib/jquery.fancybox.js",
      "/assets/js/lib/lity.js",
      "/assets/js/lib/swiper.min.js",
      "/assets/js/lib/jquery.waypoints.min.js",
      "/assets/js/lib/jquery.counterup.js",
      "/assets/js/lib/scrollIt.min.js",
      "/assets/js/main.js",
    ];

    const loadScript = (index) => {
      if (index >= scriptUrls.length) {
        return;
      }

      const script = document.createElement("script");
      script.src = scriptUrls[index];
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        loadScript(index + 1);
      };
    };

    // Bắt đầu load script từ index 0
    loadScript(0);

    // Xóa script khi component unmount
    return () => {
      scriptUrls.forEach((url) => {
        const script = document.querySelector(`script[src="${url}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []); // Tham số thứ hai là mảng rỗng, đảm bảo useEffect chỉ chạy một lần sau khi component được render

  return null; // Bạn có thể trả về null hoặc bất kỳ gì bạn muốn, vì không có nội dung UI cần render
};

export default ScriptJS;
