import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function GamesPage() {
  const inputStyle = {
    width: "100%",
    padding: "15px",
    background: "transparent",
    border: "2px solid rgba(255,255,255,0.7)",
    color: "white",
    outline: "none",
  };

  const games = [
    {
      title: "SPACE WARS",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      platform: "STEAM, XBOX ONE",
      desc: "Engage in intergalactic battles.",
      tag: "ADVENTURE, FPS",
    },
    {
      title: "RETURN OF THE CARS",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      platform: "STEAM, UPLAY",
      desc: "Race through thrilling tracks.",
      tag: "RACING",
    },
    {
      title: "PLANES OF GLORIA",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
      platform: "UPLAY, XBOX ONE",
      desc: "Epic aerial combat.",
      tag: "SIMULATION",
    },
    {
      title: "EARTH WARS",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      platform: "ORIGIN",
      desc: "Global intense battles.",
      tag: "ADVENTURE",
    },
  ];

  return (
    <>
      <nav className="faq-header">
        <div className="navbar-wrapper">
          <h4 className="faq-logo">CLOUX GAMING</h4>

          <div className="nav-right">
            <div className="top-icons">
              <i className="bi bi-search"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitch"></i>
            </div>

            <ul className="faq-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
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
          </div>

          <div className="auth-btns">
            <button className="login">LOGIN</button>
            <button className="signup">SIGN UP</button>
          </div>
        </div>

        <div className="faq-title-wrapper">
          <h1 className="faq-title">Games</h1>
        </div>
      </nav>

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          padding: "80px 0",
        }}
      >
        <div style={{ background: "rgba(255,165,0,0.9)", padding: "50px 0" }}>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-3">
                <input placeholder="Keyword" style={inputStyle} />
              </div>

              <div className="col-md-3">
                <select style={inputStyle}>
                  <option>Category</option>
                </select>
              </div>

              <div className="col-md-3">
                <select style={inputStyle}>
                  <option>Platform</option>
                </select>
              </div>

              <div className="col-md-3">
                <select style={inputStyle}>
                  <option>Genre</option>
                </select>
              </div>

              <div className="col-md-3">
                <select style={inputStyle}>
                  <option>Company</option>
                </select>
              </div>

              <div className="col-md-3">
                <select style={inputStyle}>
                  <option>Language</option>
                </select>
              </div>

              <div className="col-md-3">
                <select style={inputStyle}>
                  <option>Order By</option>
                </select>
              </div>

              <div className="col-md-2">
                <select style={inputStyle}>
                  <option>Order Type</option>
                </select>
              </div>

              <div className="col-md-1 d-flex">
                <button
                  style={{
                    width: "100%",
                    background: "white",
                    color: "#f5a100",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#f5f5f5", padding: "50px 0" }}>
        <div className="container">
          <div className="row g-4">
            {games.map((game, i) => (
              <div className="col-md-3" key={i}>
                <div style={{ background: "white" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={game.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />

                    <span
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {game.tag} <i className="bi bi-tag-fill"></i>
                    </span>
                  </div>
                  <div style={{ padding: "15px" }}>
                    <h5 style={{ fontWeight: "900" }}>{game.title}</h5>

                    <div style={{ fontSize: "12px", color: "#888" }}>
                      <i className="bi bi-display"></i> {game.platform}
                    </div>

                    <p style={{ fontSize: "14px", color: "#666" }}>
                      {game.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: "#f5f5f5", padding: "50px 0" }}>
        <div className="container">
          <div className="row g-4">
            {games.map((game, i) => (
              <div className="col-md-3" key={i}>
                <div style={{ background: "white" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={game.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />

                    <span
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {game.tag} <i className="bi bi-tag-fill"></i>
                    </span>
                  </div>

                  <div style={{ padding: "15px" }}>
                    <h5 style={{ fontWeight: "900" }}>{game.title}</h5>

                    <div style={{ fontSize: "12px", color: "#888" }}>
                      <i className="bi bi-display"></i> {game.platform}
                    </div>

                    <p style={{ fontSize: "14px", color: "#666" }}>
                      {game.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
