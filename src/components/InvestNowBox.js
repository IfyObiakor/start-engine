import React from "react";

function InvestNowBox() {
  return (
    <div className="invest-now_box">
      <div className="button-box">
        <button>
          <h4>Invest Now</h4>
          <p>US$3.95 Per Share</p>
        </button>
      </div>
      <div className="p-7">
        <div className="mb-4">
          <h5>PREVIOUSLY CROWDFUNDED</h5>
          <h6>US$5,725,164.96</h6>
        </div>
        <div className="invest-box-grid">
          <div>
            <h5>RAISED</h5>
            <h6>US$3,223,307.86</h6>
          </div>
          <div>
            <h5>INVESTORS</h5>
            <h6>4,332</h6>
          </div>
          <div>
            <h5>MIN INVEST</h5>
            <h6>US$244.90</h6>
          </div>
          <div>
            <h5>VALUATION</h5>
            <h6>$84.93M</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestNowBox;
