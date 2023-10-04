import LayoutDashBoard from "../components/dashboard/LayoutDash";

export const metadata = {
  title: "Trang quản trị",
  description: "Quản trị nội dung website",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google font*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Linear Icon css */}
        <link rel="stylesheet" href="/dashboard/assets/css/linearicon.css" />
        {/* fontawesome css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/vendors/font-awesome.css"
        />
        {/* Themify icon css*/}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/vendors/themify.css"
        />
        {/* ratio css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/ratio.css"
        />
        {/* remixicon css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/remixicon.css"
        />
        {/* Feather icon css*/}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/vendors/feather-icon.css"
        />
        {/* Plugins css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/vendors/scrollbar.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/vendors/animate.css"
        />
        {/* Bootstrap css*/}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/vendors/bootstrap.css"
        />
        {/* vector map css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/vector-map.css"
        />
        {/* Slick Slider Css */}
        <link rel="stylesheet" href="/dashboard/assets/css/vendors/slick.css" />
        {/* App css */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/dashboard/assets/css/style.css"
        />
      </head>

      <body>
        <LayoutDashBoard>{children}</LayoutDashBoard>
      </body>
    </html>
  );
}
