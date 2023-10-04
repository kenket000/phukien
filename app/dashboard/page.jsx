"use client";
import React from "react";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <div className="page-body-wrapper">
        {/* Page Sidebar Start*/}
        <div className="sidebar-wrapper">
          <div id="sidebarEffect" />
          <div>
            <div className="logo-wrapper logo-wrapper-scenter">
              <a href="index.html">
                <img
                  className="img-fluid for-white"
                  src="/dashboard/assets/images/logo/full-white.png"
                  alt="logo"
                />
              </a>
              <div className="back-btn">
                <i className="fa fa-angle-left" />
              </div>
              <div className="toggle-sidebar">
                <i className="ri-apps-line status_toggle middle sidebar-toggle" />
              </div>
            </div>
            <div className="logo-icon-wrapper">
              <a href="index.html">
                <img
                  className="img-fluid main-logo main-white"
                  src="/dashboard/assets/images/logo/logo.png"
                  alt="logo"
                />
                <img
                  className="img-fluid main-logo main-dark"
                  src="/dashboard/assets/images/logo/logo-white.png"
                  alt="logo"
                />
              </a>
            </div>
            <nav className="sidebar-main">
              <div className="left-arrow" id="left-arrow">
                <i data-feather="arrow-left" />
              </div>
              <div id="sidebar-menu">
                <ul className="sidebar-links" id="simple-bar">
                  <li className="back-btn" />
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title link-nav"
                      href="index.html"
                    >
                      <i className="ri-home-line" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="linear-icon-link sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-store-3-line" />
                      <span>Product</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="products.html">Prodcts</a>
                      </li>
                      <li>
                        <a href="add-new-product.html">Add New Products</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="linear-icon-link sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-list-check-2" />
                      <span>Category</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="category.html">Category List</a>
                      </li>
                      <li>
                        <a href="add-new-category.html">Add New Category</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="linear-icon-link sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-list-settings-line" />
                      <span>Attributes</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="attributes.html">Attributes</a>
                      </li>
                      <li>
                        <a href="add-new-attributes.html">Add Attributes</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-user-3-line" />
                      <span>Users</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="all-users.html">All users</a>
                      </li>
                      <li>
                        <a href="add-new-user.html">Add new user</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-user-3-line" />
                      <span>Roles</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="role.html">All roles</a>
                      </li>
                      <li>
                        <a href="create-role.html">Create Role</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title link-nav"
                      href="media.html"
                    >
                      <i className="ri-price-tag-3-line" />
                      <span>Media</span>
                    </a>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-archive-line" />
                      <span>Orders</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="order-list.html">Order List</a>
                      </li>
                      <li>
                        <a href="order-detail.html">Order Detail</a>
                      </li>
                      <li>
                        <a href="order-tracking.html">Order Tracking</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="linear-icon-link sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-focus-3-line" />
                      <span>Localization</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="translation.html">Translation</a>
                      </li>
                      <li>
                        <a href="currency-rates.html">Currency Rates</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="linear-icon-link sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-price-tag-3-line" />
                      <span>Coupons</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="coupon-list.html">Coupon List</a>
                      </li>
                      <li>
                        <a href="create-coupon.html">Create Coupon</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title link-nav"
                      href="taxes.html"
                    >
                      <i className="ri-price-tag-3-line" />
                      <span>Tax</span>
                    </a>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title link-nav"
                      href="product-review.html"
                    >
                      <i className="ri-star-line" />
                      <span>Product Review</span>
                    </a>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title link-nav"
                      href="support-ticket.html"
                    >
                      <i className="ri-phone-line" />
                      <span>Support Ticket</span>
                    </a>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="linear-icon-link sidebar-link sidebar-title"
                      href="javascript:void(0)"
                    >
                      <i className="ri-settings-line" />
                      <span>Settings</span>
                    </a>
                    <ul className="sidebar-submenu">
                      <li>
                        <a href="profile-setting.html">Profile Setting</a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title link-nav"
                      href="reports.html"
                    >
                      <i className="ri-file-chart-line" />
                      <span>Reports</span>
                    </a>
                  </li>
                  <li className="sidebar-list">
                    <a
                      className="sidebar-link sidebar-title link-nav"
                      href="list-page.html"
                    >
                      <i className="ri-list-check" />
                      <span>List Page</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right-arrow" id="right-arrow">
                <i data-feather="arrow-right" />
              </div>
            </nav>
          </div>
        </div>
        {/* Page Sidebar Ends*/}
        {/* index body start */}
        <div className="page-body">
          <div className="container-fluid">
            <div className="row">
              {/* chart caard section start */}
              <div className="col-sm-6 col-xxl-3 col-lg-6">
                <div className="main-tiles border-5 border-0  card-hover card o-hidden">
                  <div className="custome-1-bg b-r-4 card-body">
                    <div className="media align-items-center static-top-widget">
                      <div className="media-body p-0">
                        <span className="m-0">Total Revenue</span>
                        <h4 className="mb-0 counter">
                          $6659
                          <span className="badge badge-light-primary grow">
                            <i data-feather="trending-up" />
                            8.5%
                          </span>
                        </h4>
                      </div>
                      <div className="align-self-center text-center">
                        <i className="ri-database-2-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3 col-lg-6">
                <div className="main-tiles border-5 card-hover border-0 card o-hidden">
                  <div className="custome-2-bg b-r-4 card-body">
                    <div className="media static-top-widget">
                      <div className="media-body p-0">
                        <span className="m-0">Total Orders</span>
                        <h4 className="mb-0 counter">
                          9856
                          <span className="badge badge-light-danger grow">
                            <i data-feather="trending-down" />
                            8.5%
                          </span>
                        </h4>
                      </div>
                      <div className="align-self-center text-center">
                        <i className="ri-shopping-bag-3-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3 col-lg-6">
                <div className="main-tiles border-5 card-hover border-0  card o-hidden">
                  <div className="custome-3-bg b-r-4 card-body">
                    <div className="media static-top-widget">
                      <div className="media-body p-0">
                        <span className="m-0">Total Products</span>
                        <h4 className="mb-0 counter">
                          893
                          <a
                            href="add-new-product.html"
                            className="badge badge-light-secondary grow"
                          >
                            ADD NEW
                          </a>
                        </h4>
                      </div>
                      <div className="align-self-center text-center">
                        <i className="ri-chat-3-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3 col-lg-6">
                <div className="main-tiles border-5 card-hover border-0 card o-hidden">
                  <div className="custome-4-bg b-r-4 card-body">
                    <div className="media static-top-widget">
                      <div className="media-body p-0">
                        <span className="m-0">Total Customers</span>
                        <h4 className="mb-0 counter">
                          4.6k
                          <span className="badge badge-light-success grow">
                            <i data-feather="trending-down" />
                            8.5%
                          </span>
                        </h4>
                      </div>
                      <div className="align-self-center text-center">
                        <i className="ri-user-add-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card o-hidden card-hover">
                  <div className="card-header border-0 pb-1">
                    <div className="card-header-title p-0">
                      <h4>Category</h4>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="category-slider no-arrow">
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/vegetable.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Vegetables &amp; Fruit</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/cup.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Beverages</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/meats.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Meats &amp; Seafood</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/breakfast.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Breakfast</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/frozen.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Frozen Foods</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/milk.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Milk &amp; Dairies</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/pet.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Pet Food</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/vegetable.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Vegetables &amp; Fruit</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/cup.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Beverages</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/meats.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Meats &amp; Seafood</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/breakfast.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Breakfast</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/frozen.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Frozen Foods</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/milk.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Milk &amp; Dairies</h6>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="dashboard-category">
                          <a
                            href="javascript:void(0)"
                            className="category-image"
                          >
                            <img
                              src="/dashboard/assets/svg/pet.svg"
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="category-name"
                          >
                            <h6>Pet Food</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* chart card section End */}
              {/* Earning chart star*/}
              <div className="col-xl-6">
                <div className="card o-hidden card-hover">
                  <div className="card-header border-0 pb-1">
                    <div className="card-header-title">
                      <h4>Revenue Report</h4>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div id="report-chart" />
                  </div>
                </div>
              </div>
              {/* Earning chart  end*/}
              {/* Best Selling Product Start */}
              <div className="col-xl-6 col-md-12">
                <div className="card o-hidden card-hover">
                  <div className="card-header card-header-top card-header--2 px-0 pt-0">
                    <div className="card-header-title">
                      <h4>Best Selling Product</h4>
                    </div>
                    <div className="best-selling-box d-sm-flex d-none">
                      <span>Short By:</span>
                      <div className="dropdown">
                        <button
                          className="btn p-0 dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="true"
                        >
                          Today
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div>
                      <div className="table-responsive">
                        <table
                          className="best-selling-table w-image
                            w-image
                            w-image table border-0"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <div className="best-product-box">
                                  <div className="product-image">
                                    <img
                                      src="/dashboard/assets/images/product/1.png"
                                      className="img-fluid"
                                      alt="Product"
                                    />
                                  </div>
                                  <div className="product-name">
                                    <h5>Aata Buscuit</h5>
                                    <h6>26-08-2022</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Price</h6>
                                  <h5>$29.00</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Orders</h6>
                                  <h5>62</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Stock</h6>
                                  <h5>510</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Amount</h6>
                                  <h5>$1,798</h5>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="best-product-box">
                                  <div className="product-image">
                                    <img
                                      src="/dashboard/assets/images/product/2.png"
                                      className="img-fluid"
                                      alt="Product"
                                    />
                                  </div>
                                  <div className="product-name">
                                    <h5>Aata Buscuit</h5>
                                    <h6>26-08-2022</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Price</h6>
                                  <h5>$29.00</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Orders</h6>
                                  <h5>62</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Stock</h6>
                                  <h5>510</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Amount</h6>
                                  <h5>$1,798</h5>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="best-product-box">
                                  <div className="product-image">
                                    <img
                                      src="/dashboard/assets/images/product/3.png"
                                      className="img-fluid"
                                      alt="Product"
                                    />
                                  </div>
                                  <div className="product-name">
                                    <h5>Aata Buscuit</h5>
                                    <h6>26-08-2022</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Price</h6>
                                  <h5>$29.00</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Orders</h6>
                                  <h5>62</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Stock</h6>
                                  <h5>510</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Amount</h6>
                                  <h5>$1,798</h5>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Best Selling Product End */}
              {/* Recent orders start*/}
              <div className="col-xl-6">
                <div className="card o-hidden card-hover">
                  <div className="card-header card-header-top card-header--2 px-0 pt-0">
                    <div className="card-header-title">
                      <h4>Recent Orders</h4>
                    </div>
                    <div className="best-selling-box d-sm-flex d-none">
                      <span>Short By:</span>
                      <div className="dropdown">
                        <button
                          className="btn p-0 dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="true"
                        >
                          Today
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div>
                      <div className="table-responsive">
                        <table className="best-selling-table table border-0">
                          <tbody>
                            <tr>
                              <td>
                                <div className="best-product-box">
                                  <div className="product-name">
                                    <h5>Aata Buscuit</h5>
                                    <h6>#64548</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Date Placed</h6>
                                  <h5>5/1/22</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Price</h6>
                                  <h5>$250.00</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Order Status</h6>
                                  <h5>Completed</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Payment</h6>
                                  <h5 className="text-danger">Unpaid</h5>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="best-product-box">
                                  <div className="product-name">
                                    <h5>Aata Buscuit</h5>
                                    <h6>26-08-2022</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Date Placed</h6>
                                  <h5>5/1/22</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Price</h6>
                                  <h5>$250.00</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Order Status</h6>
                                  <h5>Completed</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Payment</h6>
                                  <h5 className="theme-color">Paid</h5>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="best-product-box">
                                  <div className="product-name">
                                    <h5>Aata Buscuit</h5>
                                    <h6>26-08-2022</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Date Placed</h6>
                                  <h5>5/1/22</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Price</h6>
                                  <h5>$250.00</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Order Status</h6>
                                  <h5>Completed</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Payment</h6>
                                  <h5 className="theme-color">Paid</h5>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="best-product-box">
                                  <div className="product-name">
                                    <h5>Aata Buscuit</h5>
                                    <h6>26-08-2022</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Date Placed</h6>
                                  <h5>5/1/22</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Price</h6>
                                  <h5>$250.00</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Order Status</h6>
                                  <h5>Completed</h5>
                                </div>
                              </td>
                              <td>
                                <div className="product-detail-box">
                                  <h6>Payment</h6>
                                  <h5 className="theme-color">Paid</h5>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Recent orders end*/}
              {/* Earning chart star*/}
              <div className="col-xl-6">
                <div className="card o-hidden card-hover">
                  <div className="card-header border-0 mb-0">
                    <div className="card-header-title">
                      <h4>Earning</h4>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div id="bar-chart-earning" />
                  </div>
                </div>
              </div>
              {/* Earning chart end*/}
              {/* Transactions start*/}
              <div className="col-xxl-4 col-md-6">
                <div className="card o-hidden card-hover">
                  <div className="card-header border-0">
                    <div className="card-header-title">
                      <h4>Transactions</h4>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div>
                      <div className="table-responsive">
                        <table className="user-table transactions-table table border-0">
                          <tbody>
                            <tr>
                              <td>
                                <div className="transactions-icon">
                                  <i className="ri-shield-line" />
                                </div>
                                <div className="transactions-name">
                                  <h6>Wallets</h6>
                                  <p>Starbucks</p>
                                </div>
                              </td>
                              <td className="lost">-$74</td>
                            </tr>
                            <tr>
                              <td className="td-color-1">
                                <div className="transactions-icon">
                                  <i className="ri-check-line" />
                                </div>
                                <div className="transactions-name">
                                  <h6>Bank Transfer</h6>
                                  <p>Add Money</p>
                                </div>
                              </td>
                              <td className="success">+$125</td>
                            </tr>
                            <tr>
                              <td className="td-color-2">
                                <div className="transactions-icon">
                                  <i className="ri-exchange-dollar-line" />
                                </div>
                                <div className="transactions-name">
                                  <h6>Paypal</h6>
                                  <p>Add Money</p>
                                </div>
                              </td>
                              <td className="lost">-$50</td>
                            </tr>
                            <tr>
                              <td className="td-color-3">
                                <div className="transactions-icon">
                                  <i className="ri-bank-card-line" />
                                </div>
                                <div className="transactions-name">
                                  <h6>Mastercard</h6>
                                  <p>Ordered Food</p>
                                </div>
                              </td>
                              <td className="lost">-$40</td>
                            </tr>
                            <tr>
                              <td className="td-color-4 pb-0">
                                <div className="transactions-icon">
                                  <i className="ri-bar-chart-grouped-line" />
                                </div>
                                <div className="transactions-name">
                                  <h6>Transfer</h6>
                                  <p>Refund</p>
                                </div>
                              </td>
                              <td className="success pb-0">+$90</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Transactions end*/}
              {/* visitors chart start*/}
              <div className="col-xxl-4 col-md-6">
                <div className="h-100">
                  <div className="card o-hidden card-hover">
                    <div className="card-header border-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="card-header-title">
                          <h4>Visitors</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <div className="pie-chart">
                        <div id="pie-chart-visitors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* visitors chart end*/}
              {/* To Do List start*/}
              <div className="col-xxl-4 col-md-6">
                <div className="card o-hidden card-hover">
                  <div className="card-header border-0">
                    <div className="card-header-title">
                      <h4>To Do List</h4>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <ul className="to-do-list">
                      <li className="to-do-item">
                        <div className="form-check user-checkbox">
                          <input
                            className="checkbox_animated check-it"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                          />
                        </div>
                        <div className="to-do-list-name">
                          <strong>Pick up kids from school</strong>
                          <p>8 Hours</p>
                        </div>
                      </li>
                      <li className="to-do-item">
                        <div className="form-check user-checkbox">
                          <input
                            className="checkbox_animated check-it"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault1"
                          />
                        </div>
                        <div className="to-do-list-name">
                          <strong>Prepare or presentation.</strong>
                          <p>8 Hours</p>
                        </div>
                      </li>
                      <li className="to-do-item">
                        <div className="form-check user-checkbox">
                          <input
                            className="checkbox_animated check-it"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault2"
                          />
                        </div>
                        <div className="to-do-list-name">
                          <strong>Create invoice</strong>
                          <p>8 Hours</p>
                        </div>
                      </li>
                      <li className="to-do-item">
                        <div className="form-check user-checkbox">
                          <input
                            className="checkbox_animated check-it"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault3"
                          />
                        </div>
                        <div className="to-do-list-name">
                          <strong>Meeting with Alisa</strong>
                          <p>8 Hours</p>
                        </div>
                      </li>
                      <li className="to-do-item">
                        <form className="row g-2">
                          <div className="col-8">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter Task Name"
                            />
                          </div>
                          <div className="col-4">
                            <button
                              type="submit"
                              className="btn btn-primary w-100 h-100"
                            >
                              Add task
                            </button>
                          </div>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* To Do List end*/}
            </div>
          </div>
          {/* Container-fluid Ends*/}
          {/* footer start*/}
          <div className="container-fluid">
            <footer className="footer">
              <div className="row">
                <div className="col-md-12 footer-copyright text-center">
                  <p className="mb-0">
                    Copyright 2022 © Fastkart theme by pixelstrap
                  </p>
                </div>
              </div>
            </footer>
          </div>
          {/* footer End*/}
        </div>
        {/* index body end */}
      </div>
    </React.Fragment>
  );
};

export default DashboardPage;
