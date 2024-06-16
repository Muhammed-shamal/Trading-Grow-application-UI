import React, { useEffect, useState } from "react";
import "./unknown.css";

export default function UnknownUserBanner() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="body-part">
        <div className="homeHero_heading">
          <span
            style={{
              animation: `${show ? "fadeIn" : "fadeOut"} 2s`,
            }}
          >
            All things finance, <br /> right here.
          </span>
        </div>
        <div>
          <span className="homeHero_subHeading">
            Built for a growwing India.
          </span>
        </div>
        <div>
          <button
            className="mt-2 btn btn-success"
            style={{ background: "#00b386" }}
          >
            Get started
          </button>
        </div>

        <div className="center-img">
          <img
            style={{ width: "1000px" }}
            src="/cityScapeImage1.7be26e20 (2).webp"
            alt="welcomeImg"
          />
        </div>
      </div>
    </div>
  );
}
