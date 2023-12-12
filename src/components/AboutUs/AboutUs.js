
import React from 'react';

const AboutUs = () => (
  <section id="about-us">
    <h2>About Us</h2>
    <p>
      Welcome to Todds Tech, where innovation meets expertise. Our team is dedicated to delivering
      cutting-edge solutions and top-notch services in the field of technology.
    </p>

    <div className="employee">
      <img
        src={process.env.PUBLIC_URL + '/joeseph_santorini.png'}
        alt="Joeseph_Santorini"
        className="joeseph"
      />
      <div className="employee-details">
        <h3>Joeseph Santorini</h3>
        <p>Founder & CEO</p>
        <p>
          With a passion for technology and a vision for the future, Joeseph founded Todds Tech to
          empower businesses through innovative solutions.
        </p>
      </div>
    </div>

    <div className="employee">
      <img
        src={process.env.PUBLIC_URL + '/john_higglebottom.png'}
        alt="John_Higglebottom"
        className="employee-img"
      />
      <div className="employee-details">
        <h3>John Higglebottom</h3>
        <p>Lead Developer</p>
        <p>
          John brings a wealth of experience and technical prowess to Todds Tech, ensuring that our
          projects are not only functional but also crafted with excellence.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;
