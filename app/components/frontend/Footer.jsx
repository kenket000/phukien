const Footer = () => {
  return (
    <>
      <footer className="main">
        <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                  <div className="newsletter-content">
                    <h2 className="mb-20">
                      Stay home &amp; get your daily <br />
                      needs from our shop
                    </h2>
                    <p className="mb-45">
                      Start You&#39;r Daily Shopping with{" "}
                      <span className="text-brand">Nest Mart</span>
                    </p>
                    <form className="form-subcriber d-flex">
                      <input type="email" placeholder="Your emaill address" />
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                  <img
                    src="/assets/imgs/banner/banner-9.png"
                    alt="newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay={0}
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-1.svg" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Best prices &amp; offers</h3>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-2.svg" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Free delivery</h3>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-3.svg" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Great daily deal</h3>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-4.svg" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Wide assortment</h3>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-5.svg" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Easy returns</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                <div
                  className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="banner-icon">
                    <img src="/assets/imgs/theme/icons/icon-6.svg" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Safe delivery</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding footer-mid">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div
                  className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp"
                  data-wow-delay={0}
                >
                  <div className="logo mb-30">
                    <a href="index.html" className="mb-15">
                      <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                    </a>
                    <p className="font-lg text-heading">
                      Awesome grocery store website template
                    </p>
                  </div>
                  <ul className="contact-infor">
                    <li>
                      <img src="/assets/imgs/theme/icons/icon-location.svg" />
                      <strong>Address: </strong>{" "}
                      <span>
                        5171 W Campbell Ave undefined Kent, Utah 53127 United
                        States
                      </span>
                    </li>
                    <li>
                      <img src="/assets/imgs/theme/icons/icon-contact.svg" />
                      <strong>Call Us:</strong>
                      <span>(+91) - 540-025-124553</span>
                    </li>
                    <li>
                      <img src="/assets/imgs/theme/icons/icon-email-2.svg" />
                      <strong>Email:</strong>
                      <span>sale@Nest.com</span>
                    </li>
                    <li>
                      <img src="/assets/imgs/theme/icons/icon-clock.svg" />
                      <strong>Hours:</strong>
                      <span>10:00 - 18:00, Mon - Sat</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h4 className=" widget-title">Company</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Delivery Information</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="widget-title">Account</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                  <li>
                    <a href="#">View Cart</a>
                  </li>
                  <li>
                    <a href="#">My Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Help Ticket</a>
                  </li>
                  <li>
                    <a href="#">Shipping Details</a>
                  </li>
                  <li>
                    <a href="#">Compare products</a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title">Corporate</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">Become a Vendor</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#">Farm Business</a>
                  </li>
                  <li>
                    <a href="#">Farm Careers</a>
                  </li>
                  <li>
                    <a href="#">Our Suppliers</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title">Popular</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">Milk &amp; Flavoured Milk</a>
                  </li>
                  <li>
                    <a href="#">Butter and Margarine</a>
                  </li>
                  <li>
                    <a href="#">Eggs Substitutes</a>
                  </li>
                  <li>
                    <a href="#">Marmalades</a>
                  </li>
                  <li>
                    <a href="#">Sour Cream and Dips</a>
                  </li>
                  <li>
                    <a href="#">Tea &amp; Kombucha</a>
                  </li>
                  <li>
                    <a href="#">Cheese</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div
          className="container pb-30 wow animate__animated animate__fadeInUp"
          data-wow-delay={0}
        >
          <div className="row align-items-center">
            <div className="col-12 mb-30">
              <div className="footer-bottom" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <p className="font-sm mb-0">
                © 2022, <strong className="text-brand">Nest</strong> - HTML
                Ecommerce Template <br />
                All rights reserved
              </p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
              <div className="hotline d-lg-inline-flex mr-30">
                <img
                  src="/assets/imgs/theme/icons/phone-call.svg"
                  alt="hotline"
                />
                <p>
                  1900 - 6666<span>Working 8:00 - 22:00</span>
                </p>
              </div>
              <div className="hotline d-lg-inline-flex">
                <img
                  src="/assets/imgs/theme/icons/phone-call.svg"
                  alt="hotline"
                />
                <p>
                  1900 - 8888<span>24/7 Support Center</span>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
              <div className="mobile-social-icon">
                <h6>Follow Us</h6>
                <a href="#">
                  <img src="/assets/imgs/theme/icons/icon-facebook-white.svg" />
                </a>
                <a href="#">
                  <img src="/assets/imgs/theme/icons/icon-twitter-white.svg" />
                </a>
                <a href="#">
                  <img src="/assets/imgs/theme/icons/icon-instagram-white.svg" />
                </a>
                <a href="#">
                  <img src="/assets/imgs/theme/icons/icon-pinterest-white.svg" />
                </a>
                <a href="#">
                  <img src="/assets/imgs/theme/icons/icon-youtube-white.svg" />
                </a>
              </div>
              <p className="font-sm">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <Script src="/assets/js/vendor/jquery-3.6.0.min.js"></Script>
      <Script src="/assets/js/vendor/modernizr-3.6.0.min.js"></Script>
      <Script src="/assets/js/vendor/jquery-migrate-3.3.0.min.js"></Script>
      <Script src="/assets/js/vendor/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/js/plugins/slick.js"></Script>
      <Script src="/assets/js/plugins/jquery.syotimer.min.js"></Script>
      <Script src="/assets/js/plugins/waypoints.js"></Script>
      <Script src="/assets/js/plugins/wow.js"></Script>
      <Script src="/assets/js/plugins/perfect-scrollbar.js"></Script>
      <Script src="/assets/js/plugins/magnific-popup.js"></Script>
      <Script src="/assets/js/plugins/select2.min.js"></Script>
      <Script src="/assets/js/plugins/counterup.js"></Script>
      <Script src="/assets/js/plugins/jquery.countdown.min.js"></Script>
      <Script src="/assets/js/plugins/images-loaded.js"></Script>
      <Script src="/assets/js/plugins/isotope.js"></Script>
      <Script src="/assets/js/plugins/scrollup.js"></Script>
      <Script src="/assets/js/plugins/jquery.vticker-min.js"></Script>
      <Script src="/assets/js/plugins/jquery.theia.sticky.js"></Script>
      <Script src="/assets/js/plugins/jquery.elevatezoom.js"></Script>

      <Script src="/assets/js/main.js?v=5.6"></Script>
      <Script src="/assets/js/shop.js?v=5.6"></Script> */}
    </>
  );
};

export default Footer;
