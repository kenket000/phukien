import Layout from "./components/frontend/Layout";
import "./globals.css";

export const metadata = {
  title: "Demo Phụ Kiện",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          id="rtl-link"
          rel="stylesheet"
          type="text/css"
          href="/assets/css/vendors/bootstrap.css"
        />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/vendors/font-awesome.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/vendors/feather-icon.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/vendors/slick/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/vendors/slick/slick-theme.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bulk-style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/vendors/animate.css"
        />
        <link
          id="color-link"
          rel="stylesheet"
          type="text/css"
          href="/assets/css/style.css"
        />
      </head>

      <body className="bg-effect" suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}