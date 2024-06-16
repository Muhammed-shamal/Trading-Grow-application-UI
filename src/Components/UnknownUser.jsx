import React, { useEffect, useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import grow_logo_light from "/groww-logo-light.svg";
import grow_logo_dark from "/groww-logo-dark.svg";

export default function UnKnowNavbar() {
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
            {/* d-flex justify-content-center align-self-center  */}
            {/* <div className="search-bar flex-grow-1 mx-5">
              <form role="search">
                <input
                  className="form-control w-50"
                  type="search"
                  placeholder="What are you looking for today?"
                  aria-label="Search"
                  autoComplete="off"
                />
              </form>
            </div> */}
            <div className="d-flex align-items-center justify-content-center">
              <div className="search-bar">
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
            <div className="">
              <button
                className="btn btn-success"
                style={{ background: "#00b386" }}
              >
                Login/Register
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
