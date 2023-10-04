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
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/imgs/theme/favicon.svg"
        />

        <link rel="stylesheet" href="/assets/css/plugins/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css?v=5.6" />
      </head>

      <body suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
