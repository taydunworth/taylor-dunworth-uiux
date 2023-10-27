import * as React from "react";
import Layout from "./layout";
import Headshot from "../images/Taylor-Dunworth-Headshot.jpg";
import "../styles/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { scroller } from 'react-scroll';


library.add(faLongArrowAltDown);

const About = () => {
  const scrollToElement = (location) => {
    scroller.scrollTo(location, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <section id="about">
      <Layout>
        <div className="flex-container">
          <img id="headshot" src={Headshot} alt="Headshot of Taylor Dunworth" />
          <div>
            <h2>I’m a designer, who codes.</h2>
            <p>I’m a UI/UX designer and front-end developer based in sunny St. Petersburg, Florida.</p>
            <p>My specialties include intuitive, inclusive design and development and creating resonance for users through simplicity and common design patterns.</p>
            <p>I grew up in small-town Indiana with professional endeavors landing me in Indianapolis, New York City, and presently Tampa Bay, Florida. My experience ranges from agency work specializing in marketing and web development to product work with a focus in interfaces for mobile and web applications.</p>
            <p>Outside of my tech career, I spend time helping small business owners craft their visual brands through my creative design studio, <a href="https://www.thesunshinecreative.com" target="_blank" rel="noreferrer">The Sunshine Creative</a>, and I design and sew hair accessories through my handmade business, <a href="https://www.taydunworth.com" target="_blank" rel="noreferrer">Tay Dunworth</a>.</p>
            <button to="process" role="link" onClick={() => scrollToElement("process")} className="arrow-link">Learn My Process<FontAwesomeIcon className="down-arrow" icon="long-arrow-alt-down" /></button>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default About;