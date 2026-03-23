import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Forums() {
  return (
    <>
      <nav className="faq-header">
        <div className="navbar-wrapper">
          <h4 className="faq-logo">LOUX GAMING</h4>

          <div className="nav-right">
            <div className="top-icons">
              <i className="bi bi-search"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitch"></i>
            </div>

            <ul className="faq-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/esport">eSport</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="auth-btns">
            <button className="login">LOGIN</button>
            <button className="signup">SIGN UP</button>
          </div>
        </div>

        <div className="faq-title-wrapper">
          <h1 className="faq-title p-5">Forums</h1>
        </div>
      </nav>

      <div className="forum-section">
        <Container>
          <div className="forum-search">
            <input type="text" placeholder="" />
            <button>SEARCH</button>
          </div>

          <Table className="forum-table" responsive>
            <thead>
              <tr>
                <th>FORUM</th>
                <th>TOPICS</th>
                <th>POSTS</th>
                <th>LAST POST</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <h6>COMMUNITY</h6>
                  <p>Nullam imperdiet, sem at fringilla lobortis.</p>
                </td>
                <td>8</td>
                <td>21</td>
                <td>
                  4 years, 1 month ago <br />
                  <span className="user">Anonymous</span>
                </td>
              </tr>

              <tr>
                <td>
                  <h6>CONSOLE</h6>
                  <p>Ut dictum nisi massa, vitae pulvinar metus.</p>
                </td>
                <td>4</td>
                <td>5</td>
                <td>
                  8 years, 2 months ago <br />
                  <span className="user">Cloud Doe</span>
                </td>
              </tr>

              <tr>
                <td>
                  <h6>ESPORT WORLD</h6>
                  <p>Donec eu libero sit amet quam egestas semper.</p>
                </td>
                <td>2</td>
                <td>3</td>
                <td>
                  8 years, 2 months ago <br />
                  <span className="user">Anonymous</span>
                </td>
              </tr>

              <tr>
                <td>
                  <h6>GAMES</h6>
                  <p>Aenean ultricies mi vitae est.</p>
                </td>
                <td>3</td>
                <td>4</td>
                <td>
                  4 years, 3 months ago <br />
                  <span className="user">Anonymous</span>
                </td>
              </tr>

              <tr>
                <td>
                  <h6>GUIDES</h6>
                  <p>Donec a neque a velit dignissim euismod.</p>
                </td>
                <td>2</td>
                <td>2</td>
                <td>
                  4 years, 1 month ago <br />
                  <span className="user">Anonymous</span>
                </td>
              </tr>

              <tr>
                <td>
                  <h6>NEWS</h6>
                  <p>Nullam imperdiet, sem at fringilla lobortis.</p>
                </td>
                <td>2</td>
                <td>3</td>
                <td>
                  8 years, 2 months ago <br />
                  <span className="user">Anonymous</span>
                </td>
              </tr>

              <tr>
                <td>
                  <h6>OTHER FORUMS</h6>
                  <p>Phasellus pharetra felis mollis egestas suscipit.</p>
                </td>
                <td>0</td>
                <td>0</td>
                <td>No Topics</td>
              </tr>
            </tbody>
          </Table>
        </Container>
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
              <h5>ABOUT <span>US</span></h5>
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
              <h5>LATEST <span>NEWS</span></h5>

              <div className="news-item">
                <img src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d" alt="" />
                <div>
                  <p>About Space and World</p>
                  <span>January 2, 2018</span>
                </div>
              </div>

              <div className="news-item">
                <img src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d" alt="" />
                <div>
                  <p>New Trailer is Released!</p>
                  <span>January 2, 2018</span>
                </div>
              </div>

              <div className="news-item">
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
                <div>
                  <p>Price List of the Games</p>
                  <span>January 2, 2018</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <h5>APPS <span>& PLATFORMS</span></h5>

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