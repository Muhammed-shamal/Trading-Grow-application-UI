import React from "react";
import "./style.css";

export default function UserCart() {
  return (
    <div className="">
      <div className="row">
        <div className="col-12">
          <main className="p-5 text-center">
            <div className="error-code">
              <div className="m-3 mb-3">
                <div
                  className="mt-5 mb-4"
                  style={{
                    fontWeight: "500",
                    fontSize: "30px",
                    letterSpacing: ".5px",
                    color: "#44475b",
                  }}
                >
                  Oops! Something went wrong
                </div>
                <div
                  className="m-2"
                  style={{
                    color: "#7c7e8c",
                    fontSize: "25px",
                    margin: "50px 0",
                  }}
                >
                  Please contact{" "}
                  <a
                    href="https://groww.in/p/contact-us/"
                    style={{ color: "#5367ff" }}
                  >
                    Groww support{" "}
                  </a>{" "}
                  for proceeding
                </div>
              </div>
              <div className="errorImg">
                <picture>
                  <img
                    style={{ width: "350px", height: "275px" }}
                    src={"/cart-warning.04e15e47.svg"}
                    alt="error-img"
                  />
                </picture>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
