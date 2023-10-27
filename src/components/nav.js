import * as React from "react";
import "../styles/styles.scss";
import { scroller } from 'react-scroll';

const TDResume = "https://drive.google.com/file/d/1uJoTy3K124M5YpEs9DVpNFKjjzBzKMzZ/view?usp=sharing";

const Nav = () => {
  const scrollToElement = (location) => {
    scroller.scrollTo(location, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <section id="navigation">
      <div>
        <span className="logo">Taylor Dunworth</span>
        <nav aria-label="Main Navigation">
          <ul>
            <li><button to="about" role="link" onClick={() => scrollToElement("about")}>About</button></li>
            <li><a href="https://taylordunworth.myportfolio.com/">Work</a></li>
            <li><a href={TDResume} target="_blank" rel="noreferrer">Resume</a></li>
            <li><button to="community" role="link" onClick={() => scrollToElement("community")}>Community</button></li>
            <li><a href="mailto:taydunworth@gmail.com">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Nav;
