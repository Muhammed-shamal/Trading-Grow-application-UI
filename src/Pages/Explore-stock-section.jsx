import React from "react";
import "./stock.css";

export default function ExploreStockSection() {
  return (
    <div>
      <div className="row p-2">
        <div className="col-10">
          <div>
            {" "}
            <span
              className="text-muted"
              style={{
                lineHeight: "1.25rem",
                fontSize: "0.875rem",
                fontWeight: "535",
              }}
            >
              MARKET OPENS IN 1 DAY
            </span>
          </div>
          {/* second row */}
          <div
            style={{ marginTop: "1em" }}
            className="d-flex justify-content-between"
          >
            <h6
              style={{
                fontWeight: "535",
                fontSize: "1.25rem",
                lineHeight: "1.25rem",
                color: "#44475b",
              }}
            >
              Index
            </h6>

            <span style={{ color: "#0abb92" }}>All indices</span>
          </div>

          <div className="row">
            <div className="col-3">
              <div className="itm1">
                <div>
                  <span className="name ">Nifty50</span>
                </div>
                <div>
                  <span className="price me-2">20,969.40</span>
                  <span style={{ color: "#0abb92", fontWeight: "535" }}>
                    +21.5
                  </span>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="itm1">
                <div>
                  <span className="name">Sensex</span>
                </div>
                <div>
                  <span className="price me-2">69,825.60</span>
                  <span style={{ color: "#0abb92", fontWeight: "535" }}>
                    +15.5
                  </span>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="itm1">
                <div>
                  <span className="name">BankNifty</span>
                </div>
                <div>
                  <span className="price me-2">47,262.00</span>
                  <span style={{ color: "#0abb92", fontWeight: "535" }}>
                    +1.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* third row */}

          <div style={{ marginTop: "3em" }}>
            <h6
              style={{
                color: "#44475b",
                fontWeight: "535",
                fontSize: "1.25rem",
                lineHeight: "1.25rem",
              }}
            >
              Most Brought on Groww
            </h6>
          </div>

          <div className="row">
            <div className="col-2">
              <div className="itm1">
                <img
                  src="/GSTK532939.webp"
                  alt="relaince icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <span className="name ">Relaince Power</span>
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
                  src="/GSTK500400.webp"
                  alt="tata icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <span className="name ">Tata Power</span>
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
                  src="/GSTK542066.webp"
                  alt="adani icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <span className="name ">Adani Total Gas</span>
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
                  src="/GSTK542066.webp"
                  alt="adani icon"
                  width={"35px"}
                  height={"auto"}
                />
                <div>
                  <span className="name ">Adani Energy Solut</span>
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

          {/* fourth row */}

          {/* third row */}

          <div style={{ marginTop: "3em" }}>
            <h6
              style={{
                color: "#44475b",
                fontWeight: "535",
                fontSize: "1.25rem",
                lineHeight: "1.25rem",
              }}
            >
              Product & tools
            </h6>
          </div>

          <div className="row">
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
                <i className="fa-solid fa-microphone product-tools"></i>
                <div>
                  <span className="product-text">IPO</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="itm">
                <i className="fa-solid fa-hourglass-end product-tools"></i>
                <div>
                  <span className="product-text">Intraday</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="itm">
                <i className="fa-solid fa-filter product-tools"></i>
                <div>
                  <span className="product-text">Screener</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
