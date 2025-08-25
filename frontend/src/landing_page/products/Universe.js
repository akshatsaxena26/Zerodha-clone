import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" style={{ height: "40px" }} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        {/* Streak */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="Streak" style={{ height: "40px" }} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>

        {/* Sensibull */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={{ height: "40px" }} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        {/* Zerodha Fund House */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundHouse.png" alt="Zerodha Fund House" style={{ height: "40px" }} />
          <p className="text-small text-muted">Asset management</p>
        </div>

        {/* GoldenPi */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="GoldenPi" style={{ height: "40px" }} />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>

        {/* Ditto */}
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="Ditto" style={{ height: "40px" }} />
          <p className="text-small text-muted">Insurance</p>
        </div>

        {/* Signup Button */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;
