import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
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
          </div>

          <div className="auth-btns">
            <button className="login">LOGIN</button>
            <button className="signup">SIGN UP</button>
          </div>
        </div>

        <div className="faq-title-wrapper">
          <h1 className="faq-title p-2">About</h1>
        </div>
      </nav>
      <div className="faq-section">
        <Container>
        
          <p className="custom-text">
            Purus non enim praesent elementum facilisis. Neque vitae tempus quam
            pellentesque. Facilisis mauris sit amet massa vitae tortor lorem sit
            lacinia.
            <span className="highlight">
              Rhoncus dolor purus non enim praesent elementum facilisis leo.
              Quisque non tellus orci ac auctor augue mauris. Lobortis mattis
              aliquam faucibus purus.
            </span>
            Cras pulvinar mattis nunc sed blandit libero volutpat. Amet
            porttitor eget dolor morbi non arcu risus. Proin sagittis nisl
            rhoncus mattis rhoncus urna neque viverra. Molestie at elementum eu
            facilisis sed. In aliquam sem fringilla ut morbi.
            <span className="strike">
              Ut placerat orci nulla pellentesque dignissim enim sit amet
              venenatis
            </span>
            Lacus sed turpis tincidunt id aliquet risus feugiat in diam sit at
            ultrices. Nec tincidunt praesent semper feugiat nibh sed pulvinar
            ornare aenean..
          </p>

          <p>
            Elementum nibh. Neque aliquam vestibulum morbi blandit cursus risus
            at ultrices. Nec tincidunt praesent semper feugiat nibh sed
            pulvinar. Ornare aenean euismod elementum nisi quis eleifend quam
            adipiscing vitae. At imperdiet dui accumsan sit amet nulla facilisi.
            Morbi tincidunt ornare massa eget egestas purus viverra. Commodo
            viverra maecenas accumsan lacus vel. In fermentum posuere urna nec
            tincidunt. Malesuada fames ac turpis egestas sed tempus urna. Lorem
            sed risus ultricies tristique nulla aliquet enim tortor. Ultricies
            lacus sed turpis tincidunt id. Purus ut faucibus pulvinar elementum
            integer enim neque volutpat ac. Non pulvinar neque laoreet
            suspendisse. Vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras tincidunt lobortis malesuada. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse a mauris vitae lacus
            commodo iaculis eget vitae magna. Nam leo diam, volutpat quis
            iaculis at, viverra id quam. Morbi pharetra, libero ut tempor
            finibus, metus massa pharetra dui, ornare pharetra felis risus eu
            quam. Nunc consectetur mi ac tristique eleifend. Phasellus eleifend
            pharetra ante non viverra. Curabitur iaculis ultrices felis in
            consequat. In pretium fringilla luctus praesent ut scelerisque.
          </p>

          <Row className="mt-5">
            <Col md={4}>
              <Card className="info-card">
                <Card.Img src="https://images.unsplash.com/photo-1511512578047-dfb367046420" />
                <Card.Body>
                  <h5>OUR GAMES</h5>
                  <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
                  <span className="card-link">ALL GAMES</span>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="info-card">
                <Card.Img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
                <Card.Body>
                  <h5>CLOUX TEAM</h5>
                  <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
                  <span className="card-link">READ MORE</span>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="info-card">
                <Card.Img src="https://images.unsplash.com/photo-1520975916090-3105956dac38" />
                <Card.Body>
                  <h5>HELP CENTER</h5>
                  <p>Lorem ipsum dolor sit amet adipiscing elit.</p>
                  <span className="card-link">CONTACT</span>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <p className="info-text mt-5">
            Morbi mattis rutrum nunc sed convallis. Nam nulla sem, viverra in
            felis eu, blandit gravida ipsum. Aenean pulvinar, nulla non lacinia
            vehicula, augue eros molestie nunc, id hendrerit erat tortor vitae
            magna. Mauris ullamcorper, ipsum eu maximus faucibus, magna justo
            semper nunc, sit amet imperdiet metus purus ac orci. Suspendisse
            sapien felis, hendrerit non dapibus scelerisque, tincidunt vitae
            ligula. Maecenas bibendum a sapien eget ornare. Suspendisse potenti.
            Aliquam vehicula maximus leo eget pellentesque. Morbi volutpat
            ligula nec ligula elementum condimentum. Cras consectetur risus
            nibh, eget molestie magna tempus et. Morbi eu facilisis ex. Donec
            venenatis placerat arcu sit amet suscipit. Sed lobortis at justo
            quis fringilla. Curabitur varius tristique nulla ac facilisis.
            Nullam ut sapien id urna convallis maximus at sed massa. Nullam quis
            lectus ut erat elementum elementum. Sed ut tellus vitae purus
            laoreet placerat.
          </p>
          <p className="info-text mt-5">
            Cras finibus sollicitudin ligula, non maximus purus imperdiet vitae.
            Curabitur ac facilisis elit. Suspendisse potenti. Integer aliquet
            lorem augue, id aliquam velit gravida eget. Praesent aliquet nisi eu
            tristique gravida. Proin et ipsum elit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur
            luctus euismod nisi vitae fermentum. Etiam at nibh magna. Integer
            consequat lectus libero, vel pretium augue hendrerit non. Nullam ut
            justo diam. Integer eu augue sagittis, iaculis tellus vel, suscipit
            tortor. Phasellus eget semper libero, elementum elementum sem.
            Phasellus viverra ipsum lorem praesent.
          </p>
          <Row className="text-center mb-5">
            <Col md={4}>
              <div className="icon-circle">
                <i className="bi bi-controller"></i>
              </div>
              <h5 className="mt-3 text-warning">BEST GAMES</h5>
              <p>Premium gaming experience</p>
            </Col>

            <Col md={4}>
              <div className="icon-circle">
                <i className="bi bi-life-preserver"></i>
              </div>
              <h5 className="mt-3 text-warning">SUPPORT</h5>
              <p>24/7 support system</p>
            </Col>

            <Col md={4}>
              <div className="icon-circle">
                <i className="bi bi-phone"></i>
              </div>
              <h5 className="mt-3 text-warning">MOBILE APPS</h5>
              <p>Play anywhere anytime</p>
            </Col>
          </Row>
        </Container>
        <div className="info-section">
          <Container>

            <p className="info-text">
              Morbi mattis rutrum nunc sed convallis. Nam nulla sem, viverra in
              felis eu, blandit gravida ipsum. Aenean pulvinar, nulla non
              lacinia vehicula, augue eros molestie nunc, id hendrerit erat
              tortor vitae magna. Mauris ullamcorper, ipsum eu maximus faucibus,
              magna justo semper nunc, sit amet imperdiet metus purus ac orci.
              Suspendisse sapien felis, hendrerit non dapibus scelerisque,
              tincidunt vitae ligula. Maecenas bibendum a sapien eget ornare.
              Suspendisse potenti. Aliquam vehicula maximus leo eget
              pellentesque. Morbi volutpat ligula nec ligula elementum
              condimentum. Cras consectetur risus nibh, eget molestie magna
              tempus et. Morbi eu facilisis ex. Donec venenatis placerat arcu
              sit amet suscipit. Sed lobortis at justo quis fringilla. Curabitur
              varius tristique nulla ac facilisis. Nullam ut sapien id urna
              convallis maximus at sed massa. Nullam quis lectus ut erat
              elementum elementum. Sed ut tellus vitae purus laoreet placerat.
            </p>

            <p className="info-text">
              Cras finibus sollicitudin ligula, non maximus purus imperdiet
              vitae. Curabitur ac facilisis elit. Suspendisse potenti. Integer
              aliquet lorem augue, id aliquam velit gravida eget. Praesent
              aliquet nisi eu tristique gravida. Proin et ipsum elit. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Curabitur luctus euismod nisi vitae fermentum.
              Etiam at nibh magna. Integer consequat lectus libero, vel pretium
              augue hendrerit non. Nullam ut justo diam. Integer eu augue
              sagittis, iaculis tellus vel, suscipit tortor. Phasellus eget
              semper libero, elementum elementum sem. Phasellus viverra ipsum
              lorem praesent.
            </p>
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
        </div>
      </div>
    </>
  );
};

export default About;
