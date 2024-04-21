import React from "react";
import "../../../src/App.css";
import "../style/Hero.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <section id="profile">
        <div className="section__pic-container">
          <img src="images/profile-pic.png" alt="Amanda Rahmat profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Amanda Rahmat Hidayat</h1>
          <p className="section__text__p2">Fullstack Developer</p>
          <div className="btn-container">
            <Link
              className="social-icon-link github"
              to={{
                pathname:
                  "https://drive.google.com/file/d/1Z9yYIiqAS1QHolerNeIRpEB1yEbX865U/view?usp=sharing",
              }}
              target="_blank"
              aria-label="Github"
            >
              <button className="btn btn-color-2" style={{ width: "200px" }}>
                Download Resume
              </button>
            </Link>
          </div>
          <div id="socials-container">
            <Link
              className="social-icon-link linkedin"
              to={{ pathname: "https://www.linkedin.com/in/amandarahmath/" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <img
                src="images/linkedin.png"
                alt="My LinkedIn profile"
                className="icon"
                onclick="location.href='https://linkedin.com/'"
              />
            </Link>

            <Link
              className="social-icon-link github"
              to={{ pathname: "https://github.com/amndrahmat" }}
              target="_blank"
              aria-label="Github"
            >
              <img
                src="images/github.png"
                alt="My Github profile"
                className="icon"
                onclick="location.href='https://github.com/'"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
