import React from "react";
import "./style.css";

export default function InrBalancePage() {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-12">
          <div className="mb-0">
            <span
              style={{ borderBottom: "3px solid #00b386", cursor: "pointer" }}
            >
              INR Balance
            </span>
          </div>
          <div>
            <hr style={{ maxWidth: "1500px", width: "100%" }} />
          </div>
          <main className="text-center">
            <div className="error-code">
              <div className="errorImg">
                <picture>
                  <img
                    style={{ width: "300px", height: "243px" }}
                    src={"/non_onboarded_wallet.11dfb63f.svg"}
                    alt="error-img"
                  />
                </picture>
              </div>

              <div className="m-3 mb-3">
                <div className="m-2">Invest faster with Groww Balance</div>
                <div className="m-2">
                  No bank login, no OTP, no waiting - Add money now!
                </div>
              </div>
              <div className="button-part">
                <button
                  style={{ background: "#00b386", border: "none" }}
                  className="btn btn-success btn-lg"
                >
                  START INVESTING
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
