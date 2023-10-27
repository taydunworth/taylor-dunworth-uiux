import * as React from "react";
import "../styles/styles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { scroller } from 'react-scroll';

library.add(faLongArrowAltDown);

const Hero = () => {
  const scrollToElement = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <section id="hero">
      <div id="inner-hero" role="banner">
          <h1 className="animate__animated animate__fadeIn">Hello, I'm Taylor.</h1>
          <hr role="none" />
          <p>I’m a UI/UX designer and developer, who thrives on translating my user-centric interface designs into accessible, clean code.</p>
          <button to="about" role="link" onClick={() => scrollToElement()} className="arrow-link">Get to Know Me<FontAwesomeIcon className="down-arrow" icon="long-arrow-alt-down" /></button>
      </div>
    </section>
  )
}

export default Hero;
