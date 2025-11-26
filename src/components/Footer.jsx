import React from "react";

function Footer() {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: "#f4ede5", color: "#000" }}>
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-md-4">
            <p>Contact Us</p>
          </div>

          <div className="col-md-4">
            <h2 style={{ fontFamily: "serif", letterSpacing: "2px" }}>
              IVORY <br />
              <small style={{ fontSize: "14px", letterSpacing: "4px" }}>FILMS</small>
            </h2>
          </div>

          <div className="col-md-4">
            <i className="bi bi-instagram"></i>
            <p className="mb-0 mt-2">+91 9737188899</p>
            <p>hello@ivoryfilms.in</p>
          </div>
        </div>

        <hr />
        <p className="mb-1">COPYRIGHTS © 2025, IVORYFILMS.IN, ALL RIGHTS RESERVED.</p>
        <p>Designed By ADRX</p>
      </div>
    </footer>
  );
}

export default Footer;
