import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Esport() {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511512578047-dfb367046420')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "20px 0",
          }}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <h4 style={{ color: "#fff", fontWeight: "800" }}>
              CLOUX <br /> GAMING
            </h4>

            <ul
              style={{
                display: "flex",
                gap: "30px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {[
                { name: "Home", path: "/" },
                { name: "Pages", path: "/about" },
                { name: "Games", path: "/games" },
                { name: "Forums", path: "/forums" },
                { name: "eSport", path: "/esport" },
                { name: "Blog", path: "/blog" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    style={{
                      color: item.name === "eSport" ? "#f5a100" : "#fff",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#f5a100")}
                    onMouseLeave={(e) =>
                    (e.target.style.color =
                      item.name === "eSport" ? "#f5a100" : "#fff")
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-3">
              <div className="d-flex gap-3">
                {["search", "twitter", "youtube", "instagram", "twitch"].map(
                  (icon, i) => (
                    <i
                      key={i}
                      className={`bi bi-${icon}`}
                      style={{
                        color: "#fff",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#f5a100")}
                      onMouseLeave={(e) => (e.target.style.color = "#fff")}
                    ></i>
                  ),
                )}
              </div>

              <div className="d-flex gap-2">
                <button
                  style={{
                    background: "#f5a100",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  LOGIN
                </button>

                <button
                  style={{
                    background: "#f5a100",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "80%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="container">
            <h1 style={{ fontSize: "80px", fontWeight: "900", color: "#fff" }}>
              CLOUX
            </h1>

            <h1
              style={{
                fontSize: "80px",
                fontWeight: "900",
                color: "#f5a100",
              }}
            >
              ESPORT TEAM
            </h1>

            <p style={{ color: "#ccc", maxWidth: "600px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>

            <div className="d-flex gap-3 mt-4">
              <button
                style={{
                  background: "#f5a100",
                  color: "#fff",
                  border: "none",
                  padding: "12px 25px",
                  fontWeight: "600",
                }}
              >
                ABOUT
              </button>

              <button
                style={{
                  background: "transparent",
                  color: "#f5a100",
                  border: "2px solid #f5a100",
                  padding: "12px 25px",
                  fontWeight: "600",
                }}
              >
                NEWS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "80px 0", background: "#f7f7f7" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/esport-about-team.jpg"
                alt=""
                style={{
                  width: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <div className="col-md-6">
              <h2 style={{ fontWeight: "900", fontSize: "40px" }}>
                ABOUT CLOUX
              </h2>

              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "48px",
                  color: "#f5a100",
                  marginBottom: "20px",
                }}
              >
                ESPORT TEAM
              </h2>

              <p style={{ color: "#666", lineHeight: "1.8" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim minim veniam, quis nostrud
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                lorem.
              </p>
              <div
                style={{
                  marginTop: "30px",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    color: "#f5a100",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  READ MORE
                </span>

                <div
                  style={{
                    height: "3px",
                    width: "40px",
                    background: "#f5a100",
                    marginTop: "8px",
                    transition: "0.4s",
                  }}
                  className="read-line"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542751371-adc38448a05e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 style={{ fontWeight: "900", fontSize: "40px" }}>
                VICTORIES OF
              </h2>

              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "50px",
                  color: "#f5a100",
                }}
              >
                CLOUX
              </h2>

              <p style={{ marginTop: "20px", color: "#ccc" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div style={{ marginTop: "25px", cursor: "pointer" }}>
                <span style={{ color: "#f5a100", fontWeight: "bold" }}>
                  ALL ACHIEVEMENTS
                </span>
                <div
                  style={{
                    width: "60px",
                    height: "3px",
                    background: "#f5a100",
                    marginTop: "6px",
                    transition: "0.3s",
                  }}
                  className="ach-line"
                ></div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/esport-victories.jpg"
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              />
            </div>
          </div>
          <div className="row mt-5">
            {[
              { title: "GLORIA XTRA 2017 LEAGUE", pos: "1ST" },
              { title: "FIFA 2018 SUPER LEAGUE", pos: "1ST" },
              { title: "CS: GO PERFECT SUPER CUP", pos: "2ST" },
              { title: "LOL 2018 SUPER LEAGUE", pos: "1ST" },
              { title: "FIFA 2018 PRO WINTER CUP", pos: "1ST" },
              { title: "LEFT 4 DEAD 2 SEVERAL CUP", pos: "3ST" },
            ].map((item, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >

                  <div
                    style={{
                      border: "2px solid #f5a100",
                      padding: "10px 15px",
                      fontWeight: "bold",
                      color: "#f5a100",
                    }}
                  >
                    {item.pos}
                  </div>

                  <div>
                    <small style={{ color: "#aaa" }}>
                      Lorem ipsum dolor sit amet.
                    </small>
                    <h6
                      style={{
                        color: "#f5a100",
                        fontWeight: "800",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "80px 0", background: "#f7f7f7" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2018/01/esport-about-team.jpg"
                alt=""
                style={{
                  width: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              />
            </div>

            <div className="col-md-6">
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "48px",
                  color: "#222",
                }}
              >
                OUR TEAMS
              </h2>

              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "48px",
                  color: "#f5a100",
                  marginBottom: "20px",
                }}
              >
                & PLAYERS
              </h2>

              <p style={{ color: "#666", lineHeight: "1.8" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim minim veniam, quis nostrud
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "80px 0", background: "#f7f7f7" }}>
        <div className="container text-center">
          <div style={{ marginBottom: "40px" }}>
            {["ALL", "CALL OF DUTY", "CS: GO", "FIFA SOCCER", "LOL"].map(
              (item, i) => (
                <button
                  key={i}
                  style={{
                    border: "2px solid #f5a100",
                    padding: "10px 20px",
                    margin: "8px",
                    background: i === 0 ? "#f5a100" : "transparent",
                    color: i === 0 ? "#fff" : "#000",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#f5a100";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    if (i !== 0) {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#000";
                    }
                  }}
                >
                  {item}
                </button>
              ),
            )}
          </div>


          <div className="row g-4">
            {[
              {
                name: "MASTERX",
                img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909",
              },
              {
                name: "DARK PRO",
                img: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b",
              },
              {
                name: "W-QUEEN",
                img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909",
              },
            ].map((player, i) => (
              <div className="col-md-4" key={i}>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >

                  <img
                    src={player.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0,0,0,0.7)",
                      opacity: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "0.4s",
                    }}
                  >

                    <div
                      style={{
                        color: "#fff",
                        fontSize: "40px",
                        fontWeight: "bold",
                      }}
                    >
                      +
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#f5a100",
                      padding: "10px 25px",
                      fontWeight: "700",
                    }}
                  >
                    {player.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542751371-adc38448a05e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          position: "relative",
          color: "#fff",
        }}
      >

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
          }}
        ></div>

        <div
          className="container text-center"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h2 style={{ fontWeight: "900", fontSize: "40px" }}>
            OUR <span style={{ color: "#f5a100" }}>SPONSORS</span>
          </h2>

          <div className="row mt-5 g-4">
            {[
              "bi-controller",
              "bi-lightning",
              "bi-globe",
              "bi-shield",
              "bi-geo-alt",
              "bi-cpu",
              "bi-shield",
              "bi-play",
              "bi-cpu",
              "bi-globe",
              "bi-controller",
              "bi-lightning",
            ].map((icon, i) => (
              <div className="col-md-2 col-6" key={i}>
                <div
                  className="sponsor-box"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    padding: "30px 10px",
                    transition: "0.4s",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className={`bi ${icon}`}
                    style={{
                      fontSize: "30px",
                      color: "#fff",
                      transition: "0.3s",
                    }}
                  ></i>

                  <p style={{ marginTop: "10px", opacity: 0.7 }}>Sponsor</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "80px 0", background: "#f4f4f4" }}>
        <div className="container">

          <div className="text-center mb-5">
            <h2 style={{ fontWeight: "900" }}>
              MATCHES <span style={{ color: "#f5a100" }}>& FIXTURE</span>
            </h2>

            <div className="mt-4">
              {["ALL", "RESULTS", "UPCOMING"].map((item, i) => (
                <button
                  key={i}
                  style={{
                    border: "2px solid #f5a100",
                    padding: "8px 20px",
                    margin: "5px",
                    background: i === 0 ? "#f5a100" : "transparent",
                    color: i === 0 ? "#fff" : "#000",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#f5a100";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    if (i !== 0) {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#000";
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {[
            {
              game: "CALL OF DUTY",
              title: "GLORIA XTRA 2017 CUP",
              left: "RHINO UNITED",
              right: "BULLS",
              type: "vs",
            },
            {
              game: "FIFA SOCCER",
              title: "GLORIA SOCCER 18 SUPER LEAGUE OF WEEK 4",
              left: "ELVES UNITED",
              right: "CLOUX",
              type: "vs",
            },
            {
              game: "FIFA SOCCER",
              title: "GLORIA SOCCER 18 SUPER LEAGUE OF WEEK 3",
              left: "CLOUX",
              right: "LIONS",
              type: "vs",
            },
            {
              game: "CALL OF DUTY",
              title: "GLORIA XTRA 2017 LEAGUE",
              left: "BULLS",
              right: "CLOUX",
              type: "score",
              score: "3 - 8",
            },
            {
              game: "CS: GO",
              title: "CS WINTER CUP 2018",
              left: "CLOUX",
              right: "ELVES UNITED",
              type: "score",
              score: "5 - 1",
            },
          ].map((match, i) => (
            <div
              key={i}
              className="match-card"
              style={{
                background: "#fff",
                padding: "25px",
                marginBottom: "20px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
            >
              <div className="row align-items-center">

                <div className="col-md-7">
                  <small style={{ color: "#f5a100", fontWeight: "600" }}>
                    {match.game}
                  </small>

                  <h5 style={{ fontWeight: "800", marginTop: "5px" }}>
                    {match.title}
                  </h5>

                  <p style={{ color: "#777", fontSize: "14px" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>

                <div className="col-md-5 text-center">
                  <div className="d-flex justify-content-center align-items-center gap-3">

                    <div>
                      <strong style={{ color: "#f5a100" }}>{match.left}</strong>
                    </div>

                    <div
                      style={{
                        fontWeight: "900",
                        fontSize: "20px",
                        color: "#999",
                      }}
                    >
                      {match.type === "vs" ? "VS" : match.score}
                    </div>

                    <div>
                      <strong style={{ color: "#f5a100" }}>
                        {match.right}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">

          <div className="text-center mb-5">
            <h2 style={{ fontWeight: "900", fontSize: "40px" }}>
              BLOG <span style={{ color: "#f5a100" }}>& NEWS</span>
            </h2>
          </div>

          <div className="row">
            {[
              {
                img: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
                title: "BEST SKIN CONCEPTS: GLORIA",
              },
              {
                img: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
                title: "PLAYERS JOINED TO TEAM!",
              },
              {
                img: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
                title: "BEST ESPORT TEAMS",
              },
            ].map((blog, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="blog-card">

                  <div className="blog-img">
                    <img src={blog.img} alt="" />
                  </div>

                  <div className="mt-3">
                    <h5 className="blog-title">{blog.title}</h5>

                    <p style={{ color: "#777" }}>
                      Habitasse platea dictumst vestibulum rhoncus est
                      pellentesque elit ullamcorper massa sapien faucibus.
                    </p>
                    <div className="d-flex gap-3 align-items-center text-muted small">
                      <span>👤 Cloud Doe</span>
                      <span>📁 News</span>
                      <span>🕒 Jan 1, 2018</span>
                    </div>
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