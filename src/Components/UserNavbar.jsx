import React, { useEffect, useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import "./UserNavbar.css";
import grow_logo_light from "/groww-logo-light.svg";
import grow_logo_dark from "/groww-logo-dark.svg";
import emptyNotification from "/empty-notifications.f19d07ab.svg";
import BellowNav from "./UserBanner";

export default function UserNavbar() {
  const [userClr, setUserClr] = useState(0);
  const color = ["red", "green", "blue", "orange", "yellow", "violet"];
  const randomClr = Math.floor(Math.random() * color.length);
  const [isActive, setIsActive] = useState("Explore");

  const style = {
    minWidth: "150px",
    minHeight: "79px",
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  const style2 = {
    minHeight: "79px",
    cursor: "pointer",
    flexDirection: "row-reverse",
  };

  useEffect(() => {
    setUserClr(color[randomClr]);
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="/" className="navbar-brand" aria-current="page">
              <img
                src={grow_logo_light}
                alt="logo"
                width={"150"}
                height={"50"}
              />
            </a>{" "}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              {/* <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to={"/stocks/user/explore"}
                    className={"nav-link"}
                    style={isActive === "Explore" ? { color: "00b386" } : ""}
                    onClick={() => {
                      setIsActive("Explore");
                    }}
                  >
                    Explore
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/stocks/user/investments"}
                    className="nav-link"
                    style={
                      isActive === "Investments" ? { color: "00b386" } : ""
                    }
                    onClick={() => {
                      setIsActive("Investments");
                    }}
                  >
                    Investments
                  </NavLink>
                </li>
              </ul> */}
              <div className="search-bar flex-grow-1 mx-5">
                <form role="search">
                  <input
                    className="form-control w-100"
                    type="search"
                    placeholder="What are you looking for today?"
                    aria-label="Search"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
            <div className="navbar-collapse collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-regular fa-bell"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a href="#" className="dropdown-item">
                        <img
                          src={"/empty-notifications.f19d07ab.svg"}
                          className="circle"
                          alt=""
                        />
                        <div className="empty-msg">You're All Caught Up</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/user/balance/inr" className="nav-link">
                    <i className="fa-solid fa-wallet"></i>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/user/cart" className="nav-link">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: `${userClr}` }}
                    ></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item">
                        <i className="fa-solid fa-user"></i>
                        <h6>Username</h6>
                        <small>emailaddress@gmail.com</small>
                      </a>
                    </li>

                    <hr />

                    <li>
                      <a href="#" className="dropdown-item">
                        <i className="fa-solid fa-building-columns"></i>
                        <small>Bank & AutoPay</small>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown-item">
                        <i className="fa-regular fa-bookmark"></i>
                        <small>Watchlist</small>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown-item">
                        <i className="fa-solid fa-clipboard-list"></i>
                        <small>Orders</small>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown-item">
                        <i className="fa-solid fa-phone"></i>
                        <small>Customer Support 24*7</small>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown-item">
                        <i className="fa-solid fa-gear"></i>
                        <small>Settings</small>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="dropdown-item">
                        <div className="justify-">
                          <i className="fa-solid fa-moon"></i>
                          <small> Darkmode</small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <BellowNav />
        <div>
          <Outlet />
        </div>
      </header>
      {/* <UserBanner /> */}
    </>
  );
}
