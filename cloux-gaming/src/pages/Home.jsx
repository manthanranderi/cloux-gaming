import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const games = [
    {
      title: "PLANES OF GLORIA",
      subtitle: "UPLAY, XBOX ONE",
      category: "SIMULATION, STRATEGY",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20250227/pngtree-a-futuristic-fighter-jet-soaring-through-fiery-clouds-showcasing-advanced-technology-image_17015697.jpg",
    },
    {
      title: "EARTH WARS",
      subtitle: "ORIGIN, PLAYSTATION 4",
      category: "ADVENTURE",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHELmn-VcSvIYap46z48IB6nM3a6orgV8PQ&s",
    },
    {
      title: "THE WARRIOR 3",
      subtitle: "ORIGIN, PLAYSTATION 4",
      category: "ADVENTURE",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "LIFE AND STRUGGLE",
      subtitle: "ORIGIN, STEAM, UPLAY",
      category: "ACTION, RACING",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
  ];

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
      <div className="container-fluid p-0">
        <div className="row g-0">
          {games.map((game, index) => (
            <div className="col-md-3 hero-card" key={index}>
              <img src={game.img} alt="" />

              <div className="overlay">
                <small className="subtitle">{game.subtitle}</small>
                <p className="category">{game.category}</p>
                <h2>{game.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="marketplace-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/home-2-about.jpg"
                alt="gaming"
                className="marketplace-img"
              />
            </div>

            <div className="col-md-6">
              <h1 className="marketplace-title">
                ULTIMATE GAMING <br />
                <span>MARKETPLACE</span>
              </h1>

              <p className="marketplace-text">
                Explore a massive selection of in-game content, rare
                collectibles, and powerful upgrades. Unlock exclusive gear,
                customize your experience, and gain the edge in every battle.
              </p>

              <div className="read-more">
                READ MORE
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="games-section">
        <div className="container">
          <div className="filter-buttons">
            {[
              "ALL",
              "ORIGIN",
              "PLAYSTATION 4",
              "STEAM",
              "UPLAY",
              "XBOX ONE",
            ].map((btn, i) => (
              <button key={i} className={i === 0 ? "active" : ""}>
                {btn}
              </button>
            ))}
          </div>

          <div className="row">
            {[
              {
                title: "SPACE WARS",
                img: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
                tag: "ADVENTURE, FPS",
                platform: "STEAM, XBOX ONE",
                desc: "Engage in intergalactic battles, explore unknown galaxies.",
              },
              {
                title: "RETURN OF THE CARS",
                img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
                tag: "RACING, SPORTS",
                platform: "STEAM, UPLAY",
                desc: "Rev up your engines and race through thrilling tracks.",
              },
              {
                title: "PLANES OF GLORIA",
                img: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab",
                tag: "SIMULATION, STRATEGY",
                platform: "UPLAY, XBOX ONE",
                desc: "Soar through the skies and engage in epic dogfights.",
              },
              {
                title: "EARTH WARS",
                img: "https://images.unsplash.com/photo-1493238792000-8113da705763",
                tag: "ADVENTURE",
                platform: "ORIGIN, PLAYSTATION 4",
                desc: "Rewrite history in intense global battles.",
              },
            ].map((game, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="game-card">
                  <div className="img-box">
                    <img src={game.img} alt="" />
                    <span className="tag">{game.tag}</span>
                  </div>

                  <h5>{game.title}</h5>

                  <p className="platform">{game.platform}</p>
                  <p className="desc">{game.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="all-games-btn">ALL GAMES</button>
          </div>
        </div>
      </div>
      <div className="promo-section">
        <div className="search-bar">
          <div className="container d-flex align-items-center gap-3 flex-wrap">
            <h5 className="search-title">SEARCH</h5>

            <input type="text" placeholder="Keyword" />
            <select>
              <option>Platform</option>
            </select>
            <select>
              <option>Genre</option>
            </select>
            <select>
              <option>Language</option>
            </select>
            <select>
              <option>Order By</option>
            </select>

            <button className="search-btn">SEARCH</button>
          </div>
        </div>

        <div className="promo-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-white">
                <h1 className="promo-title">
                  FIFA SOCCER <br />
                  <span>IS RELEASED</span>
                </h1>

                <p className="promo-text">
                  Experience next-level gameplay, enhanced graphics, and
                  realistic mechanics. Build your dream team and dominate the
                  field.
                </p>

                <div className="promo-buttons">
                  <button className="read-more-btn">READ MORE</button>
                  <button className="buy-btn">BUY NOW</button>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/fifa-release-image-530x370.jpg"
                  alt=""
                  className="promo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <div className="container">
          <h2 className="section-title">
            FEATURED <span>GAMES</span>
          </h2>

          <div className="row g-4">
            {[
              {
                img: "https://i.pinimg.com/564x/77/2f/23/772f23cd4cd121e6ed930ddede0d0b97.jpg",
                title: "SPACE WARS",
                meta: "STEAM, XBOX ONE",
                tag: "ADVENTURE, FPS",
              },
              {
                img: "https://i.pinimg.com/564x/77/2f/23/772f23cd4cd121e6ed930ddede0d0b97.jpg",
                title: "RETURN OF THE CARS",
                meta: "STEAM, UPLAY",
                tag: "RACING, SPORTS",
              },
              {
                img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
                title: "PLANES OF GLORIA",
                meta: "UPLAY, XBOX ONE",
                tag: "SIMULATION, STRATEGY",
              },
              {
                img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
                title: "EARTH WARS",
                meta: "ORIGIN, PLAYSTATION 4",
                tag: "ADVENTURE",
              },
              {
                img: "https://images.stockcake.com/public/f/a/1/fa199729-94e0-4cee-a905-360e4eafac96_large/warrior-awaits-battle-stockcake.jpg",
                title: "THE WARRIOR 3",
                meta: "ORIGIN, PLAYSTATION 4",
                tag: "ADVENTURE",
              },
              {
                img: "https://thumbs.dreamstime.com/b/super-cops-two-sexy-policemen-posing-guns-street-65591091.jpg",
                title: "LIFE AND STRUGGLE",
                meta: "ORIGIN, STEAM, UPLAY",
                tag: "ACTION, RACING",
              },
            ].map((game, i) => (
              <div className="col-md-4" key={i}>
                <div className="game-card">
                  <img src={game.img} alt="" />

                  <div className="overlay">
                    <h4>{game.title}</h4>
                    <p>{game.meta}</p>
                    <span>{game.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="container">
          <h2 className="section-title">
            BLOG <span>& NEWS</span>
          </h2>

          <div className="row g-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d",
                title: "ABOUT SPACE AND WORLD",
                desc: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus.",
                category: "News",
              },
              {
                img: "https://images.stockcake.com/public/f/a/1/fa199729-94e0-4cee-a905-360e4eafac96_large/warrior-awaits-battle-stockcake.jpg",
                title: "NEW TRAILER IS RELEASED!",
                desc: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus.",
                category: "Videos",
              },
              {
                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                title: "PRICE LIST OF THE GAMES",
                desc: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus.",
                category: "News",
              },
            ].map((blog, i) => (
              <div className="col-md-4" key={i}>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={blog.img} alt="" />
                  </div>

                  <div className="blog-content">
                    <h4>{blog.title}</h4>
                    <p>{blog.desc}</p>

                    <div className="blog-meta">
                      <span>👤 Cloud Doe</span>
                      <span>📁 {blog.category}</span>
                      <span>🕒 January 2, 2018</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt=""
                className="about-img"
              />
            </div>

            <div className="col-md-6 text-white">
              <h2 className="about-title">
                ABOUT THE <br />
                <span>CLOUX</span>
              </h2>

              <p className="about-text">
                Cloux is the ultimate gaming platform, bringing players,
                developers, and communities together. Explore new worlds,
                connect with fellow gamers, and stay updated with the latest
                industry trends.
              </p>

              <button className="read-more-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
   
      <div className="shop-section">
        <div className="container">
          <h2 className="section-title">
            GAME <span>SHOP</span>
          </h2>

          <div className="row g-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
                title: "GAME PACK DVD",
                price: "£56.00",
              },
              {
                img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
                title: "OFFICE COFFEE PACK",
                price: "£390.79",
              },
              {
                img: "https://m.media-amazon.com/images/I/41IfEf6+4CL.jpg",
                title: "PULSE HEADPHONE",
                price: "£355.00",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="shop-card">
                  <div className="shop-img">
                    <img src={item.img} alt="" />
                  </div>

                  <h5>{item.title}</h5>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
      <div className="newsletter">
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
                  src="https://images.stockcake.com/public/f/a/1/fa199729-94e0-4cee-a905-360e4eafac96_large/warrior-awaits-battle-stockcake.jpg"
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

export default Home;
