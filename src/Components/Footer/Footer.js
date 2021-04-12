import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">AUROS</h5>
              <p>
                Here at Auros, you can find awesome stuff at affordable prices.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Living Room</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/product/lamp">Lamp</Link>
                </li>
                <li>
                  <Link to="/product/blackChair">Black Chair</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Kitchen</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/product/table">Dinner Table</Link>
                </li>
                <li>
                  <Link to="/product/chairs">Dining Chairs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <Link to="/"> Auros.com</Link>
        </div>
      </footer>
    </div>
  );
}
