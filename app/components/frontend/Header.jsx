import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      {/* Modal */}
      <div
        className="modal fade custom-modal"
        id="onloadModal"
        tabIndex={-1}
        aria-labelledby="onloadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body">
              <div
                className="deal"
                style={{
                  backgroundImage: 'url("/assets/imgs/banner/popup-1.png")',
                }}
              >
                <div className="deal-top">
                  <h6 className="mb-10 text-brand-2">Deal of the Day</h6>
                </div>
                <div className="deal-content detail-info">
                  <h4 className="product-title">
                    <a href="shop-product-right.html" className="text-heading">
                      Organic fruit for your family&#39;s health
                    </a>
                  </h4>
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color float-left">
                      <span className="current-price text-brand">$38</span>
                      <span>
                        <span className="save-price font-md color3 ml-15">
                          26% Off
                        </span>
                        <span className="old-price font-md ml-15">$52</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="deal-bottom">
                  <p className="mb-20">Hurry Up! Offer End In:</p>
                  <div
                    className="deals-countdown pl-5"
                    data-countdown="2025/03/25 00:00:00"
                  >
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">03</span>
                      <span className="countdown-period"> days </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">02</span>
                      <span className="countdown-period"> hours </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">43</span>
                      <span className="countdown-period"> mins </span>
                    </span>
                    <span className="countdown-section">
                      <span className="countdown-amount hover-up">29</span>
                      <span className="countdown-period"> sec </span>
                    </span>
                  </div>
                  <div className="product-detail-rating">
                    <div className="product-rate-cover text-end">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        />
                      </div>
                      <span className="font-small ml-5 text-muted">
                        {" "}
                        (32 rates)
                      </span>
                    </div>
                  </div>
                  <a href="shop-grid-right.html" className="btn hover-up">
                    Shop Now <i className="fi-rs-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick view */}
      <div
        className="modal fade custom-modal"
        id="quickViewModal"
        tabIndex={-1}
        aria-labelledby="quickViewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery">
                    <span className="zoom-icon">
                      <i className="fi-rs-search" />
                    </span>
                    {/* MAIN SLIDES */}
                    <div className="product-image-slider">
                      <figure className="border-radius-10">
                        <img
                          src="/assets/imgs/shop/product-16-2.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/assets/imgs/shop/product-16-1.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/assets/imgs/shop/product-16-3.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/assets/imgs/shop/product-16-4.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/assets/imgs/shop/product-16-5.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/assets/imgs/shop/product-16-6.jpg"
                          alt="product image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="/assets/imgs/shop/product-16-7.jpg"
                          alt="product image"
                        />
                      </figure>
                    </div>
                    {/* THUMBNAILS */}
                    <div className="slider-nav-thumbnails">
                      <div>
                        <img
                          src="/assets/imgs/shop/thumbnail-3.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/imgs/shop/thumbnail-4.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/imgs/shop/thumbnail-5.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/imgs/shop/thumbnail-6.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/imgs/shop/thumbnail-7.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/imgs/shop/thumbnail-8.jpg"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <img
                          src="/assets/imgs/shop/thumbnail-9.jpg"
                          alt="product image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Gallery */}
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-info pr-30 pl-30">
                    <span className="stock-status out-stock"> Sale Off </span>
                    <h3 className="title-detail">
                      <a
                        href="shop-product-right.html"
                        className="text-heading"
                      >
                        Seeds of Change Organic Quinoa, Brown
                      </a>
                    </h3>
                    <div className="product-detail-rating">
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (32 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="clearfix product-price-cover">
                      <div className="product-price primary-color float-left">
                        <span className="current-price text-brand">$38</span>
                        <span>
                          <span className="save-price font-md color3 ml-15">
                            26% Off
                          </span>
                          <span className="old-price font-md ml-15">$52</span>
                        </span>
                      </div>
                    </div>
                    <div className="detail-extralink mb-30">
                      <div className="detail-qty border radius">
                        <a href="#" className="qty-down">
                          <i className="fi-rs-angle-small-down" />
                        </a>
                        <span className="qty-val">1</span>
                        <a href="#" className="qty-up">
                          <i className="fi-rs-angle-small-up" />
                        </a>
                      </div>
                      <div className="product-extra-link2">
                        <button
                          type="submit"
                          className="button button-add-to-cart"
                        >
                          <i className="fi-rs-shopping-cart" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="font-xs">
                      <ul>
                        <li className="mb-5">
                          Vendor: <span className="text-brand">Nest</span>
                        </li>
                        <li className="mb-5">
                          MFG:<span className="text-brand"> Jun 4.2022</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Detail Info */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area header-style-1 header-height-2">
        <div className="mobile-promotion">
          <span>
            Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
            <strong>3 days</strong> left
          </span>
        </div>
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    <li>
                      <a href="page-about.htlm">About Us</a>
                    </li>
                    <li>
                      <a href="page-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="shop-wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="shop-order.html">Order Tracking</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4">
                <div className="text-center">
                  <div id="news-flash" className="d-inline-block">
                    <ul>
                      <li>
                        100% Secure delivery without contacting the courier
                      </li>
                      <li>Supper Value Deals - Save more with coupons</li>
                      <li>Trendy 25silver jewelry, save up 35% off today</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    <li>
                      Need help? Call Us:{" "}
                      <strong className="text-brand"> + 1800 900</strong>
                    </li>
                    <li>
                      <a className="language-dropdown-active" href="#">
                        English <i className="fi-rs-angle-small-down" />
                      </a>
                      <ul className="language-dropdown">
                        <li>
                          <a href="#">
                            <img src="/assets/imgs/theme/flag-fr.png" />
                            Français
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="/assets/imgs/theme/flag-dt.png" />
                            Deutsch
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="/assets/imgs/theme/flag-ru.png" />
                            Pусский
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="language-dropdown-active" href="#">
                        USD <i className="fi-rs-angle-small-down" />
                      </a>
                      <ul className="language-dropdown">
                        <li>
                          <a href="#">
                            <img src="/assets/imgs/theme/flag-fr.png" />
                            INR
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="/assets/imgs/theme/flag-dt.png" />
                            MBP
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="/assets/imgs/theme/flag-ru.png" />
                            EU
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link href="/">
                  <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <form action="#">
                    <select className="select-active">
                      <option>All Categories</option>
                      <option>Milks and Dairies</option>
                      <option>Wines &amp; Alcohol</option>
                      <option>Clothing &amp; Beauty</option>
                      <option>Pet Foods &amp; Toy</option>
                      <option>Fast food</option>
                      <option>Baking material</option>
                      <option>Vegetables</option>
                      <option>Fresh Seafood</option>
                      <option>Noodles &amp; Rice</option>
                      <option>Ice cream</option>
                    </select>
                    <input type="text" placeholder="Search for items..." />
                  </form>
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="search-location">
                      <form action="#">
                        <select className="select-active">
                          <option>Your Location</option>
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>Arizona</option>
                          <option>Delaware</option>
                          <option>Florida</option>
                          <option>Georgia</option>
                          <option>Hawaii</option>
                          <option>Indiana</option>
                          <option>Maryland</option>
                          <option>Nevada</option>
                          <option>New Jersey</option>
                          <option>New Mexico</option>
                          <option>New York</option>
                        </select>
                      </form>
                    </div>
                    <div className="header-action-icon-2">
                      <a href="shop-compare.html">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="/assets/imgs/theme/icons/icon-compare.svg"
                        />
                        <span className="pro-count blue">3</span>
                      </a>
                      <a href="shop-compare.html">
                        <span className="lable ml-0">Compare</span>
                      </a>
                    </div>
                    <div className="header-action-icon-2">
                      <a href="shop-wishlist.html">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="/assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count blue">6</span>
                      </a>
                      <a href="shop-wishlist.html">
                        <span className="lable">Wishlist</span>
                      </a>
                    </div>
                    <div className="header-action-icon-2">
                      <a className="mini-cart-icon" href="shop-cart.html">
                        <img
                          alt="Nest"
                          src="/assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count blue">2</span>
                      </a>
                      <a href="shop-cart.html">
                        <span className="lable">Cart</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <a href="shop-product-right.html">
                                <img
                                  alt="Nest"
                                  src="/assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </a>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <a href="shop-product-right.html">
                                  Daisy Casual Bag
                                </a>
                              </h4>
                              <h4>
                                <span>1 × </span>$800.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small" />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="shopping-cart-img">
                              <a href="shop-product-right.html">
                                <img
                                  alt="Nest"
                                  src="/assets/imgs/shop/thumbnail-2.jpg"
                                />
                              </a>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <a href="shop-product-right.html">
                                  Corduroy Shirts
                                </a>
                              </h4>
                              <h4>
                                <span>1 × </span>$3200.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="#">
                                <i className="fi-rs-cross-small" />
                              </a>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              Total <span>$4000.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <a href="shop-cart.html" className="outline">
                              View cart
                            </a>
                            <a href="shop-checkout.html">Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header-action-icon-2">
                      <a href="page-account.html">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="/assets/imgs/theme/icons/icon-user.svg"
                        />
                      </a>
                      <a href="page-account.html">
                        <span className="lable ml-0">Account</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-user mr-10" />
                              My Account
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-location-alt mr-10" />
                              Order Tracking
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-label mr-10" />
                              My Voucher
                            </a>
                          </li>
                          <li>
                            <a href="shop-wishlist.html">
                              <i className="fi fi-rs-heart mr-10" />
                              My Wishlist
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-settings-sliders mr-10" />
                              Setting
                            </a>
                          </li>
                          <li>
                            <a href="page-login.html">
                              <i className="fi fi-rs-sign-out mr-10" />
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <a href="index.html">
                  <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                </a>
              </div>
              <div className="header-nav d-none d-lg-flex">
                {/* <div className="main-categori-wrap d-none d-lg-block">
                  <a className="categories-button-active" href="#">
                    <span className="fi-rs-apps" />{" "}
                    <span className="et">Browse</span> All Categories
                    <i className="fi-rs-angle-down" />
                  </a>
                  <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-1.svg" />
                            Milks and Dairies
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-2.svg" />
                            Clothing &amp; beauty
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-3.svg" />
                            Pet Foods &amp; Toy
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-4.svg" />
                            Baking material
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-5.svg" />
                            Fresh Fruit
                          </a>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-6.svg" />
                            Wines &amp; Drinks
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-7.svg" />
                            Fresh Seafood
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-8.svg" />
                            Fast food
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-9.svg" />
                            Vegetables
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-10.svg" />
                            Bread and Juice
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="more_slide_open"
                      style={{ display: "none" }}
                    >
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img src="/assets/imgs/theme/icons/icon-1.svg" />
                              Milks and Dairies
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img src="/assets/imgs/theme/icons/icon-2.svg" />
                              Clothing &amp; beauty
                            </a>
                          </li>
                        </ul>
                        <ul className="end">
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img src="/assets/imgs/theme/icons/icon-3.svg" />
                              Wines &amp; Drinks
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img src="/assets/imgs/theme/icons/icon-4.svg" />
                              Fresh Seafood
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="more_categories">
                      <span className="icon" />{" "}
                      <span className="heading-sm-1">Show more...</span>
                    </div>
                  </div>
                </div> */}
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                  <nav>
                    <ul>
                      <li className="hot-deals">
                        <img
                          src="/assets/imgs/theme/icons/icon-hot.svg"
                          alt="hot deals"
                        />
                        <a href="shop-grid-right.html">Deals</a>
                      </li>
                      <li>
                        <a className="active" href="index.html">
                          Home <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home 5</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home 6</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="page-about.html">About</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          Shop <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="shop-grid-right.html">
                              Shop Grid – Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-left.html">
                              Shop Grid – Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right.html">
                              Shop List – Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left.html">
                              Shop List – Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth.html">Shop - Wide</a>
                          </li>
                          <li>
                            <a href="#">
                              Single Product <i className="fi-rs-angle-right" />
                            </a>
                            <ul className="level-menu">
                              <li>
                                <a href="shop-product-right.html">
                                  Product – Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-left.html">
                                  Product – Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-full.html">
                                  Product – No sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-vendor.html">
                                  Product – Vendor Info
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop-filter.html">Shop – Filter</a>
                          </li>
                          <li>
                            <a href="shop-wishlist.html">Shop – Wishlist</a>
                          </li>
                          <li>
                            <a href="shop-cart.html">Shop – Cart</a>
                          </li>
                          <li>
                            <a href="shop-checkout.html">Shop – Checkout</a>
                          </li>
                          <li>
                            <a href="shop-compare.html">Shop – Compare</a>
                          </li>
                          <li>
                            <a href="#">
                              Shop Invoice
                              <i className="fi-rs-angle-right" />
                            </a>
                            <ul className="level-menu">
                              <li>
                                <a href="shop-invoice-1.html">Shop Invoice 1</a>
                              </li>
                              <li>
                                <a href="shop-invoice-2.html">Shop Invoice 2</a>
                              </li>
                              <li>
                                <a href="shop-invoice-3.html">Shop Invoice 3</a>
                              </li>
                              <li>
                                <a href="shop-invoice-4.html">Shop Invoice 4</a>
                              </li>
                              <li>
                                <a href="shop-invoice-5.html">Shop Invoice 5</a>
                              </li>
                              <li>
                                <a href="shop-invoice-6.html">Shop Invoice 6</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Vendors <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="vendors-grid.html">Vendors Grid</a>
                          </li>
                          <li>
                            <a href="vendors-list.html">Vendors List</a>
                          </li>
                          <li>
                            <a href="vendor-details-1.html">
                              Vendor Details 01
                            </a>
                          </li>
                          <li>
                            <a href="vendor-details-2.html">
                              Vendor Details 02
                            </a>
                          </li>
                          <li>
                            <a href="vendor-dashboard.html">Vendor Dashboard</a>
                          </li>
                          <li>
                            <a href="vendor-guide.html">Vendor Guide</a>
                          </li>
                        </ul>
                      </li>
                      <li className="position-static">
                        <a href="#">
                          Mega menu <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="mega-menu">
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title" href="#">
                              Fruit &amp; Vegetables
                            </a>
                            <ul>
                              <li>
                                <a href="shop-product-right.html">
                                  Meat &amp; Poultry
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Fresh Vegetables
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Herbs &amp; Seasonings
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Cuts &amp; Sprouts
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Exotic Fruits &amp; Veggies
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Packaged Produce
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title" href="#">
                              Breakfast &amp; Dairy
                            </a>
                            <ul>
                              <li>
                                <a href="shop-product-right.html">
                                  Milk &amp; Flavoured Milk
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Butter and Margarine
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Eggs Substitutes
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Marmalades</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Sour Cream</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Cheese</a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-22">
                            <a className="menu-title" href="#">
                              Meat &amp; Seafood
                            </a>
                            <ul>
                              <li>
                                <a href="shop-product-right.html">
                                  Breakfast Sausage
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Dinner Sausage
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">Chicken</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Sliced Deli Meat
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Wild Caught Fillets
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Crab and Shellfish
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="sub-mega-menu sub-mega-menu-width-34">
                            <div className="menu-banner-wrap">
                              <a href="shop-product-right.html">
                                <img
                                  src="/assets/imgs/banner/banner-menu.png"
                                  alt="Nest"
                                />
                              </a>
                              <div className="menu-banner-content">
                                <h4>Hot deals</h4>
                                <h3>
                                  Don&#39;t miss
                                  <br />
                                  Trending
                                </h3>
                                <div className="menu-banner-price">
                                  <span className="new-price text-success">
                                    Save to 50%
                                  </span>
                                </div>
                                <div className="menu-banner-btn">
                                  <a href="shop-product-right.html">Shop now</a>
                                </div>
                              </div>
                              <div className="menu-banner-discount">
                                <h3>
                                  <span>25%</span>
                                  off
                                </h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-category-grid.html">
                          Blog <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-category-grid.html">
                              Blog Category Grid
                            </a>
                          </li>
                          <li>
                            <a href="blog-category-list.html">
                              Blog Category List
                            </a>
                          </li>
                          <li>
                            <a href="blog-category-big.html">
                              Blog Category Big
                            </a>
                          </li>
                          <li>
                            <a href="blog-category-fullwidth.html">
                              Blog Category Wide
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Single Post <i className="fi-rs-angle-right" />
                            </a>
                            <ul className="level-menu level-menu-modify">
                              <li>
                                <a href="blog-post-left.html">Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-post-right.html">Right Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-post-fullwidth.html">
                                  No Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Pages <i className="fi-rs-angle-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="page-about.html">About Us</a>
                          </li>
                          <li>
                            <a href="page-contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="page-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="page-login.html">Login</a>
                          </li>
                          <li>
                            <a href="page-register.html">Register</a>
                          </li>
                          <li>
                            <a href="page-forgot-password.html">
                              Forgot password
                            </a>
                          </li>
                          <li>
                            <a href="page-reset-password.html">
                              Reset password
                            </a>
                          </li>
                          <li>
                            <a href="page-purchase-guide.html">
                              Purchase Guide
                            </a>
                          </li>
                          <li>
                            <a href="page-privacy-policy.html">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="page-terms.html">Terms of Service</a>
                          </li>
                          <li>
                            <a href="page-404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img
                  src="/assets/imgs/theme/icons/icon-headphone.svg"
                  alt="hotline"
                />
                <p>
                  1900 - 888<span>24/7 Support Center</span>
                </p>
              </div>
              <div className="header-action-icon-2 d-block d-lg-none">
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img
                        alt="Nest"
                        src="/assets/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count white">4</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="#">
                      <img
                        alt="Nest"
                        src="/assets/imgs/theme/icons/icon-cart.svg"
                      />
                      <span className="pro-count white">2</span>
                    </a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Nest"
                                src="/assets/imgs/shop/thumbnail-3.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Plain Striola Shirts
                              </a>
                            </h4>
                            <h3>
                              <span>1 × </span>$800.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Nest"
                                src="/assets/imgs/shop/thumbnail-4.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Macbook Pro 2022
                              </a>
                            </h4>
                            <h3>
                              <span>1 × </span>$3500.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small" />
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total <span>$383.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <a href="shop-cart.html">View cart</a>
                          <a href="shop-checkout.html">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="mobile-header-logo">
              <a href="index.html">
                <img src="/assets/imgs/theme/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
              <button className="close-style search-close">
                <i className="icon-top" />
                <i className="icon-bottom" />
              </button>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="mobile-search search-style-3 mobile-header-border">
              <form action="#">
                <input type="text" placeholder="Search for items…" />
                <button type="submit">
                  <i className="fi-rs-search" />
                </button>
              </form>
            </div>
            <div className="mobile-menu-wrap mobile-header-border">
              {/* mobile menu start */}
              <nav>
                <ul className="mobile-menu font-heading">
                  <li className="menu-item-has-children">
                    <a href="index.html">Home</a>
                    <ul className="dropdown">
                      <li>
                        <a href="index.html">Home 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home 4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home 5</a>
                      </li>
                      <li>
                        <a href="index-6.html">Home 6</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="shop-grid-right.html">shop</a>
                    <ul className="dropdown">
                      <li>
                        <a href="shop-grid-right.html">
                          Shop Grid – Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-left.html">
                          Shop Grid – Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-right.html">
                          Shop List – Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-list-left.html">
                          Shop List – Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="shop-fullwidth.html">Shop - Wide</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Single Product</a>
                        <ul className="dropdown">
                          <li>
                            <a href="shop-product-right.html">
                              Product – Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-left.html">
                              Product – Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-full.html">
                              Product – No sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-vendor.html">
                              Product – Vendor Infor
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop-filter.html">Shop – Filter</a>
                      </li>
                      <li>
                        <a href="shop-wishlist.html">Shop – Wishlist</a>
                      </li>
                      <li>
                        <a href="shop-cart.html">Shop – Cart</a>
                      </li>
                      <li>
                        <a href="shop-checkout.html">Shop – Checkout</a>
                      </li>
                      <li>
                        <a href="shop-compare.html">Shop – Compare</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Shop Invoice</a>
                        <ul className="dropdown">
                          <li>
                            <a href="shop-invoice-1.html">Shop Invoice 1</a>
                          </li>
                          <li>
                            <a href="shop-invoice-2.html">Shop Invoice 2</a>
                          </li>
                          <li>
                            <a href="shop-invoice-3.html">Shop Invoice 3</a>
                          </li>
                          <li>
                            <a href="shop-invoice-4.html">Shop Invoice 4</a>
                          </li>
                          <li>
                            <a href="shop-invoice-5.html">Shop Invoice 5</a>
                          </li>
                          <li>
                            <a href="shop-invoice-6.html">Shop Invoice 6</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Vendors</a>
                    <ul className="dropdown">
                      <li>
                        <a href="vendors-grid.html">Vendors Grid</a>
                      </li>
                      <li>
                        <a href="vendors-list.html">Vendors List</a>
                      </li>
                      <li>
                        <a href="vendor-details-1.html">Vendor Details 01</a>
                      </li>
                      <li>
                        <a href="vendor-details-2.html">Vendor Details 02</a>
                      </li>
                      <li>
                        <a href="vendor-dashboard.html">Vendor Dashboard</a>
                      </li>
                      <li>
                        <a href="vendor-guide.html">Vendor Guide</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Mega menu</a>
                    <ul className="dropdown">
                      <li className="menu-item-has-children">
                        <a href="#">Women&#39;s Fashion</a>
                        <ul className="dropdown">
                          <li>
                            <a href="shop-product-right.html">Dresses</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Blouses &amp; Shirts
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Hoodies &amp; Sweatshirts
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Women&#39;s Sets
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Men&#39;s Fashion</a>
                        <ul className="dropdown">
                          <li>
                            <a href="shop-product-right.html">Jackets</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Casual Faux Leather
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Genuine Leather
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Technology</a>
                        <ul className="dropdown">
                          <li>
                            <a href="shop-product-right.html">Gaming Laptops</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Ultraslim Laptops
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Tablets</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Laptop Accessories
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Tablet Accessories
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="blog-category-fullwidth.html">Blog</a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog-category-grid.html">Blog Category Grid</a>
                      </li>
                      <li>
                        <a href="blog-category-list.html">Blog Category List</a>
                      </li>
                      <li>
                        <a href="blog-category-big.html">Blog Category Big</a>
                      </li>
                      <li>
                        <a href="blog-category-fullwidth.html">
                          Blog Category Wide
                        </a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Single Product Layout</a>
                        <ul className="dropdown">
                          <li>
                            <a href="blog-post-left.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-post-right.html">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-post-fullwidth.html">No Sidebar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="page-about.html">About Us</a>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="page-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="page-login.html">Login</a>
                      </li>
                      <li>
                        <a href="page-register.html">Register</a>
                      </li>
                      <li>
                        <a href="page-forgot-password.html">Forgot password</a>
                      </li>
                      <li>
                        <a href="page-reset-password.html">Reset password</a>
                      </li>
                      <li>
                        <a href="page-purchase-guide.html">Purchase Guide</a>
                      </li>
                      <li>
                        <a href="page-privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="page-terms.html">Terms of Service</a>
                      </li>
                      <li>
                        <a href="page-404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Language</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">French</a>
                      </li>
                      <li>
                        <a href="#">German</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* mobile menu end */}
            </div>
            <div className="mobile-header-info-wrap">
              <div className="single-mobile-header-info">
                <a href="page-contact.html">
                  <i className="fi-rs-marker" /> Our location{" "}
                </a>
              </div>
              <div className="single-mobile-header-info">
                <a href="page-login.html">
                  <i className="fi-rs-user" />
                  Log In / Sign Up{" "}
                </a>
              </div>
              <div className="single-mobile-header-info">
                <a href="#">
                  <i className="fi-rs-headphones" />
                  (+01) - 2345 - 6789{" "}
                </a>
              </div>
            </div>
            <div className="mobile-social-icon mb-50">
              <h6 className="mb-15">Follow Us</h6>
              <a href="#">
                <img src="/assets/imgs/theme/icons/icon-facebook-white.svg" />
              </a>
              <a href="#">
                <img src="/assets/imgs/theme/icons/icon-twitter-white.svg" />
              </a>
              <a href="#">
                <img src="/assets/imgs/theme/icons/icon-instagram-white.svg" />
              </a>
              <a h="#">
                <img src="/assets/imgs/theme/icons/icon-pinterest-white.svg" />
              </a>
              <a href="#">
                <img src="/assets/imgs/theme/icons/icon-youtube-white.svg" />
              </a>
            </div>
            <div className="site-copyright">
              Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.
            </div>
          </div>
        </div>
      </div>
      {/*End header*/}
    </React.Fragment>
  );
};

export default Header;
