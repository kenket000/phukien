"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import HeaderDash from "./HeaderDash";

const LayoutDashBoard = ({ children }) => {
  const params = useParams();
  useEffect(() => {
    document.querySelectorAll("script").forEach((script) => {
      script.parentNode.removeChild(script);
    });
    const scriptUrls = [
      "/dashboard/assets/js/jquery-3.6.0.min.js",
      "/dashboard/assets/js/bootstrap/bootstrap.bundle.min.js",
      "/dashboard/assets/js/icons/feather-icon/feather.min.js",
      "/dashboard/assets/js/icons/feather-icon/feather-icon.js",
      "/dashboard/assets/js/scrollbar/simplebar.js",
      "/dashboard/assets/js/scrollbar/custom.js",
      "/dashboard/assets/js/config.js",
      "/dashboard/assets/js/tooltip-init.js",
      "/dashboard/assets/js/sidebar-menu.js",
      "/dashboard/assets/js/notify/bootstrap-notify.min.js",
      "/dashboard/assets/js/notify/index.js",
      "/dashboard/assets/js/chart/apex-chart/apex-chart1.js",
      "/dashboard/assets/js/chart/apex-chart/moment.min.js",
      "/dashboard/assets/js/chart/apex-chart/apex-chart.js",
      "/dashboard/assets/js/chart/apex-chart/stock-prices.js",
      "/dashboard/assets/js/chart/apex-chart/chart-custom1.js",
      "/dashboard/assets/js/slick.min.js",
      "/dashboard/assets/js/custom-slick.js",
      "/dashboard/assets/js/customizer.js",
      "/dashboard/assets/js/ratio.js",
      "/dashboard/assets/js/sidebareffect.js",
      "/dashboard/assets/js/script.js",
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
    <React.Fragment>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <HeaderDash />
        {children}
      </div>
    </React.Fragment>
  );
};

export default LayoutDashBoard;
