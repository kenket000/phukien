import React from "react";

const ProductDetails = () => {
  return (
    <main className="product-page style-5">
      {/* ====== start product ====== */}
      <section className="product pt-50">
        <div className="container">
          <div className="section-head text-center mb-80 style-5">
            <div className="page-links color-999">
              <a href="#" className="me-2">
                Home
              </a>
              <span className="me-2">/</span>
              <a href="#" className="me-2">
                Itecks Store
              </a>
              <span className="me-2">/</span>
              <a href="#" className="color-000">
                Samsung New VR Headset Oculus 2.0
              </a>
            </div>
          </div>
          <div className="content">
            <div className="row gx-5">
              <div className="col-lg-6">
                <div className="product-slider">
                  <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr1.png" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr2.png" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr4.png" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr5.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr1.png" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr2.png" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr4.png" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="img">
                          <img src="/assets/img/shop/products/pr5.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-info">
                  <h6 className="category">Samsung</h6>
                  <h5 className="title">Samsung New VR Headset Oculus 2.0</h5>
                  <div className="rate">
                    <div className="stars">
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="rev">3 Reviews</span>
                  </div>
                  <div className="price">$222.65</div>
                  <div className="info-text">
                    Without a strong digital platform, time and money are
                    wasted, content sits unnoticed, and prospective clients
                    disappear.
                  </div>
                  <ul className="info-list">
                    <li className="d-flex align-items-center">
                      <i className="bi bi-dash me-1" />
                      VR 2 in 1, support 3D/4D AR
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-dash me-1" />
                      Intergrate with all devices as mobile, PS4, PS5, etc
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-dash me-1" />
                      Sync and Save data with Cloud
                    </li>
                  </ul>
                  <div className="color-quantity">
                    <div className="select-color">
                      <span className="me-4 mb-1 color-000 fw-bold fs-14px">
                        Select Color
                      </span>
                      <div className="colors-content">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorSelect1"
                          >
                            <span className="color-circle gray" />
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorSelect2"
                          >
                            <span className="color-circle black" />
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorSelect3"
                          >
                            <span className="color-circle blue" />
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="colorSelect"
                            id="colorSelect4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="colorSelect4"
                          >
                            <span className="color-circle green" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="qyt-addCart">
                      <span className="me-4 mb-1 color-000 fw-bold fs-14px">
                        QTY
                      </span>
                      <div className="add-more">
                        <span className="qt-minus">
                          <i className="fas fa-minus" />
                        </span>
                        <span className="qt">1</span>
                        <span className="qt-plus">
                          <i className="fas fa-plus" />
                        </span>
                      </div>
                      <a
                        href="#"
                        className="btn rounded-pill bg-blue4 fw-bold text-white"
                        target="_blank"
                      >
                        <small> Add To Cart </small>
                      </a>
                      <div className="fav-btn">
                        <i className="fas fa-heart" />
                      </div>
                    </div>
                  </div>
                  <div className="more-info pt-20 mt-1 border-1 border-top brd-gray">
                    <p className="text-uppercase fs-14px color-666 mb-1">
                      {" "}
                      <strong className="color-000">SKU:</strong> VRO20-5112
                    </p>
                    <p className="fs-14px color-666 mb-1">
                      {" "}
                      <strong className="color-000">Category:</strong>
                      Technology
                    </p>
                    <p className="fs-14px color-666 mb-1">
                      {" "}
                      <strong className="color-000">Tags:</strong>{" "}
                      <a href="#">samsung</a> ,{" "}
                      <a
                        href="#"
                        className="color-blue5 text-decoration-underline"
                      >
                        headset
                      </a>{" "}
                      , <a href="#">vr</a> , <a href="#">oculus</a> ,{" "}
                      <a href="#">ar</a>{" "}
                    </p>
                  </div>
                  <div className="socail-icons">
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                    >
                      <i className="fab fa-pinterest" />
                    </a>
                    <a
                      href="#"
                      className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== end product ====== */}
      {/* ====== start product details ====== */}
      <section className="product-details pt-100">
        <div className="container">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-description-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-description"
                type="button"
                role="tab"
                aria-controls="pills-description"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-reviews-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-reviews"
                type="button"
                role="tab"
                aria-controls="pills-reviews"
                aria-selected="false"
              >
                Reviews (3)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-information-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-information"
                type="button"
                role="tab"
                aria-controls="pills-information"
                aria-selected="false"
              >
                Additional Information
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-description"
              role="tabpanel"
              aria-labelledby="pills-description-tab"
            >
              <div className="content-info text-center pb-0">
                <div className="text mb-30">
                  Nulla velit turpis, tincidunt eget elit vitae, congue sodales
                  metus. Sed sed neque luctus, sollicitudin sem sed, consectetur
                  libero. Nunc mollis turpis velit, vitae laoreet sapien
                  vehicula nec. Curabitur blandit ac libero eu dictum. Nullam
                  vehicula hendrerit nisl eu laoreet. Cras non velit est.
                  Vivamus tincidunt lacus est, at auctor elit finibus et.
                  Maecenas a consequat metus. Aliquam ac nisl nec est mollis
                  faucibus eget vitae eros. Duis bibendum vestibulum felis id
                  mattis.
                </div>
                <div className="text">
                  Suspendisse metus sapien, lacinia eu lectus sit amet,
                  consequat mollis felis. Mauris convallis augue quis semper
                  venenatis. Vivamus imperdiet leo at neque efficitur, id
                  faucibus arcu eleifend. Vivamus in massa bibendum, aliquet est
                  quis, ornare lacus.
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-reviews"
              role="tabpanel"
              aria-labelledby="pills-reviews-tab"
            >
              <div className="product-reviews pt-30">
                <div className="row gx-5">
                  <div className="col-lg-7">
                    <div className="reviews-content pt-30">
                      <h5 className="color-000 mb-40 text-capitalize">
                        {" "}
                        02 reviews{" "}
                      </h5>
                      <div className="comment-replay-cont bg-light py-5 px-4 mb-20">
                        <div className="d-flex comment-cont">
                          <div className="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                            <img src="/assets/img/team/2.jpeg" />
                          </div>
                          <div className="inf">
                            <div className="title d-flex justify-content-between">
                              <h6 className="fw-bold fs-14px">
                                Robert Downey Jr
                              </h6>
                              <div className="time fs-12px text-uppercase d-inline-block">
                                <div className="rate">
                                  <div className="stars">
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text color-000 fs-12px mt-10">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Atume nusaate
                              staman utra phone limo sumeria
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment-replay-cont bg-light py-5 px-4 mb-20">
                        <div className="d-flex comment-cont">
                          <div className="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                            <img src="/assets/img/team/4.jpeg" />
                          </div>
                          <div className="inf">
                            <div className="title d-flex justify-content-between">
                              <h6 className="fw-bold fs-14px">Ben Chiwell</h6>
                              <div className="time fs-12px text-uppercase">
                                <div className="rate">
                                  <div className="stars">
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star active" />
                                    <i className="fas fa-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text color-000 fs-12px mt-10">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Atume nusaate
                              staman utra phone limo sumeria
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <form className="comment-form d-block pt-30">
                      <h5 className="color-000 mb-40 text-capitalize">
                        {" "}
                        Add a review{" "}
                      </h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <label className="text-uppercase mb-1">
                            your rating
                          </label>
                          <div className="rate-stars">
                            <input type="radio" name="star" defaultValue={5} />
                            <input type="radio" name="star" defaultValue={4} />
                            <input type="radio" name="star" defaultValue={3} />
                            <input type="radio" name="star" defaultValue={2} />
                            <input type="radio" name="star" defaultValue={1} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <textarea
                              className="form-control radius-4 fs-12px p-3"
                              rows={6}
                              placeholder="Write your comment here"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-4 mb-lg-0">
                            <input
                              type="text"
                              className="form-control fs-12px radius-4 p-3"
                              placeholder="Your Name *"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control fs-12px radius-4 p-3"
                              placeholder="Your Email *"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-check mt-20">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label fs-12px"
                              htmlFor="flexCheckDefault"
                            >
                              Save my name &amp; email in this browser for next
                              time I comment
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <a
                            href="#"
                            className="btn rounded-pill bg-blue4 fw-bold text-white mt-4"
                            target="_blank"
                          >
                            <small> Submit Comment </small>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-information"
              role="tabpanel"
              aria-labelledby="pills-information-tab"
            >
              <div className="content-info pb-0">
                <div className="additional-info">
                  <ul>
                    <li>
                      <strong>Weight</strong>
                      <span> 0.6 kg </span>
                    </li>
                    <li>
                      <strong>Dimensions</strong>
                      <span> 40 × 30 × 30 cm </span>
                    </li>
                    <li>
                      <strong>Color</strong>
                      <span> White, Black, Red </span>
                    </li>
                    <li>
                      <strong>Year</strong>
                      <span> 2021 </span>
                    </li>
                    <li>
                      <strong>Style</strong>
                      <span> Classic, Modern </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== end product details ====== */}
      {/* ====== start Related products ====== */}
      <section className="related-products section-padding">
        <div className="container">
          <div className="text-center title">
            <h3>Related Products</h3>
          </div>
          <div className="related-products-slider position-relative">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/1.png" />
                      <span className="label new">new</span>
                      <span className="fav-btn active">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">asus</h6>
                      <h5 className="title">
                        ASUS Chromebook Flip -10.2 inch, 256GB
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/2.png" />
                      <span className="label sale-off">15% off</span>
                      <span className="fav-btn">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">apple</h6>
                      <h5 className="title">Macbook Air 2018, 1 TB</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">
                      <span className="price-sale">$421.00</span>{" "}
                      <span className="old-price">$521.00</span>
                    </div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/3.png" />
                      <span className="fav-btn">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">Samsung</h6>
                      <h5 className="title">
                        Samsung New VR Headset, Oculus 2.0
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/4.png" />
                      <span className="fav-btn">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">brand name</h6>
                      <h5 className="title">
                        iPhone 6s Gold 64GB, Retina Ready
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/5.png" />
                      <span className="fav-btn">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">Xbox</h6>
                      <h5 className="title">Xbox One Controller</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/6.png" />
                      <span className="label sale-off">15% off</span>
                      <span className="fav-btn">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">amcrest</h6>
                      <h5 className="title">Amcrest Outdoor Camera</h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">
                      <span className="price-sale">$421.00</span>{" "}
                      <span className="old-price">$521.00</span>
                    </div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/7.png" />
                      <span className="fav-btn">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">dji2</h6>
                      <h5 className="title">
                        DJI II Phantom 4 Quad Drone With Camera
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-card">
                    <div className="img">
                      <img src="/assets/img/shop/products/8.png" />
                      <span className="fav-btn">
                        {" "}
                        <i className="fas fa-heart" />{" "}
                      </span>
                    </div>
                    <div className="info">
                      <h6 className="category">gopro</h6>
                      <h5 className="title">
                        Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera
                      </h5>
                      <div className="rate">
                        <div className="stars">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="rev">3 Reviews</span>
                      </div>
                    </div>
                    <div className="price">$197.00</div>
                    <a
                      href="#"
                      className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
                      target="_blank"
                    >
                      <span> Add To Cart </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </section>
      {/* ====== end Related products ====== */}
    </main>
  );
};

export default ProductDetails;
