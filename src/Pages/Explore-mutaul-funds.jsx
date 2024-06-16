import React from "react";
import "./stock.css";

export default function ExploreMutalFunds() {
  return (
    <div>
      <div className="row">
        <div className="col-10">
          <div
            style={{ marginTop: "3em" }}
            className="d-flex justify-content-between"
          >
            <h6
              style={{
                color: "#44475b",
                fontWeight: "535",
                fontSize: "1.25rem",
                lineHeight: "1.25rem",
              }}
            >
              Popular Funds
            </h6>

            <span>
              <i className="fa-solid fa-filter product-tools"></i>
              <small>SCREENER</small>
            </span>
          </div>

          <div className="row p-3">
            <div className="col-2">
              <div className="itm1">
                <img
                  src="/escorts_groww.webp"
                  alt="relaince icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <small className="name ">
                    Quant Small Cap Fund Direct Plan...
                  </small>
                </div>
                <div className="mt-3">
                  <span className="price me-2">₹23.95</span>
                </div>
                <span style={{ color: "#0abb92", fontWeight: "535" }}>
                  0.70 (3.10%)
                </span>
              </div>
            </div>

            <div className="col-2">
              <div className="itm1">
                <img
                  src="/icici_groww.webp"
                  alt="tata icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <small className="name ">
                    ICICI Prudential Commodities Fu..
                  </small>
                </div>
                <div className="mt-3">
                  <span className="price me-2">₹323.55</span>
                </div>
                <span style={{ color: "#eb5b3c", fontWeight: "535" }}>
                  -2.25 (0.10%)
                </span>
              </div>
            </div>

            <div className="col-2">
              <div className="itm1">
                <img
                  src="/ppfas_groww.webp"
                  alt="adani icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <small className="name ">Parag Parikh Flexi Cap...</small>
                </div>
                <div className="mt-3">
                  <span className="price me-2">₹1,156.80</span>
                </div>
                <span style={{ color: "#0abb92", fontWeight: "535" }}>
                  -1.80 (0.2%)
                </span>
              </div>
            </div>

            <div className="col-2">
              <div className="itm1">
                <img
                  src="/icici_groww.webp"
                  alt="adani icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <small className="name ">
                    ICICI Prudential Bluechip Fu..
                  </small>
                </div>
                <div className="mt-3">
                  <span className="price me-2">₹1,356.80</span>
                </div>
                <span style={{ color: "#0abb92", fontWeight: "535" }}>
                  -3.80 (0.12%)
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3em" }}>
            <h6
              style={{
                color: "#44475b",
                fontWeight: "535",
                fontSize: "1.25rem",
                lineHeight: "1.25rem",
              }}
            >
              Collections
            </h6>
          </div>

          <div className="row p-3">
            <div className="col-2">
              <div className="itm">
                <i className="fa-solid fa-clock product-tools"></i>
                <div>
                  <span className="product-text">F&Q</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="itm">
                <i className="fa-regular fa-calendar-days product-tools"></i>
                <div>
                  <span className="product-text">Events</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="itm">
              <i className="fa-solid fa-piggy-bank"></i>
                <div>
                  <span className="product-text">Tax Saving</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="itm">
              <i className="fa-solid fa-tower-observation"></i>
                <div>
                  <span className="product-text">Large Cap</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="itm">
              <i className="fa-solid fa-building"></i>
                <div>
                  <span className="product-text">Mid Cap</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="itm">
              <i className="fa-solid fa-store"></i>
                <div>
                  <span className="product-text">Small Cap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
