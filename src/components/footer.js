import * as React from "react";
import Layout from "./layout";
import "../styles/styles.scss";
import "../styles/mobile.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithubAlt, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { scroller } from 'react-scroll';
const TDResume = "https://drive.google.com/file/d/1uJoTy3K124M5YpEs9DVpNFKjjzBzKMzZ/view?usp=sharing";

const social = [
    {
        platform: "Codepen",
        url: "https://codepen.io/taylordunworth",
        id: 2,
        icon: faCodepen,
    },
    {
        platform: "Github",
        url: "https://github.com/taydunworth",
        id: 3,
        icon: faGithubAlt,
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/taydunworth/",
        id: 4,
        icon: faLinkedinIn,
    },
    {
        platform: "Dribbble",
        url: "https://dribbble.com/taydunworth",
        id: 5,
        icon: faDribbble,
    },
]

const Footer = () => {
    const scrollToElement = (location) => {
      scroller.scrollTo(location, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    };
  
    return (
        <footer>
            <Layout>
                <div className="flex">
                    <span className="logo">Taylor Dunworth</span>
                    <ul id="footer-nav" aria-label="Main Navigation" role="navigation">
                        <li><button to="about" role="link" onClick={() => scrollToElement("about")}>About</button></li>
                        <li><a href="https://taylordunworth.myportfolio.com/">Work</a></li>
                        <li><a href={TDResume} target="_blank" rel="noreferrer">Resume</a></li>
                        <li><button to="community" role="link" onClick={() => scrollToElement("community")}>Community</button></li>
                        <li><a href="mailto:taydunworth@gmail.com">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <hr />
                    <ul id="social" aria-label="Social Media Links">
                        {social.map(platform => (
                        <li key={platform.id}>
                            <a href={platform.url} target="_blank" rel="noreferrer" aria-label={platform.platform}>
                                <FontAwesomeIcon icon={platform.icon} />
                            </a>
                        </li>
                        ))}
                    </ul>
                    <p>Created with Figma and React/Gatsby. <a href="https://github.com/taydunworth/taylor-dunworth" target="_blank" rel="noreferrer">Check out my code!</a></p>
                    <p>Copyright 2023, Taylor Dunworth</p>
                </div>
            </Layout>
        </footer>
    )
}
  

export default Footer;
