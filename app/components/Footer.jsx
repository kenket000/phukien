import dynamic from "next/dynamic";
import ScriptJS from "./ScriptJS";

const Footer = () => {
  return (
    <>
      <footer className="style-4 mt-0 pt-100">
        <div className="container">
          <div className="section-head text-center style-4">
            <h2 className="mb-10">
              {" "}
              Ready To <span> Download </span>{" "}
            </h2>
            <p>
              Discover your new favorite spaces, from Sao Paulo to Seoul.
              Download from App Store or Google Play.
            </p>
            <div className="d-flex align-items-center justify-content-center mt-50">
              <a
                href="https://www.apple.com/app-store/"
                className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                target="_blank"
              >
                <small>
                  {" "}
                  <i className="fab fa-apple me-2 pe-2 border-end" /> Download
                  On App Store{" "}
                </small>
              </a>
              <a
                href="https://play.google.com/store/apps"
                className="btn rounded-pill hover-blue4 fw-bold border-blue4"
                target="_blank"
              >
                <small>
                  {" "}
                  <i className="fab fa-google-play me-2 pe-2 border-end" />{" "}
                  Download On Google Play{" "}
                </small>
              </a>
            </div>
          </div>
          <div className="foot mt-80">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="logo">
                  <img src="/assets/img/logo_lgr.png" />
                </div>
              </div>
              <div className="col-lg-8">
                <ul className="links">
                  <li>
                    <a href="home-app-landing.html" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="page-about-5.html">about</a>
                  </li>
                  <li>
                    <a href="page-product-5.html">product</a>
                  </li>
                  <li>
                    <a href="page-portfolio-5.html">portfolio</a>
                  </li>
                  <li>
                    <a href="page-services-5.html">services</a>
                  </li>
                  <li>
                    <a href="page-shop-5.html">shop</a>
                  </li>
                  <li>
                    <a href="page-blog-5.html">blog</a>
                  </li>
                  <li>
                    <a href="page-contact-5.html">contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div className="dropdown">
                  <button
                    className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/img/lang.png" className="me-2" />
                    <small>English</small>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Arabic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copywrite text-center">
            <small className="small">
              © 2022 Copyrights by{" "}
              <a href="#" className="fw-bold text-decoration-underline">
                Iteck Co.
              </a>{" "}
              All Rights Reserved. Designed by{" "}
              <a
                href="https://themeforest.net/user/themescamp"
                className="fw-bold text-decoration-underline"
              >
                ThemesCamp
              </a>
            </small>
          </div>
        </div>
        {/* <img src="assets/img/footer/footer_4_wave.png" alt="" class="wave"> */}
      </footer>
      <a
        href="#"
        className="to_top bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"
      >
        <i className="bi bi-chevron-up fs-6 text-dark" />
      </a>
      <ScriptJS />
    </>
  );
};

export default Footer;
