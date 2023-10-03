import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      {/* <div id="preloader">
        <div id="loading-wrapper" className="show">
          <div id="loading-text">
            {" "}
            <img src="/assets/img/logo_loading.png" />{" "}
          </div>
          <div id="loading-content" />
        </div>
      </div> */}
      {/* ====== end loading page ====== */}
      {/* ====== start top navbar ====== */}
      <div className="top-navbar style-4">
        <div className="container">
          <div className="content text-white">
            <span className="btn sm-butn bg-white py-0 px-2 me-2 fs-10px">
              <small className="fs-10px">Special</small>
            </span>
            <img
              src="/assets/img/icons/nav_icon/imoj_heart.png"
              className="icon-15"
            />
            <span className="fs-10px op-6">Get </span>
            <small className="op-10 fs-10px">20% Discount</small>
            <span className="fs-10px op-6">Get for New Account</span>
            <a
              href="page-contact-5.html"
              className="fs-10px text-decoration-underline ms-2"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
      {/* ====== end top navbar ====== */}
      {/* ====== start navbar ====== */}
      <nav className="navbar navbar-expand-lg navbar-light style-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/assets/img/logo_lgr.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Homes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li>
                    <a className="dropdown-item" href="index.html">
                      {" "}
                      Landing Preview
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-it-solutions2.html">
                      {" "}
                      Creative It Solutions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-data-analysis.html">
                      {" "}
                      Data Analysis{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-app-landing.html">
                      {" "}
                      App Landing{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="home-saas-technology.html"
                    >
                      {" "}
                      Saas Technology{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="home-marketing-startup.html"
                    >
                      {" "}
                      Marketing Startup{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-it-solutions.html">
                      {" "}
                      It Solution{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="home-software-company.html"
                    >
                      {" "}
                      Software Company{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="home-digital-agency.html"
                    >
                      {" "}
                      Digital Agency{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="home-shop-modern.html">
                      {" "}
                      Modern Shop{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  pages
                  <small className="hot alert-danger text-danger">hot</small>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li>
                    <a className="dropdown-item" href="page-about-app.html">
                      about
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-product-app.html">
                      product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-services-app.html">
                      services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="page-shop-app.html">
                      shop
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="page-single-project-app.html"
                    >
                      single project
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="page-single-post-app.html"
                    >
                      single post
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="page-portfolio-app.html">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="page-blog-app.html">
                  blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="page-contact-app.html">
                  <img
                    src="/assets/img/icons/nav_icon/price.png"
                    className="icon-15 me-1"
                  />
                  contact
                </a>
              </li>
            </ul>
            <div className="nav-side">
              <div className="d-flex align-items-center">
                <a href="#" className="search-icon me-4">
                  <i className="bi bi-person" />
                </a>
                <a
                  href="page-contact-app.html"
                  className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold"
                >
                  <span>
                    Join iteck Hub <i className="bi bi-arrow-right ms-1" />{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
