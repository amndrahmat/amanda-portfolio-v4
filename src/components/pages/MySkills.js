import React from "react";
import "../../App.css";
import "../Cards.css";

export default function MySkills() {
  return (
    <>
      <div className="cards" id="cards" style={{ backgroundColor: "#242424" }}>
        <section id="about">
          <p class="section__text__p1" style={{ color: "#fff" }}>
            Explore my
          </p>
          <h1 class="title" style={{ color: "#fff" }}>
            Experience
          </h1>

          <div
            class="skills_main"
            style={{ height: "500px", color: "#fff", marginTop: "50px" }}
          >
            <div class="skill_bar">
              <div class="info">
                <p>Javascript</p>
                <p>90%</p>
              </div>
              <div class="bar">
                <span class="javascript"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>php</p>
                <p>65%</p>
              </div>
              <div class="bar">
                <span class="php"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>CSS/SCSS</p>
                <p>85%</p>
              </div>
              <div class="bar">
                <span class="css"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>React js</p>
                <p>80%</p>
              </div>
              <div class="bar">
                <span class="react"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Next js</p>
                <p>70%</p>
              </div>
              <div class="bar">
                <span class="next"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Node js</p>
                <p>75%</p>
              </div>
              <div class="bar">
                <span class="node"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Express js</p>
                <p>75%</p>
              </div>
              <div class="bar">
                <span class="express"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>MySQL</p>
                <p>70%</p>
              </div>
              <div class="bar">
                <span class="mysql"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Mongo DB</p>
                <p>60%</p>
              </div>
              <div class="bar">
                <span class="mongo"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>AWS</p>
                <p>75%</p>
              </div>
              <div class="bar">
                <span class="aws"></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
