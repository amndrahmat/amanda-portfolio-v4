import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards" id="cards">
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img src="images/about-pic.png" alt="Profile" class="about-pic" />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src="images/experience.png"
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>
                  3+ years <br />
                  Fullstack Development
                </p>
              </div>
              <div class="details-container">
                <img
                  src="images/education.png"
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>
                  Telecommunication Engineering
                  <br />
                  S.Tr.T. Bachelors Degree
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                Passionate full-stack developer with 3 years of experience
                building web applications. Success in managing development
                projects using scrum, agile, and lean processes. Skilled at
                conceptualizing, designing, developing, and deploying software
                containing logical and mathematical solutions to business
                problems. Dedicated to driving innovation with the ability to
                follow industry and technological trends and facilitate early
                adoption of innovations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
