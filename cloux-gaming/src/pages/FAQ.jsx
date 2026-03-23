import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <nav className="faq-header">
        <div className="navbar-wrapper">
          <h4 className="faq-logo">CLOUX GAMING</h4>
        \
          <div className="nav-right">
     \
            <div className="top-icons">
              <i className="bi bi-search"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitch"></i>
            </div>

         \
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
\
          <div className="auth-btns">
            <button className="login">LOGIN</button>
            <button className="signup">SIGN UP</button>
          </div>
        </div>
     \
        <div className="faq-title-wrapper">
          <h1 className="faq-title">FAQ</h1>
        </div>
      </nav>
      <div className="faq-section">
        <Container>
\
          <div className="faq-top mb-4">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
              alt="game"
              className="img-fluid rounded"
            />
          </div>
\
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
              venenatis.
            </span>
            Lacus sed turpis.
          </p>
\
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

\
          <Card className="p-4 shadow-sm">
            <h4 className="mb-3">HOW TO MEMBER?</h4>

            <p>
              Purus non enim praesent elementum facilisis. Neque vitae tempus
              quam pellentesque.
            </p>

          \
            <Row className="mb-4">
              <Col md={4}>
                <img
                  src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={4}>
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={4}>
                <img
                  src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
                  className="img-fluid rounded"
                />
              </Col>
            </Row>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>HOW I BUY A GAME?</Accordion.Header>
                <Accordion.Body>
                  You can purchase games directly from our store using secure
                  payment methods.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>LOREM IPSUM DOLOR SIT AMET</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>RHONCUS DOLOR PURUS NON?</Accordion.Header>
                <Accordion.Body>
                  Rhoncus dolor purus non enim praesent elementum facilisis leo.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  CONSECTETUR ADIPISCING ELIT?
                </Accordion.Header>
                <Accordion.Body>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
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

          
            <div className="info-highlight">
              <i className="bi bi-exclamation-circle"></i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

  
            <Row className="align-items-center mt-4">
              <Col md={7}>
                <p className="small-lines">
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus.
                </p>
                <p className="small-lines">
                  Ut wisi enim ad minim veniam, lorem ipsum dolor.
                </p>
                <p className="small-lines">
                  Pro vel nibh et elit mollis commodo et nec augueique.
                </p>
                <p className="small-lines">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui.
                </p>
                <p className="small-lines">
                  Rhoncus dolor purus non enim praesent elementum.
                </p>

        
                <p className="custom-text">
                  Purus non enim praesent elementum facilisis. Neque vitae
                  tempus quam pellentesque. Facilisis mauris sit amet massa
                  vitae tortor lorem sit lacinia.
                  <span className="highlight">
                    Rhoncus dolor purus non enim praesent elementum facilisis
                    leo. Quisque non tellus orci ac auctor augue mauris.
                    Lobortis mattis aliquam faucibus purus.
                  </span>
                  Cras pulvinar mattis nunc sed blandit libero volutpat. Amet
                  porttitor eget dolor morbi non arcu risus. Proin sagittis nisl
                  rhoncus mattis rhoncus urna neque viverra. Molestie at
                  elementum eu facilisis sed.
                  <span className="strike">
                    Ut placerat orci nulla pellentesque dignissim enim sit amet
                    venenatis.
                  </span>
                  Lacus sed turpis tincidunt id aliquet risus feugiat in.
                </p>

                <p className="custom-text">
                  Purus non enim praesent elementum facilisis. Neque vitae
                  tempus quam pellentesque.
                  <span className="highlight">
                    Rhoncus dolor purus non enim praesent elementum facilisis
                    leo.
                  </span>
                  Quisque non tellus orci ac auctor augue mauris. Lobortis
                  mattis aliquam faucibus purus. Cras pulvinar mattis nunc sed
                  blandit libero volutpat.
                </p>

                <p className="custom-text">
                  Elementum nibh. Neque aliquam vestibulum morbi blandit cursus
                  risus at ultrices. Nec tincidunt praesent semper feugiat nibh
                  sed pulvinar.
                  <span className="underline">
                    At imperdiet dui accumsan sit amet nulla facilisi.
                  </span>
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan lacus vel.
                </p>
              </Col>

              <Col md={5}>
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
                  className="img-fluid rounded"
                  alt=""
                />
              </Col>
            </Row>
  
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
            <p className="info-text mt-5">
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
};

export default FAQ;
