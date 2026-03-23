import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Blog() {
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
          <h1 className="faq-title p-2">BLOG</h1>
        </div>
      </nav>

      <div className="blog-page py-5">
        <Container>
          <Row>
            <Col md={8}>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Card className="blog-card mb-4" key={index}>
                  <Card.Img
                    src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gallery-3-970x570.jpg"
                    className="blog-img"
                  />

                  <Card.Body className="blog-body">
                    <h4 className="blog-title">ABOUT SPACE AND WORLD</h4>

                    <p className="blog-desc">
                      Habitasse platea dictumst vestibulum rhoncus est
                      pellentesque elit ullamcorper massa sapien faucibus et
                      molestie ac feugiat sed. Elementum nibh tellus molestie nunc
                      non blandit massa enim nec.
                    </p>

                    <div className="blog-meta">
                      <span><i className="bi bi-person"></i> Cloud Doe</span>
                      <span><i className="bi bi-chat"></i> 0 Comment</span>
                      <span><i className="bi bi-folder"></i> News</span>
                      <span><i className="bi bi-clock"></i> January 2, 2018</span>
                    </div>

                    <button className="read-btn-outline">READ MORE</button>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            <Col md={4}>
              <div className="sidebar-box mb-4 latest-posts">
                <h6>
                  <i className="bi bi-clock-history"></i> LATEST POSTS
                </h6>

                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div className="latest-post" key={i}>
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
                      alt=""
                    />
                    <div>
                      <p>About Space and World</p>
                      <span>
                        <i className="bi bi-calendar"></i> Jan 2, 2018
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-box mb-4">
                <h6>
                  <i className="bi bi-folder"></i> CATEGORIES
                </h6>
                <ul className="category-list">
                  <li><i className="bi bi-controller"></i> eSport (1)</li>
                  <li><i className="bi bi-trophy"></i> Matches (5)</li>
                  <li><i className="bi bi-newspaper"></i> News (4)</li>
                  <li><i className="bi bi-star"></i> Reviews (6)</li>
                  <li><i className="bi bi-camera-video"></i> Videos (3)</li>
                </ul>
              </div>

              <div className="sidebar-box">
                <h6>
                  <i className="bi bi-envelope"></i> NEWSLETTER
                </h6>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-control mb-3"
                />
                <button className="subscribe-btn">
                  SUBMIT <i className="bi bi-send"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>

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
                  <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
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
      </div>
    </>
  );
}