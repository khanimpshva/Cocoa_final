import { FaBars, FaRegHeart } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconContext } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import NavList from "./NavList";
import { clearErrors, getProduct } from "../../../actions/productAction";
import { useAlert } from "react-alert";
const Navbar = () => {
  let location = useLocation();

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);
  function goCartHandle() {
    navigate("/cart");
  }

  const SidebarNav = styled.nav`
    background-color: #703f07;

    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 999;
  `;

  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <div>
        <div
          // className=
          className={header}
          style={{
            background:
              useLocation().pathname !== "/" ? "#703f07" : "transparent",
          }}
        >
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-1 col-12 col-md-5">
                <div className="nav-logo">
                  <Link to="/" className="navbar-logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/logo.png?v=1646113303"
                      alt="cocoa"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-1 col-1">
                <div className="nav-menu">
                  <ul className="menu ">
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/">Branded Foods</Link>
                      <ul className="sub-menu">
                        <div className="row">
                          <li className="col-lg-7">
                            <ul className="row justify-content-between">
                              <li className="col-lg-4">
                                <Link to="/">
                                  <h4>Dark Chocolates</h4>
                                </Link>
                              </li>
                              <li className="col-lg-4">
                                <Link to="/">
                                  <h4>Milk chocalates</h4>
                                </Link>
                              </li>
                              <li className="col-lg-4">
                                <Link to="/">
                                  <h4>Nutty Chocalate</h4>
                                </Link>
                              </li>
                            </ul>

                            <div className="row">
                              {products &&
                                products.map((product) => (
                                  <li className="col-lg-4">
                                    <Link to={`/product/${product._id}`}>
                                      {product.name}
                                    </Link>
                                  </li>
                                ))}
                            </div>
                          </li>
                          <li className="col-lg-2">
                            <div className="branded-image nav-image-links-image">
                              <img
                                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/home-gallery-03_3c91f85c-6087-4af7-a9cc-7779f702be6a.jpg?v=1646123111"
                                alt="branded foods"
                              />

                              <div className="nav-image-links">
                                <Link to="/" className="nav-image-links-test">
                                  Test
                                </Link>
                                <Link to="/" className="nav-image-links-hidden">
                                  Click here
                                </Link>
                              </div>
                            </div>
                          </li>

                          <li className="col-lg-3">
                            <div className="branded-image">
                              <img
                                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/home-gallery-02_c650d103-4289-4656-9d8f-672c22cf755f.jpg?v=1646123268"
                                alt="branded foods"
                              />
                            </div>
                          </li>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <Link to="/">Chocalate</Link>
                      <ul className="sub-menu">
                        <div className="row">
                          <li className="col-lg-4">
                            <div className="branded-image">
                              <img src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/meha1.jpg?v=1646298005" />
                            </div>
                          </li>

                          <li className="col-lg-7">
                            <ul className="row justify-content-between">
                              <li className="col-lg-4">
                                <Link to="/">
                                  <h4>Elite Chocolates</h4>
                                </Link>
                              </li>
                              <li className="col-lg-4">
                                <Link to="/">
                                  <h4>Divine chocalates</h4>
                                </Link>
                              </li>
                              <li className="col-lg-4">
                                <Link to="/">
                                  <h4>Coco Magic Fudge</h4>
                                </Link>
                              </li>
                            </ul>

                            <div className="row">
                              {products &&
                                products.map((product) => (
                                  <li className="col-lg-4">
                                    <Link to={`/product/${product._id}`}>
                                      {product.name}
                                    </Link>
                                  </li>
                                ))}
                            </div>
                          </li>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <Link to="/">Gift Boxes</Link>
                      <ul className="sub-menu gift-boxes">
                        <div className="d-flex">
                          <ul>
                            <li>
                              <img
                                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/home-gallery-06_1.jpg?v=1646123303"
                                alt=""
                              />
                            </li>
                          </ul>

                          <ul>
                            <li>
                              <img
                                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/home-gallery-05_1.jpg?v=1646123198"
                                alt=""
                              />
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/home-gallery-07_656ee781-8088-4cfd-b53a-cd67db14db21.jpg?v=1646123047"
                                alt=""
                              />
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/home-gallery-01_697c1aff-591c-4116-b696-825f2bb72821.jpg?v=1613238263"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </li>

                    <li>
                      <Link to="/">Pages</Link>
                      <ul className="sub-menu pages-sub-menu">
                        <li>
                          <Link to="pages/aboutus">About us</Link>
                        </li>
                        <li>
                          <Link to="pages/services">Services</Link>
                        </li>
                        <li>
                          <Link to="pages/faq">FAQ</Link>
                        </li>
                        <li>
                          <Link to="pages/news">News</Link>
                        </li>
                        <li>
                          <Link to="pages/contactus">Contact us</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/newcollection">New Collection</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-12 col-md-6">
                <div className="nav-right-links">
                  <div className="d-flex align-items-center ">
                    <ul className="d-flex align-items-center ">
                      <li className="nav-mobile">
                        <FaBars onClick={showSidebar} />
                        <span>Menu</span>
                      </li>
                      <li>
                        <span>
                          <Link to="/wishlist">
                            {" "}
                            <FavoriteBorderOutlinedIcon />
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <ShoppingCartIcon onClick={goCartHandle} />
                        </span>
                      </li>
                      <li>
                        <Link to="/login">
                          {" "}
                          <FaAlignRight />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IconContext.Provider value={{ color: "#fff" }}>
          <SidebarNav sidebar={sidebar}>
            <div className="slidebar-wrap">
              <div className="nav-mobile">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </div>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </div>
          </SidebarNav>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Navbar;