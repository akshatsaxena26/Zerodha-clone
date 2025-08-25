import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p className="text-muted">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p className="fw-bold">Company</p>
            <a href="" className="text-muted text-decoration-none">About</a><br />
            <a href="" className="text-muted text-decoration-none">Products</a><br />
            <a href="" className="text-muted text-decoration-none">Pricing</a><br />
            <a href="" className="text-muted text-decoration-none">Referral programme</a><br />
            <a href="" className="text-muted text-decoration-none">Careers</a><br />
            <a href="" className="text-muted text-decoration-none">Zerodha.tech</a><br />
            <a href="" className="text-muted text-decoration-none">Press & media</a><br />
            <a href="" className="text-muted text-decoration-none">Zerodha cares (CSR)</a><br />
          </div>
          <div className="col">
            <p className="fw-bold">Support</p>
            <a href="" className="text-muted text-decoration-none">Contact</a><br />
            <a href="" className="text-muted text-decoration-none">Support portal</a><br />
            <a href="" className="text-muted text-decoration-none">Z-Connect blog</a><br />
            <a href="" className="text-muted text-decoration-none">List of charges</a><br />
            <a href="" className="text-muted text-decoration-none">Downloads & resources</a><br />
          </div>
          <div className="col">
            <p className="fw-bold">Account</p>
            <a href="" className="text-muted text-decoration-none">Open an account</a><br />
            <a href="" className="text-muted text-decoration-none">Fund transfer</a><br />
            <a href="" className="text-muted text-decoration-none">60 day challenge</a><br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India...
          </p>
          {/* Baaki paragraphs same hi rahenge */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
