import React from "react";

import dynamic from "next/dynamic";
import Link from "next/link";

const Header = dynamic(() => import("./Header"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

const ProductDetails = () => {
  return (
    <>
      <main className="main" style={{ transform: "none" }}>
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link href="/" rel="nofollow">
                <i className="fi-rs-home mr-5" />
                Home
              </Link>
              <span />{" "}
              <a href="shop-grid-right.html">Vegetables &amp; tubers</a>{" "}
              <span /> Seeds of Change Organic
            </div>
          </div>
        </div>
        <div className="container mb-30" style={{ transform: "none" }}>
          <div className="row" style={{ transform: "none" }}>
            <div
              className="col-xl-11 col-lg-12 m-auto"
              style={{ transform: "none" }}
            >
              <div className="row" style={{ transform: "none" }}>
                <div className="col-xl-9">
                  <div className="product-detail accordion-detail">
                    <div className="row mb-50 mt-30">
                      <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                        <div className="detail-gallery">
                          <span className="zoom-icon">
                            <i className="fi-rs-search" />
                          </span>
                          {/* MAIN SLIDES */}
                          <div className="product-image-slider slick-initialized slick-slider">
                            <div className="slick-list draggable">
                              <div
                                className="slick-track"
                                style={{
                                  opacity: 1,
                                  width: 7455,
                                  transform: "translate3d(-497px, 0px, 0px)",
                                }}
                              >
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={-1}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-7.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-current slick-active"
                                  data-slick-index={0}
                                  aria-hidden="false"
                                  tabIndex={0}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-2.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide"
                                  data-slick-index={1}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-1.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide"
                                  data-slick-index={2}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-3.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide"
                                  data-slick-index={3}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-4.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide"
                                  data-slick-index={4}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-5.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide"
                                  data-slick-index={5}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-6.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide"
                                  data-slick-index={6}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-7.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={7}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-2.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={8}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-1.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={9}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-3.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={10}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-4.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={11}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-5.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={12}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-6.jpg"
                                    alt="product image"
                                  />
                                </figure>
                                <figure
                                  className="border-radius-10 slick-slide slick-cloned"
                                  data-slick-index={13}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 497 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/product-16-7.jpg"
                                    alt="product image"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                          {/* THUMBNAILS */}
                          <div className="slider-nav-thumbnails slick-initialized slick-slider">
                            <button
                              type="button"
                              className="slick-prev slick-arrow"
                              style={{}}
                            >
                              <i className="fi-rs-arrow-small-left" />
                            </button>
                            <div className="slick-list draggable">
                              <div
                                className="slick-track"
                                style={{
                                  opacity: 1,
                                  width: 2340,
                                  transform: "translate3d(-520px, 0px, 0px)",
                                }}
                              >
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={-4}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-6.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={-3}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-7.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={-2}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-8.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={-1}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-9.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-current"
                                  data-slick-index={0}
                                  aria-hidden="false"
                                  tabIndex={0}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide"
                                  data-slick-index={1}
                                  aria-hidden="false"
                                  tabIndex={0}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-4.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide"
                                  data-slick-index={2}
                                  aria-hidden="false"
                                  tabIndex={0}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-5.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide"
                                  data-slick-index={3}
                                  aria-hidden="false"
                                  tabIndex={0}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-6.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide"
                                  data-slick-index={4}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-7.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide"
                                  data-slick-index={5}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-8.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide"
                                  data-slick-index={6}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-9.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={7}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={8}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-4.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={9}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-5.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={10}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-6.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={11}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-7.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={12}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-8.jpg"
                                    alt="product image"
                                  />
                                </div>
                                <div
                                  className="slick-slide slick-cloned"
                                  data-slick-index={13}
                                  aria-hidden="true"
                                  tabIndex={-1}
                                  style={{ width: 110 }}
                                >
                                  <img
                                    src="/assets/imgs/shop/thumbnail-9.jpg"
                                    alt="product image"
                                  />
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="slick-next slick-arrow"
                              style={{}}
                            >
                              <i className="fi-rs-arrow-small-right" />
                            </button>
                          </div>
                        </div>
                        {/* End Gallery */}
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="detail-info pr-30 pl-30">
                          <span className="stock-status out-stock">
                            {" "}
                            Sale Off{" "}
                          </span>
                          <h2 className="title-detail">
                            Seeds of Change Organic Quinoa, Brown
                          </h2>
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
                              <span className="current-price text-brand">
                                $38
                              </span>
                              <span>
                                <span className="save-price font-md color3 ml-15">
                                  26% Off
                                </span>
                                <span className="old-price font-md ml-15">
                                  $52
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="short-desc mb-30">
                            <p className="font-lg">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Aliquam rem officia, corrupti
                              reiciendis minima nisi modi, quasi, odio minus
                              dolore impedit fuga eum eligendi.
                            </p>
                          </div>
                          <div className="attr-detail attr-size mb-30">
                            <strong className="mr-10">Size / Weight: </strong>
                            <ul className="list-filter size-filter font-small">
                              <li>
                                <a href="#">50g</a>
                              </li>
                              <li className="active">
                                <a href="#">60g</a>
                              </li>
                              <li>
                                <a href="#">80g</a>
                              </li>
                              <li>
                                <a href="#">100g</a>
                              </li>
                              <li>
                                <a href="#">150g</a>
                              </li>
                            </ul>
                          </div>
                          <div className="detail-extralink mb-50">
                            <div className="detail-qty border radius">
                              <a href="#" className="qty-down">
                                <i className="fi-rs-angle-small-down" />
                              </a>
                              <input
                                type="text"
                                name="quantity"
                                className="qty-val"
                                defaultValue={1}
                                min={1}
                              />
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
                              <a
                                aria-label="Add To Wishlist"
                                className="action-btn hover-up"
                                href="shop-wishlist.html"
                              >
                                <i className="fi-rs-heart" />
                              </a>
                              <a
                                aria-label="Compare"
                                className="action-btn hover-up"
                                href="shop-compare.html"
                              >
                                <i className="fi-rs-shuffle" />
                              </a>
                            </div>
                          </div>
                          <div className="font-xs">
                            <ul className="mr-50 float-start">
                              <li className="mb-5">
                                Type:{" "}
                                <span className="text-brand">Organic</span>
                              </li>
                              <li className="mb-5">
                                MFG:
                                <span className="text-brand"> Jun 4.2022</span>
                              </li>
                              <li>
                                LIFE:{" "}
                                <span className="text-brand">70 days</span>
                              </li>
                            </ul>
                            <ul className="float-start">
                              <li className="mb-5">
                                SKU: <a href="#">FWM15VKT</a>
                              </li>
                              <li className="mb-5">
                                Tags:{" "}
                                <a href="#" rel="tag">
                                  Snack
                                </a>
                                ,{" "}
                                <a href="#" rel="tag">
                                  Organic
                                </a>
                                ,{" "}
                                <a href="#" rel="tag">
                                  Brown
                                </a>
                              </li>
                              <li>
                                Stock:
                                <span className="in-stock text-brand ml-5">
                                  8 Items In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Detail Info */}
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="tab-style3">
                        <ul className="nav nav-tabs text-uppercase">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="Description-tab"
                              data-bs-toggle="tab"
                              href="#Description"
                            >
                              Description
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="Additional-info-tab"
                              data-bs-toggle="tab"
                              href="#Additional-info"
                            >
                              Additional info
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="Vendor-info-tab"
                              data-bs-toggle="tab"
                              href="#Vendor-info"
                            >
                              Vendor
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="Reviews-tab"
                              data-bs-toggle="tab"
                              href="#Reviews"
                            >
                              Reviews (3)
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content shop_info_tab entry-main-content">
                          <div
                            className="tab-pane fade show active"
                            id="Description"
                          >
                            <div>
                              <p>
                                Uninhibited carnally hired played in whimpered
                                dear gorilla koala depending and much yikes off
                                far quetzal goodness and from for grimaced
                                goodness unaccountably and meadowlark near
                                unblushingly crucial scallop tightly neurotic
                                hungrily some and dear furiously this apart.
                              </p>
                              <p>
                                Spluttered narrowly yikes left moth in yikes
                                bowed this that grizzly much hello on spoon-fed
                                that alas rethought much decently richly and wow
                                against the frequent fluidly at formidable
                                acceptably flapped besides and much circa far
                                over the bucolically hey precarious goldfinch
                                mastodon goodness gnashed a jellyfish and one
                                however because.
                              </p>
                              <ul className="product-more-infor mt-30">
                                <li>
                                  <span>Type Of Packing</span> Bottle
                                </li>
                                <li>
                                  <span>Color</span> Green, Pink, Powder Blue,
                                  Purple
                                </li>
                                <li>
                                  <span>Quantity Per Case</span> 100ml
                                </li>
                                <li>
                                  <span>Ethyl Alcohol</span> 70%
                                </li>
                                <li>
                                  <span>Piece In One</span> Carton
                                </li>
                              </ul>
                              <hr className="wp-block-separator is-style-dots" />
                              <p>
                                Laconic overheard dear woodchuck wow this
                                outrageously taut beaver hey hello far
                                meadowlark imitatively egregiously hugged that
                                yikes minimally unanimous pouted flirtatiously
                                as beaver beheld above forward energetic across
                                this jeepers beneficently cockily less a the
                                raucously that magic upheld far so the this
                                where crud then below after jeez enchanting
                                drunkenly more much wow callously irrespective
                                limpet.
                              </p>
                              <h4 className="mt-30">
                                Packaging &amp; Delivery
                              </h4>
                              <hr className="wp-block-separator is-style-wide" />
                              <p>
                                Less lion goodness that euphemistically robin
                                expeditiously bluebird smugly scratched far
                                while thus cackled sheepishly rigid after due
                                one assenting regarding censorious while
                                occasional or this more crane went more as this
                                less much amid overhung anathematic because much
                                held one exuberantly sheep goodness so where rat
                                wry well concomitantly.
                              </p>
                              <p>
                                Scallop or far crud plain remarkably far by thus
                                far iguana lewd precociously and and less
                                rattlesnake contrary caustic wow this near alas
                                and next and pled the yikes articulate about as
                                less cackled dalmatian in much less well jeering
                                for the thanks blindly sentimental whimpered
                                less across objectively fanciful grimaced wildly
                                some wow and rose jeepers outgrew lugubrious
                                luridly irrationally attractively dachshund.
                              </p>
                              <h4 className="mt-30">Suggested Use</h4>
                              <ul className="product-more-infor mt-30">
                                <li>Refrigeration not necessary.</li>
                                <li>Stir before serving</li>
                              </ul>
                              <h4 className="mt-30">Other Ingredients</h4>
                              <ul className="product-more-infor mt-30">
                                <li>
                                  Organic raw pecans, organic raw cashews.
                                </li>
                                <li>
                                  This butter was produced using a LTG (Low
                                  Temperature Grinding) process
                                </li>
                                <li>
                                  Made in machinery that processes tree nuts but
                                  does not process peanuts, gluten, dairy or soy
                                </li>
                              </ul>
                              <h4 className="mt-30">Warnings</h4>
                              <ul className="product-more-infor mt-30">
                                <li>
                                  Oil separation occurs naturally. May contain
                                  pieces of shell.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="Additional-info">
                            <table className="font-md">
                              <tbody>
                                <tr className="stand-up">
                                  <th>Stand Up</th>
                                  <td>
                                    <p>
                                      35″L x 24″W x 37-45″H(front to back wheel)
                                    </p>
                                  </td>
                                </tr>
                                <tr className="folded-wo-wheels">
                                  <th>Folded (w/o wheels)</th>
                                  <td>
                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                  </td>
                                </tr>
                                <tr className="folded-w-wheels">
                                  <th>Folded (w/ wheels)</th>
                                  <td>
                                    <p>32.5″L x 24″W x 18.5″H</p>
                                  </td>
                                </tr>
                                <tr className="door-pass-through">
                                  <th>Door Pass Through</th>
                                  <td>
                                    <p>24</p>
                                  </td>
                                </tr>
                                <tr className="frame">
                                  <th>Frame</th>
                                  <td>
                                    <p>Aluminum</p>
                                  </td>
                                </tr>
                                <tr className="weight-wo-wheels">
                                  <th>Weight (w/o wheels)</th>
                                  <td>
                                    <p>20 LBS</p>
                                  </td>
                                </tr>
                                <tr className="weight-capacity">
                                  <th>Weight Capacity</th>
                                  <td>
                                    <p>60 LBS</p>
                                  </td>
                                </tr>
                                <tr className="width">
                                  <th>Width</th>
                                  <td>
                                    <p>24″</p>
                                  </td>
                                </tr>
                                <tr className="handle-height-ground-to-handle">
                                  <th>Handle height (ground to handle)</th>
                                  <td>
                                    <p>37-45″</p>
                                  </td>
                                </tr>
                                <tr className="wheels">
                                  <th>Wheels</th>
                                  <td>
                                    <p>12″ air / wide track slick tread</p>
                                  </td>
                                </tr>
                                <tr className="seat-back-height">
                                  <th>Seat back height</th>
                                  <td>
                                    <p>21.5″</p>
                                  </td>
                                </tr>
                                <tr className="head-room-inside-canopy">
                                  <th>Head room (inside canopy)</th>
                                  <td>
                                    <p>25″</p>
                                  </td>
                                </tr>
                                <tr className="pa_color">
                                  <th>Color</th>
                                  <td>
                                    <p>Black, Blue, Red, White</p>
                                  </td>
                                </tr>
                                <tr className="pa_size">
                                  <th>Size</th>
                                  <td>
                                    <p>M, S</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane fade" id="Vendor-info">
                            <div className="vendor-logo d-flex mb-30">
                              <img src="/assets/imgs/vendor/vendor-18.svg" />
                              <div className="vendor-name ml-15">
                                <h6>
                                  <a href="vendor-details-2.html">
                                    Noodles Co.
                                  </a>
                                </h6>
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
                            </div>
                            <ul className="contact-infor mb-50">
                              <li>
                                <img src="/assets/imgs/theme/icons/icon-location.svg" />
                                <strong>Address: </strong>{" "}
                                <span>
                                  5171 W Campbell Ave undefined Kent, Utah 53127
                                  United States
                                </span>
                              </li>
                              <li>
                                <img src="/assets/imgs/theme/icons/icon-contact.svg" />
                                <strong>Contact Seller:</strong>
                                <span>(+91) - 540-025-553</span>
                              </li>
                            </ul>
                            <div className="d-flex mb-55">
                              <div className="mr-30">
                                <p className="text-brand font-xs">Rating</p>
                                <h4 className="mb-0">92%</h4>
                              </div>
                              <div className="mr-30">
                                <p className="text-brand font-xs">
                                  Ship on time
                                </p>
                                <h4 className="mb-0">100%</h4>
                              </div>
                              <div>
                                <p className="text-brand font-xs">
                                  Chat response
                                </p>
                                <h4 className="mb-0">89%</h4>
                              </div>
                            </div>
                            <p>
                              Noodles &amp; Company is an American fast-casual
                              restaurant that offers international and American
                              noodle dishes and pasta in addition to soups and
                              salads. Noodles &amp; Company was founded in 1995
                              by Aaron Kennedy and is headquartered in
                              Broomfield, Colorado. The company went public in
                              2013 and recorded a $457 million revenue in
                              2017.In late 2018, there were 460 Noodles &amp;
                              Company locations across 29 states and Washington,
                              D.C.
                            </p>
                          </div>
                          <div className="tab-pane fade" id="Reviews">
                            {/*Comments*/}
                            <div className="comments-area">
                              <div className="row">
                                <div className="col-lg-8">
                                  <h4 className="mb-30">
                                    Customer questions &amp; answers
                                  </h4>
                                  <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex mb-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img src="/assets/imgs/blog/author-2.png" />
                                          <a
                                            href="#"
                                            className="font-heading text-brand"
                                          >
                                            Sienna
                                          </a>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2022 at 3:12 pm{" "}
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "100%" }}
                                              />
                                            </div>
                                          </div>
                                          <p className="mb-10">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?{" "}
                                            <a href="#" className="reply">
                                              Reply
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img src="/assets/imgs/blog/author-3.png" />
                                          <a
                                            href="#"
                                            className="font-heading text-brand"
                                          >
                                            Brenna
                                          </a>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2022 at 3:12 pm{" "}
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "80%" }}
                                              />
                                            </div>
                                          </div>
                                          <p className="mb-10">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?{" "}
                                            <a href="#" className="reply">
                                              Reply
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img src="/assets/imgs/blog/author-4.png" />
                                          <a
                                            href="#"
                                            className="font-heading text-brand"
                                          >
                                            Gemma
                                          </a>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2022 at 3:12 pm{" "}
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "80%" }}
                                              />
                                            </div>
                                          </div>
                                          <p className="mb-10">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?{" "}
                                            <a href="#" className="reply">
                                              Reply
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <h4 className="mb-30">Customer reviews</h4>
                                  <div className="d-flex mb-30">
                                    <div className="product-rate d-inline-block mr-15">
                                      <div
                                        className="product-rating"
                                        style={{ width: "90%" }}
                                      />
                                    </div>
                                    <h6>4.8 out of 5</h6>
                                  </div>
                                  <div className="progress">
                                    <span>5 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      50%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>4 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      25%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>3 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuenow={45}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      45%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>2 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuenow={65}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      65%
                                    </div>
                                  </div>
                                  <div className="progress mb-30">
                                    <span>1 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "85%" }}
                                      aria-valuenow={85}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      85%
                                    </div>
                                  </div>
                                  <a href="#" className="font-xs text-muted">
                                    How are ratings calculated?
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/*comment form*/}
                            <div className="comment-form">
                              <h4 className="mb-15">Add a review</h4>
                              <div className="product-rate d-inline-block mb-30" />
                              <div className="row">
                                <div className="col-lg-8 col-md-12">
                                  <form
                                    className="form-contact comment_form"
                                    action="#"
                                    id="commentForm"
                                  >
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="form-group">
                                          <textarea
                                            className="form-control w-100"
                                            name="comment"
                                            id="comment"
                                            cols={30}
                                            rows={9}
                                            placeholder="Write Comment"
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="website"
                                            id="website"
                                            type="text"
                                            placeholder="Website"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <button
                                        type="submit"
                                        className="button button-contactForm"
                                      >
                                        Submit Review
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-60">
                      <div className="col-12">
                        <h2 className="section-title style-1 mb-30">
                          Related products
                        </h2>
                      </div>
                      <div className="col-12">
                        <div className="row related-products">
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                            <div className="product-cart-wrap hover-up">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="default-img"
                                      src="/assets/imgs/shop/product-2-1.jpg"
                                    />
                                    <img
                                      className="hover-img"
                                      src="/assets/imgs/shop/product-2-2.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="hot">Hot</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    Ulstra Bass Headphone
                                  </a>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$238.85 </span>
                                  <span className="old-price">$245.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                            <div className="product-cart-wrap hover-up">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="default-img"
                                      src="/assets/imgs/shop/product-3-1.jpg"
                                    />
                                    <img
                                      className="hover-img"
                                      src="/assets/imgs/shop/product-4-2.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="sale">-12%</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    Smart Bluetooth Speaker
                                  </a>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$138.85 </span>
                                  <span className="old-price">$145.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                            <div className="product-cart-wrap hover-up">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="default-img"
                                      src="/assets/imgs/shop/product-4-1.jpg"
                                    />
                                    <img
                                      className="hover-img"
                                      src="/assets/imgs/shop/product-4-2.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="new">New</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    HomeSpeak 12UEA Goole
                                  </a>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$738.85 </span>
                                  <span className="old-price">$1245.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6 d-lg-block d-none">
                            <div className="product-cart-wrap hover-up mb-0">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    <img
                                      className="default-img"
                                      src="/assets/imgs/shop/product-5-1.jpg"
                                    />
                                    <img
                                      className="hover-img"
                                      src="/assets/imgs/shop/product-3-2.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                    tabIndex={0}
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="hot">Hot</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <a
                                    href="shop-product-right.html"
                                    tabIndex={0}
                                  >
                                    Dadua Camera 4K 2022EF
                                  </a>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$89.8 </span>
                                  <span className="old-price">$98.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 primary-sidebar sticky-sidebar mt-30"
                  style={{
                    position: "relative",
                    overflow: "visible",
                    boxSizing: "border-box",
                    minHeight: 1,
                  }}
                >
                  {/* Fillter By Price */}
                  {/* Product sidebar Widget */}
                  <div
                    className="theiaStickySidebar"
                    style={{
                      paddingTop: 0,
                      paddingBottom: 1,
                      position: "static",
                      transform: "none",
                      top: 0,
                      left: "1119.75px",
                    }}
                  >
                    <div className="sidebar-widget widget-category-2 mb-30">
                      <h5 className="section-title style-1 mb-30">Category</h5>
                      <ul>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-1.svg" />
                            Milks &amp; Dairies
                          </a>
                          <span className="count">9</span>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-2.svg" />
                            Clothing
                          </a>
                          <span className="count">35</span>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-3.svg" />
                            Pet Foods{" "}
                          </a>
                          <span className="count">42</span>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-4.svg" />
                            Baking material
                          </a>
                          <span className="count">68</span>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img src="/assets/imgs/theme/icons/category-5.svg" />
                            Fresh Fruit
                          </a>
                          <span className="count">87</span>
                        </li>
                      </ul>
                    </div>

                    <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                      <h5 className="section-title style-1 mb-30">
                        New products
                      </h5>
                      <div className="single-post clearfix">
                        <div className="image">
                          <img
                            src="/assets/imgs/shop/thumbnail-3.jpg"
                            alt="#"
                          />
                        </div>
                        <div className="content pt-10">
                          <h5>
                            <a href="shop-product-detail.html">Chen Cardigan</a>
                          </h5>
                          <p className="price mb-0 mt-5">$99.50</p>
                          <div className="product-rate">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="single-post clearfix">
                        <div className="image">
                          <img
                            src="/assets/imgs/shop/thumbnail-4.jpg"
                            alt="#"
                          />
                        </div>
                        <div className="content pt-10">
                          <h6>
                            <a href="shop-product-detail.html">Chen Sweater</a>
                          </h6>
                          <p className="price mb-0 mt-5">$89.50</p>
                          <div className="product-rate">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="single-post clearfix">
                        <div className="image">
                          <img
                            src="/assets/imgs/shop/thumbnail-5.jpg"
                            alt="#"
                          />
                        </div>
                        <div className="content pt-10">
                          <h6>
                            <a href="shop-product-detail.html">
                              Colorful Jacket
                            </a>
                          </h6>
                          <p className="price mb-0 mt-5">$25</p>
                          <div className="product-rate">
                            <div
                              className="product-rating"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none animated"
                      style={{ visibility: "visible" }}
                    >
                      <img src="/assets/imgs/banner/banner-11.png" />
                      <div className="banner-text">
                        <span>Oganic</span>
                        <h4>
                          Save 17% <br />
                          on <span className="text-brand">Oganic</span>
                          <br />
                          Juice
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;