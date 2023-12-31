import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      {/* Home Section Start */}
      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xl-8 ratio_65">
              <div className="home-contain h-100">
                <div className="h-100">
                  <img
                    src="/assets/images/vegetable/banner/1.jpg"
                    className="bg-img blur-up lazyload"
                    alt="Image"
                  />
                </div>
                <div className="home-detail p-center-left w-75">
                  <div>
                    <h6>
                      Exclusive offer <span>30% Off</span>
                    </h6>
                    <h1 className="text-uppercase">
                      Stay home &amp; delivered your{" "}
                      <span className="daily">Daily Needs</span>
                    </h1>
                    <p className="w-75 d-none d-sm-block">
                      Vegetables contain many vitamins and minerals that are
                      good for your health.
                    </p>
                    <Link href="san-pham/san-pham-chi-tiet">
                      <button className="btn btn-animation mt-xxl-4 mt-2 home-button mend-auto">
                        Shop Now <i className="fa-solid fa-right-long icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 ratio_65">
              <div className="row g-4">
                <div className="col-xl-12 col-md-6">
                  <div className="home-contain">
                    <img
                      src="/assets/images/vegetable/banner/2.jpg"
                      className="bg-img blur-up lazyload"
                      alt="Image"
                    />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      <div>
                        <h2 className="mt-0 text-danger">
                          45% <span className="discount text-title">OFF</span>
                        </h2>
                        <h3 className="theme-color">Nut Collection</h3>
                        <p className="w-75">
                          We deliver organic vegetables &amp; fruits
                        </p>
                        <a
                          href="shop-left-sidebar.html"
                          className="shop-button"
                        >
                          Shop Now <i className="fa-solid fa-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="home-contain">
                    <img
                      src="/assets/images/vegetable/banner/3.jpg"
                      className="bg-img blur-up lazyload"
                      alt="Image"
                    />
                    <div className="home-detail p-center-left home-p-sm w-75">
                      <div>
                        <h3 className="mt-0 theme-color fw-bold">
                          Healthy Food
                        </h3>
                        <h4 className="text-danger">Organic Market</h4>
                        <p className="organic">
                          Start your daily shopping with some Organic food
                        </p>
                        <a
                          href="shop-left-sidebar.html"
                          className="shop-button"
                        >
                          Shop Now <i className="fa-solid fa-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home Section End */}
      {/* Banner Section Start */}
      <section className="banner-section ratio_60 wow fadeInUp">
        <div className="container-fluid-lg">
          <div className="banner-slider">
            <div>
              <div className="banner-contain hover-effect">
                <img
                  src="/assets/images/vegetable/banner/4.jpg"
                  className="bg-img blur-up lazyload"
                  alt="Image"
                />
                <div className="banner-details">
                  <div className="banner-box">
                    <h6 className="text-danger">5% OFF</h6>
                    <h5>Hot Deals on New Items</h5>
                    <h6 className="text-content">
                      Daily Essentials Eggs &amp; Dairy
                    </h6>
                  </div>
                  <Link
                    href="/san-pham/san-pham-chi-tiet"
                    className="banner-button text-white"
                  >
                    Shop Now <i className="fa-solid fa-right-long ms-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="banner-contain hover-effect">
                <img
                  src="/assets/images/vegetable/banner/5.jpg"
                  className="bg-img blur-up lazyload"
                  alt="Image"
                />
                <div className="banner-details">
                  <div className="banner-box">
                    <h6 className="text-danger">5% OFF</h6>
                    <h5>Buy More &amp; Save More</h5>
                    <h6 className="text-content">Fresh Vegetables</h6>
                  </div>
                  <a
                    href="shop-left-sidebar.html"
                    className="banner-button text-white"
                  >
                    Shop Now <i className="fa-solid fa-right-long ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="banner-contain hover-effect">
                <img
                  src="/assets/images/vegetable/banner/6.jpg"
                  className="bg-img blur-up lazyload"
                  alt="Image"
                />
                <div className="banner-details">
                  <div className="banner-box">
                    <h6 className="text-danger">5% OFF</h6>
                    <h5>Organic Meat Prepared</h5>
                    <h6 className="text-content">Delivered to Your Home</h6>
                  </div>
                  <a
                    href="shop-left-sidebar.html"
                    className="banner-button text-white"
                  >
                    Shop Now <i className="fa-solid fa-right-long ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="banner-contain hover-effect">
                <img
                  src="/assets/images/vegetable/banner/7.jpg"
                  className="bg-img blur-up lazyload"
                  alt="Image"
                />
                <div className="banner-details">
                  <div className="banner-box">
                    <h6 className="text-danger">5% OFF</h6>
                    <h5>Buy More &amp; Save More</h5>
                    <h6 className="text-content">Nuts &amp; Snacks</h6>
                  </div>
                  <a
                    href="shop-left-sidebar.html"
                    className="banner-button text-white"
                  >
                    Shop Now <i className="fa-solid fa-right-long ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Product Section Start */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
              <div className="p-sticky">
                <div className="category-menu">
                  <h3>Category</h3>
                  <ul>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/vegetable.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">
                            Vegetables &amp; Fruit
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/cup.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">Beverages</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/meats.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">
                            Meats &amp; Seafood
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/breakfast.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">
                            Breakfast &amp; Dairy
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/frozen.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">Frozen Foods</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/biscuit.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">
                            Biscuits &amp; Snacks
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/grocery.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">
                            Grocery &amp; Staples
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/drink.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">
                            Wines &amp; Alcohol Drinks
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/milk.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">
                            Milk &amp; Dairies
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li className="pb-30">
                      <div className="category-list">
                        <img
                          src="/assets/svg/1/pet.svg"
                          className="blur-up lazyload"
                          alt="Image"
                        />
                        <h5>
                          <a href="shop-left-sidebar.html">Pet Foods</a>
                        </h5>
                      </div>
                    </li>
                  </ul>
                  <ul className="value-list">
                    <li>
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <a href="shop-left-sidebar.html">Value of the Day</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <a href="shop-left-sidebar.html">Top 50 Offers</a>
                        </h5>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="category-list">
                        <h5 className="ms-0 text-title">
                          <a href="shop-left-sidebar.html">New Arrivals</a>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ratio_156 section-t-space">
                  <div className="home-contain hover-effect">
                    <img
                      src="/assets/images/vegetable/banner/8.jpg"
                      className="bg-img blur-up lazyload"
                      alt="Image"
                    />
                    <div className="home-detail p-top-left home-p-medium">
                      <div>
                        <h6 className="text-yellow home-banner">Seafood</h6>
                        <h3 className="text-uppercase fw-normal">
                          <span className="theme-color fw-bold">Freshes</span>{" "}
                          Products
                        </h3>
                        <h3 className="fw-light">every hour</h3>
                        <button className="btn btn-animation btn-md mend-auto">
                          Shop Now{" "}
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ratio_medium section-t-space">
                  <div className="home-contain hover-effect">
                    <img
                      src="/assets/images/vegetable/banner/11.jpg"
                      className="img-fluid blur-up lazyload"
                      alt="Image"
                    />
                    <div className="home-detail p-top-left home-p-medium">
                      <div>
                        <h4 className="text-yellow text-exo home-banner">
                          Organic
                        </h4>
                        <h2 className="text-uppercase fw-normal mb-0 text-russo theme-color">
                          fresh
                        </h2>
                        <h2 className="text-uppercase fw-normal text-title">
                          Vegetables
                        </h2>
                        <p className="mb-3">Super Offer to 50% Off</p>
                        <button className="btn btn-animation btn-md mend-auto">
                          Shop Now{" "}
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-t-space">
                  <div className="category-menu">
                    <h3>Trending Products</h3>
                    <ul className="product-list border-0 p-0 d-block">
                      <li>
                        <div className="offer-product">
                          <a
                            href="product-left-thumbnail.html"
                            className="offer-image"
                          >
                            <img
                              src="/assets/images/vegetable/product/23.png"
                              className="blur-up lazyload"
                              alt="Image"
                            />
                          </a>
                          <div className="offer-detail">
                            <div>
                              <a
                                href="product-left-thumbnail.html"
                                className="text-title"
                              >
                                <h6 className="name">
                                  Meatigo Premium Goat Curry
                                </h6>
                              </a>
                              <span>450 G</span>
                              <h6 className="price theme-color">$ 70.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="offer-product">
                          <a
                            href="product-left-thumbnail.html"
                            className="offer-image"
                          >
                            <img
                              src="/assets/images/vegetable/product/24.png"
                              className="blur-up lazyload"
                              alt="Image"
                            />
                          </a>
                          <div className="offer-detail">
                            <div>
                              <a
                                href="product-left-thumbnail.html"
                                className="text-title"
                              >
                                <h6 className="name">
                                  Dates Medjoul Premium Imported
                                </h6>
                              </a>
                              <span>450 G</span>
                              <h6 className="price theme-color">$ 40.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="offer-product">
                          <a
                            href="product-left-thumbnail.html"
                            className="offer-image"
                          >
                            <img
                              src="/assets/images/vegetable/product/25.png"
                              className="blur-up lazyload"
                              alt="Image"
                            />
                          </a>
                          <div className="offer-detail">
                            <div>
                              <a
                                href="product-left-thumbnail.html"
                                className="text-title"
                              >
                                <h6 className="name">
                                  Good Life Walnut Kernels
                                </h6>
                              </a>
                              <span>200 G</span>
                              <h6 className="price theme-color">$ 52.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="offer-product">
                          <a
                            href="product-left-thumbnail.html"
                            className="offer-image"
                          >
                            <img
                              src="/assets/images/vegetable/product/26.png"
                              className="blur-up lazyload"
                              alt="Image"
                            />
                          </a>
                          <div className="offer-detail">
                            <div>
                              <a
                                href="product-left-thumbnail.html"
                                className="text-title"
                              >
                                <h6 className="name">
                                  Apple Red Premium Imported
                                </h6>
                              </a>
                              <span>1 KG</span>
                              <h6 className="price theme-color">$ 80.00</h6>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-t-space">
                  <div className="category-menu">
                    <h3>Customer Comment</h3>
                    <div className="review-box">
                      <div className="review-contain">
                        <h5 className="w-75">
                          We Care About Our Customer Experience
                        </h5>
                        <p>
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content.
                        </p>
                      </div>
                      <div className="review-profile">
                        <div className="review-image">
                          <img
                            src="/assets/images/vegetable/review/1.jpg"
                            className="img-fluid blur-up lazyload"
                            alt="Image"
                          />
                        </div>
                        <div className="review-detail">
                          <h5>Tina Mcdonnale</h5>
                          <h6>Sale Manager</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8">
              <div className="title title-flex">
                <div>
                  <h2>Top Save Today</h2>
                  <span className="title-leaf">
                    <svg className="icon-width">
                      <use xlinkHref="/assets/svg/leaf.svg#leaf" />
                    </svg>
                  </span>
                  <p>
                    Don&#39;t miss this opportunity at a special discount just
                    for this week.
                  </p>
                </div>
                <div className="timing-box">
                  <div className="timing">
                    <i data-feather="clock" />
                    <h6 className="name">Expires in :</h6>
                    <div
                      className="time"
                      id="clockdiv-1"
                      data-hours={1}
                      data-minutes={2}
                      data-seconds={3}
                    >
                      <ul>
                        <li>
                          <div className="counter">
                            <div className="days">
                              <h6 />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="hours">
                              <h6 />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="minutes">
                              <h6 />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="counter">
                            <div className="seconds">
                              <h6 />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-b-space">
                <div className="product-border border-row overflow-hidden">
                  <div className="product-box-slider no-arrow">
                    <div>
                      <div className="row m-0">
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/1.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Fantasy Crunchy Choco Chip Cookies
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/2.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Cold Brew Coffee Instant Coffee 50 g
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row m-0">
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/3.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Peanut Butter Bite Premium Butter Cookies 600
                                  g
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="label-tag">
                              <span>NEW</span>
                            </div>
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/4.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  SnackAmor Combo Pack of Jowar Stick and Jowar
                                  Chips
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row m-0">
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/5.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Yumitos Chilli Sprinkled Potato Chips 100 g
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/6.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Neu Farm Unpolished Desi Toor Dal 1 kg
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row m-0">
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="label-tag">
                              <span>NEW</span>
                            </div>
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/7.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  healthy Long Life Toned Milk 1 L
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/8.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Dog Treats Natural Yak Milk Bars For Small
                                  Dogs 100g
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row m-0">
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/9.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Raw Mutton Leg, Packaging 5 Kg
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/10.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Blended Instant Coffee 50 g Buy 1 Get 1 Free
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="row m-0">
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/3.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Peanut Butter Bite Premium Butter Cookies 600
                                  g
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 px-0">
                          <div className="product-box">
                            <div className="product-image">
                              <a href="product-left-thumbnail.html">
                                <img
                                  src="/assets/images/vegetable/product/5.png"
                                  className="img-fluid blur-up lazyload"
                                  alt="Image"
                                />
                              </a>
                              <ul className="product-option">
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view"
                                  >
                                    <i data-feather="eye" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Compare"
                                >
                                  <a href="compare.html">
                                    <i data-feather="refresh-cw" />
                                  </a>
                                </li>
                                <li
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Wishlist"
                                >
                                  <a
                                    href="wishlist.html"
                                    className="notifi-wishlist"
                                  >
                                    <i data-feather="heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product-detail">
                              <a href="product-left-thumbnail.html">
                                <h6 className="name">
                                  Yumitos Chilli Sprinkled Potato Chips 100 g
                                </h6>
                              </a>
                              <h5 className="sold text-content">
                                <span className="theme-color price">
                                  $26.69
                                </span>
                                <del>28.56</del>
                              </h5>
                              <div className="product-rating mt-sm-2 mt-1">
                                <ul className="rating">
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" className="fill" />
                                  </li>
                                  <li>
                                    <i data-feather="star" />
                                  </li>
                                </ul>
                                <h6 className="theme-color">In Stock</h6>
                              </div>
                              <div className="add-to-cart-box">
                                <button className="btn btn-add-cart addcart-button">
                                  Add
                                  <span className="add-icon">
                                    <i className="fa-solid fa-plus" />
                                  </span>
                                </button>
                                <div className="cart_qty qty-box">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="qty-left-minus"
                                      data-type="minus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-minus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <input
                                      className="form-control input-number qty-input"
                                      type="text"
                                      name="quantity"
                                      defaultValue={0}
                                    />
                                    <button
                                      type="button"
                                      className="qty-right-plus"
                                      data-type="plus"
                                      data-field
                                    >
                                      <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title">
                <h2>Bowse by Categories</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                <p>Top Categories Of The Week</p>
              </div>
              <div className="category-slider-2 product-wrapper no-arrow">
                <div>
                  <a
                    href="shop-left-sidebar.html"
                    className="category-box category-dark"
                  >
                    <div>
                      <img
                        src="/assets/svg/1/vegetable.svg"
                        className="blur-up lazyload"
                        alt="Image"
                      />
                      <h5>Vegetables &amp; Fruit</h5>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="shop-left-sidebar.html"
                    className="category-box category-dark"
                  >
                    <div>
                      <img
                        src="/assets/svg/1/cup.svg"
                        className="blur-up lazyload"
                        alt="Image"
                      />
                      <h5>Beverages</h5>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="shop-left-sidebar.html"
                    className="category-box category-dark"
                  >
                    <div>
                      <img
                        src="/assets/svg/1/meats.svg"
                        className="blur-up lazyload"
                        alt="Image"
                      />
                      <h5>Meats &amp; Seafood</h5>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="shop-left-sidebar.html"
                    className="category-box category-dark"
                  >
                    <div>
                      <img
                        src="/assets/svg/1/breakfast.svg"
                        className="blur-up lazyload"
                        alt="Image"
                      />
                      <h5>Breakfast</h5>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="shop-left-sidebar.html"
                    className="category-box category-dark"
                  >
                    <div>
                      <img
                        src="/assets/svg/1/frozen.svg"
                        className="blur-up lazyload"
                        alt="Image"
                      />
                      <h5>Frozen Foods</h5>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="shop-left-sidebar.html"
                    className="category-box category-dark"
                  >
                    <div>
                      <img
                        src="/assets/svg/1/milk.svg"
                        className="blur-up lazyload"
                        alt="Image"
                      />
                      <h5>Milk &amp; Dairies</h5>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="shop-left-sidebar.html"
                    className="category-box category-dark"
                  >
                    <div>
                      <img
                        src="/assets/svg/1/pet.svg"
                        className="blur-up lazyload"
                        alt="Image"
                      />
                      <h5>Pet Food</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div className="section-t-space section-b-space">
                <div className="row g-md-4 g-3">
                  <div className="col-md-6">
                    <div className="banner-contain hover-effect">
                      <img
                        src="/assets/images/vegetable/banner/9.jpg"
                        className="bg-img blur-up lazyload"
                        alt="Image"
                      />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-exo">50% offer</h3>
                          <h4 className="text-russo fw-normal theme-color mb-2">
                            Testy Mushrooms
                          </h4>
                          <button className="btn btn-animation btn-sm mend-auto">
                            Shop Now{" "}
                            <i className="fa-solid fa-arrow-right icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner-contain hover-effect">
                      <img
                        src="/assets/images/vegetable/banner/10.jpg"
                        className="bg-img blur-up lazyload"
                        alt="Image"
                      />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h3 className="text-exo">50% offer</h3>
                          <h4 className="text-russo fw-normal theme-color mb-2">
                            Fresh MEAT
                          </h4>
                          <button className="btn btn-animation btn-sm mend-auto">
                            Shop Now{" "}
                            <i className="fa-solid fa-arrow-right icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title d-block">
                <h2>Food Cupboard</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>
              <div className="product-border overflow-hidden wow fadeInUp">
                <div className="product-box-slider no-arrow">
                  <div>
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div className="product-box">
                          <div className="product-image">
                            <a href="product-left-thumbnail.html">
                              <img
                                src="/assets/images/vegetable/product/1.png"
                                className="img-fluid blur-up lazyload"
                                alt="Image"
                              />
                            </a>
                            <ul className="product-option">
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View"
                              >
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view"
                                >
                                  <i data-feather="eye" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Compare"
                              >
                                <a href="compare.html">
                                  <i data-feather="refresh-cw" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Wishlist"
                              >
                                <a
                                  href="wishlist.html"
                                  className="notifi-wishlist"
                                >
                                  <i data-feather="heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detail">
                            <a href="product-left-thumbnail.html">
                              <h6 className="name h-100">Chocalate Powder</h6>
                            </a>
                            <h5 className="sold text-content">
                              <span className="theme-color price">$26.69</span>
                              <del>28.56</del>
                            </h5>
                            <div className="product-rating mt-sm-2 mt-1">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <h6 className="theme-color">In Stock</h6>
                            </div>
                            <div className="add-to-cart-box">
                              <button className="btn btn-add-cart addcart-button">
                                Add
                                <span className="add-icon">
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </button>
                              <div className="cart_qty qty-box">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="qty-left-minus"
                                    data-type="minus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    defaultValue={0}
                                  />
                                  <button
                                    type="button"
                                    className="qty-right-plus"
                                    data-type="plus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div className="product-box">
                          <div className="product-image">
                            <a href="product-left-thumbnail.html">
                              <img
                                src="/assets/images/vegetable/product/2.png"
                                className="img-fluid blur-up lazyload"
                                alt="Image"
                              />
                            </a>
                            <ul className="product-option">
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View"
                              >
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view"
                                >
                                  <i data-feather="eye" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Compare"
                              >
                                <a href="compare.html">
                                  <i data-feather="refresh-cw" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Wishlist"
                              >
                                <a
                                  href="wishlist.html"
                                  className="notifi-wishlist"
                                >
                                  <i data-feather="heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detail">
                            <a href="product-left-thumbnail.html">
                              <h6 className="name h-100">Sandwich Cookies</h6>
                            </a>
                            <h5 className="sold text-content">
                              <span className="theme-color price">$26.69</span>
                              <del>28.56</del>
                            </h5>
                            <div className="product-rating mt-sm-2 mt-1">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <h6 className="theme-color">In Stock</h6>
                            </div>
                            <div className="add-to-cart-box">
                              <button className="btn btn-add-cart addcart-button">
                                Add
                                <span className="add-icon">
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </button>
                              <div className="cart_qty qty-box">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="qty-left-minus"
                                    data-type="minus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    defaultValue={0}
                                  />
                                  <button
                                    type="button"
                                    className="qty-right-plus"
                                    data-type="plus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div className="product-box">
                          <div className="product-image">
                            <a href="product-left-thumbnail.html">
                              <img
                                src="/assets/images/vegetable/product/3.png"
                                className="img-fluid blur-up lazyload"
                                alt="Image"
                              />
                            </a>
                            <ul className="product-option">
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View"
                              >
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view"
                                >
                                  <i data-feather="eye" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Compare"
                              >
                                <a href="compare.html">
                                  <i data-feather="refresh-cw" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Wishlist"
                              >
                                <a
                                  href="wishlist.html"
                                  className="notifi-wishlist"
                                >
                                  <i data-feather="heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detail">
                            <a href="product-left-thumbnail.html">
                              <h6 className="name h-100">Butter Croissant</h6>
                            </a>
                            <h5 className="sold text-content">
                              <span className="theme-color price">$26.69</span>
                              <del>28.56</del>
                            </h5>
                            <div className="product-rating mt-sm-2 mt-1">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <h6 className="theme-color">In Stock</h6>
                            </div>
                            <div className="add-to-cart-box">
                              <button className="btn btn-add-cart addcart-button">
                                Add
                                <span className="add-icon">
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </button>
                              <div className="cart_qty qty-box">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="qty-left-minus"
                                    data-type="minus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    defaultValue={0}
                                  />
                                  <button
                                    type="button"
                                    className="qty-right-plus"
                                    data-type="plus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div className="product-box">
                          <div className="product-image">
                            <a href="product-left-thumbnail.html">
                              <img
                                src="/assets/images/vegetable/product/4.png"
                                className="img-fluid blur-up lazyload"
                                alt="Image"
                              />
                            </a>
                            <ul className="product-option">
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View"
                              >
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view"
                                >
                                  <i data-feather="eye" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Compare"
                              >
                                <a href="compare.html">
                                  <i data-feather="refresh-cw" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Wishlist"
                              >
                                <a
                                  href="wishlist.html"
                                  className="notifi-wishlist"
                                >
                                  <i data-feather="heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detail">
                            <a href="product-left-thumbnail.html">
                              <h6 className="name h-100">Dark Chocalate</h6>
                            </a>
                            <h5 className="sold text-content">
                              <span className="theme-color price">$26.69</span>
                              <del>28.56</del>
                            </h5>
                            <div className="product-rating mt-sm-2 mt-1">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <h6 className="theme-color">In Stock</h6>
                            </div>
                            <div className="add-to-cart-box">
                              <button className="btn btn-add-cart addcart-button">
                                Add
                                <span className="add-icon">
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </button>
                              <div className="cart_qty qty-box">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="qty-left-minus"
                                    data-type="minus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    defaultValue={0}
                                  />
                                  <button
                                    type="button"
                                    className="qty-right-plus"
                                    data-type="plus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div className="product-box">
                          <div className="product-image">
                            <a href="product-left-thumbnail.html">
                              <img
                                src="/assets/images/vegetable/product/5.png"
                                className="img-fluid blur-up lazyload"
                                alt="Image"
                              />
                            </a>
                            <ul className="product-option">
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View"
                              >
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view"
                                >
                                  <i data-feather="eye" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Compare"
                              >
                                <a href="compare.html">
                                  <i data-feather="refresh-cw" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Wishlist"
                              >
                                <a
                                  href="wishlist.html"
                                  className="notifi-wishlist"
                                >
                                  <i data-feather="heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detail">
                            <a href="product-left-thumbnail.html">
                              <h6 className="name h-100">Mix-sweet-food</h6>
                            </a>
                            <h5 className="sold text-content">
                              <span className="theme-color price">$26.69</span>
                              <del>28.56</del>
                            </h5>
                            <div className="product-rating mt-sm-2 mt-1">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <h6 className="theme-color">In Stock</h6>
                            </div>
                            <div className="add-to-cart-box">
                              <button className="btn btn-add-cart addcart-button">
                                Add
                                <span className="add-icon">
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </button>
                              <div className="cart_qty qty-box">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="qty-left-minus"
                                    data-type="minus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    defaultValue={0}
                                  />
                                  <button
                                    type="button"
                                    className="qty-right-plus"
                                    data-type="plus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row m-0">
                      <div className="col-12 px-0">
                        <div className="product-box">
                          <div className="product-image">
                            <a href="product-left-thumbnail.html">
                              <img
                                src="/assets/images/vegetable/product/4.png"
                                className="img-fluid blur-up lazyload"
                                alt="Image"
                              />
                            </a>
                            <ul className="product-option">
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View"
                              >
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view"
                                >
                                  <i data-feather="eye" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Compare"
                              >
                                <a href="compare.html">
                                  <i data-feather="refresh-cw" />
                                </a>
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Wishlist"
                              >
                                <a
                                  href="wishlist.html"
                                  className="notifi-wishlist"
                                >
                                  <i data-feather="heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product-detail">
                            <a href="product-left-thumbnail.html">
                              <h6 className="name h-100">Dark Chocalate</h6>
                            </a>
                            <h5 className="sold text-content">
                              <span className="theme-color price">$26.69</span>
                              <del>28.56</del>
                            </h5>
                            <div className="product-rating mt-sm-2 mt-1">
                              <ul className="rating">
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" className="fill" />
                                </li>
                                <li>
                                  <i data-feather="star" />
                                </li>
                              </ul>
                              <h6 className="theme-color">In Stock</h6>
                            </div>
                            <div className="add-to-cart-box">
                              <button className="btn btn-add-cart addcart-button">
                                Add
                                <span className="add-icon">
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </button>
                              <div className="cart_qty qty-box">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="qty-left-minus"
                                    data-type="minus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-minus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    defaultValue={0}
                                  />
                                  <button
                                    type="button"
                                    className="qty-right-plus"
                                    data-type="plus"
                                    data-field
                                  >
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-t-space">
                <div className="banner-contain">
                  <img
                    src="/assets/images/vegetable/banner/15.jpg"
                    className="bg-img blur-up lazyload"
                    alt="Image"
                  />
                  <div className="banner-details p-center p-4 text-white text-center">
                    <div>
                      <h3 className="lh-base fw-bold offer-text">
                        Get $3 Cashback! Min Order of $30
                      </h3>
                      <h6 className="coupon-code">Use Code : GROCERY1920</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-t-space section-b-space">
                <div className="row g-md-4 g-3">
                  <div className="col-xxl-8 col-xl-12 col-md-7">
                    <div className="banner-contain hover-effect">
                      <img
                        src="/assets/images/vegetable/banner/12.jpg"
                        className="bg-img blur-up lazyload"
                        alt="Image"
                      />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h2 className="text-kaushan fw-normal theme-color">
                            Get Ready To
                          </h2>
                          <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                          <p className="text-content banner-text">
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate.
                          </p>
                          <button className="btn btn-animation btn-sm mend-auto">
                            Shop Now{" "}
                            <i className="fa-solid fa-arrow-right icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-12 col-md-5">
                    <a
                      href="shop-left-sidebar.html"
                      className="banner-contain hover-effect h-100"
                    >
                      <img
                        src="/assets/images/vegetable/banner/13.jpg"
                        className="bg-img blur-up lazyload"
                        alt="Image"
                      />
                      <div className="banner-details p-center-left p-4 h-100">
                        <div>
                          <h2 className="text-kaushan fw-normal text-danger">
                            20% Off
                          </h2>
                          <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                          <h3 className="fw-normal product-name text-title">
                            Product
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="title d-block">
                <div>
                  <h2>Our best Seller</h2>
                  <span className="title-leaf">
                    <svg className="icon-width">
                      <use xlinkHref="/assets/svg/leaf.svg#leaf" />
                    </svg>
                  </span>
                  <p>
                    A virtual assistant collects the products from your list
                  </p>
                </div>
              </div>
              <div className="best-selling-slider product-wrapper wow fadeInUp">
                <div>
                  <ul className="product-list">
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/11.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">
                                Tuffets Whole Wheat Bread
                              </h6>
                            </a>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/12.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Potato</h6>
                            </a>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/13.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Green Chilli</h6>
                            </a>
                            <span>200 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/14.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Muffets Burger Bun</h6>
                            </a>
                            <span>150 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="product-list">
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/15.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">
                                Tuffets Britannia Cheezza
                              </h6>
                            </a>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/16.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Long Life Toned Milk</h6>
                            </a>
                            <span>1 L</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/17.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Organic Tomato</h6>
                            </a>
                            <span>1 KG</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/18.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Organic Jam</h6>
                            </a>
                            <span>150 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="product-list">
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/19.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">
                                Good Life Refined Sunflower Oil
                              </h6>
                            </a>
                            <span>1 L</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/20.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Good Life Raw Peanuts</h6>
                            </a>
                            <span>500 G</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/21.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">TufBest Farms Moong Dal</h6>
                            </a>
                            <span>1 KG</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="offer-product">
                        <a
                          href="product-left-thumbnail.html"
                          className="offer-image"
                        >
                          <img
                            src="/assets/images/vegetable/product/22.png"
                            className="blur-up lazyload"
                            alt="Image"
                          />
                        </a>
                        <div className="offer-detail">
                          <div>
                            <a
                              href="product-left-thumbnail.html"
                              className="text-title"
                            >
                              <h6 className="name">Frooti Mango Drink</h6>
                            </a>
                            <span>160 ML</span>
                            <h6 className="price theme-color">$ 10.00</h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section-t-space">
                <div className="banner-contain hover-effect">
                  <img
                    src="/assets/images/vegetable/banner/14.jpg"
                    className="bg-img blur-up lazyload"
                    alt="Image"
                  />
                  <div className="banner-details p-center banner-b-space w-100 text-center">
                    <div>
                      <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                        SUMMER
                      </h6>
                      <h2 className="banner-title">VEGETABLE</h2>
                      <h5 className="lh-sm mx-auto mt-1 text-content">
                        Save up to 5% OFF
                      </h5>
                      <button className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2">
                        Shop Now <i className="fa-solid fa-arrow-right icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title section-t-space">
                <h2>Featured Blog</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use xlinkHref="/assets/svg/leaf.svg#leaf" />
                  </svg>
                </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>
              <div className="slider-3-blog ratio_65 no-arrow product-wrapper">
                <div>
                  <div className="blog-box">
                    <div className="blog-box-image">
                      <a href="blog-detail.html" className="blog-image">
                        <img
                          src="/assets/images/vegetable/blog/1.jpg"
                          className="bg-img blur-up lazyload"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <a href="blog-detail.html" className="blog-detail">
                      <h6>20 March, 2022</h6>
                      <h5>Fresh Vegetable Online</h5>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="blog-box">
                    <div className="blog-box-image">
                      <a href="blog-detail.html" className="blog-image">
                        <img
                          src="/assets/images/vegetable/blog/2.jpg"
                          className="bg-img blur-up lazyload"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <a href="blog-detail.html" className="blog-detail">
                      <h6>10 April, 2022</h6>
                      <h5>Fresh Combo Fruit</h5>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="blog-box">
                    <div className="blog-box-image">
                      <a href="blog-detail.html" className="blog-image">
                        <img
                          src="/assets/images/vegetable/blog/3.jpg"
                          className="bg-img blur-up lazyload"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <a href="blog-detail.html" className="blog-detail">
                      <h6>10 April, 2022</h6>
                      <h5>Nuts to Eat for Better Health</h5>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="blog-box">
                    <div className="blog-box-image">
                      <a href="blog-detail.html" className="blog-image">
                        <img
                          src="/assets/images/vegetable/blog/1.jpg"
                          className="bg-img blur-up lazyload"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <a href="blog-detail.html" className="blog-detail">
                      <h6>20 March, 2022</h6>
                      <h5>Fresh Vegetable Online</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
      {/* Newsletter Section Start */}
      <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
          <div className="newsletter-box newsletter-box-2">
            <div className="newsletter-contain py-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                    <div className="newsletter-detail">
                      <h2>Join our newsletter and get...</h2>
                      <h5>$20 discount for your first order</h5>
                      <div className="input-box">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter Your Email"
                        />
                        <i className="fa-solid fa-envelope arrow" />
                        <button className="sub-btn  btn-animation">
                          <span className="d-sm-block d-none">Subscribe</span>
                          <i className="fa-solid fa-arrow-right icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section End */}
    </React.Fragment>
  );
};

export default HomePage;
