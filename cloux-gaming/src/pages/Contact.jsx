import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <nav className="navbar custom-navbar">
        <div className="navbar-wrapper">
          <h4 className="logo">CLOUX GAMING</h4>

          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/forums">Forums</Link>
            </li>
            <li>
              <Link to="/esport">eSport</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <Link to="/about" className="login-btn">
            ABOUT
          </Link>
        </div>
      </nav>

      <div style={{ width: "100%", height: "350px" }}>
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div style={{ background: "#f5f5f5", padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="row g-3">
                <div className="col-md-6">
                  <input className="form-control" placeholder="Name" />
                </div>

                <div className="col-md-6">
                  <input className="form-control" placeholder="Email Address" />
                </div>

                <div className="col-md-6">
                  <input className="form-control" placeholder="Phone Number" />
                </div>

                <div className="col-md-6">
                  <input className="form-control" placeholder="Subject" />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    style={{
                      background: "#f5a100",
                      color: "#fff",
                      border: "none",
                      padding: "10px 25px",
                      fontWeight: "600",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div style={{ paddingLeft: "20px" }}>
                <p>
                  <i className="bi bi-geo-alt" style={{ color: "#f5a100" }}></i>{" "}
                  Walking Street, Los Angeles, California, USA
                </p>

                <p>
                  <i
                    className="bi bi-envelope"
                    style={{ color: "#f5a100" }}
                  ></i>{" "}
                  info@cloux.com
                </p>

                <p>
                  <i
                    className="bi bi-telephone"
                    style={{ color: "#f5a100" }}
                  ></i>{" "}
                  0674 987 66 59
                </p>

                <p>
                  <i className="bi bi-printer" style={{ color: "#f5a100" }}></i>{" "}
                  1923 236 12 96
                </p>

                <p style={{ marginTop: "20px", color: "#555" }}>
                  Lorem ipsum dolor sit amet, voluptua iracundia disputationi an
                  pri, his utinam principes dignissim ad. Ne nec dolore oblique
                  nusquam, cu luptatum delicatissimi has.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter mt-5">
        <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
          <h4>NEWSLETTER</h4>

          <input type="email" placeholder="Your email address" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />

          <button className="submit-btn">SUBMIT</button>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5>
                ABOUT <span>US</span>
              </h5>
              <p>
                Unlock exclusive gear, rare skins, and powerful upgrades.
                Enhance your gaming experience with premium items.
              </p>

              <div className="footer-links">
                <ul>
                  <li>Home</li>
                  <li>Blog</li>
                  <li>Team</li>
                  <li>eSport</li>
                </ul>

                <ul>
                  <li>Games</li>
                  <li>About</li>
                  <li>Community</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <h5>
                LATEST <span>NEWS</span>
              </h5>

              <div className="news-item">
                <img
                  src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d"
                  alt=""
                />
                <div>
                  <p>About Space and World</p>
                  <span>January 2, 2018</span>
                </div>
              </div>

              <div className="news-item">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt=""
                />
                <div>
                  <p>New Trailer is Released!</p>
                  <span>January 2, 2018</span>
                </div>
              </div>

              <div className="news-item">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt=""
                />
                <div>
                  <p>Price List of the Games</p>
                  <span>January 2, 2018</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <h5>
                APPS <span>& PLATFORMS</span>
              </h5>

              <div className="apps-grid">
                <div className="app-box">Apple Store</div>
                <div className="app-box">Google Play</div>
                <div className="app-box">Steam</div>
                <div className="app-box">Windows</div>
                <div className="app-box">Amazon</div>
                <div className="app-box">PayPal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container d-flex justify-content-between flex-wrap">
            <p>Copyright © 2025 Cloux - All rights reserved.</p>

            <div className="bottom-links">
              <span>Home</span>
              <span>Help Center</span>
              <span>Contact</span>
              <span>Career</span>
              <span>Advertise</span>
              <span>Terms and Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
