import React, { useState } from "react";
import "../Pages/style.css";
import { Link } from "react-router-dom";
import StockSection from "../Pages/Explore-stock-section";

export default function BellowNav() {
  //here am set the itemName , means acive as 'stock' default;
  const [itemActive, setActiveItem] = useState("Stock");
  const path = window.location.href;// getting the current page path;

  return (
    <section className="p-3">
      <div className="d-flex">
        <Link to={"/stockSection"}>
          {" "}
          <span
            style={{
              cursor: "pointer",
              padding: "2px",
            }}
            className={`${itemActive === "Stock" ? "active" : ""}`}
            onClick={() => setActiveItem("Stock")}
          >
            Stocks
          </span>
        </Link>

        <Link to={"/mutalfunds"}>
          <span
            className={`${itemActive === "Mutual" ? "active" : ""} mx-5`}
            style={{
              cursor: "pointer",
              padding: "2px",
            }}

            //#00b386
            
            onClick={() => setActiveItem("Mutual")}
          >
            Mutual Funds
          </span>
        </Link>
      </div>
      <div>
        <hr
          style={{
            borderTop: "3px solid #00b386",
            cursor: "pointer",
            padding: "2px",
          }}
        />
      </div>
      {/* {path === "http://localhost:5173" && (
          <StockSection />
        )} */}
    </section>
  );
}
