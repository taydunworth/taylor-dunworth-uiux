import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { scroller } from 'react-scroll';
library.add(faBars, faTimes);

const TDResume = "https://drive.google.com/file/d/1uJoTy3K124M5YpEs9DVpNFKjjzBzKMzZ/view?usp=sharing";

class MobileNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideMobileNav: true,
        };
    }

    toggleMobileNavVisibility = () => {
        this.setState({
            hideMobileNav: !this.state.hideMobileNav,
        });
    };

    scrollToElement(location) {
        scroller.scrollTo(location, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
        });

        this.toggleMobileNavVisibility();
    }
  
    render() {
        const {hideMobileNav} = this.state;
        return (
        <section id="mobile-nav">
            <span className="logo">Taylor Dunworth</span>
            <nav id="mobile-menu" aria-label="Main Navigation">
                <button onClick={() => this.toggleMobileNavVisibility()}><FontAwesomeIcon icon={hideMobileNav ? "bars" : "times"} /></button>
                <ul className={hideMobileNav ? "hide-mobile-nav" : "show-mobile-nav"}>
                    <li><button to="about" role="link" onClick={() => this.scrollToElement("about")}>About</button></li>
                    <li><a href="https://taylordunworth.myportfolio.com/">Work</a></li>
                    <li><a href={TDResume} target="_blank" rel="noreferrer">Resume</a></li>
                    <li><button to="community" role="link" onClick={() => this.scrollToElement("community")}>Community</button></li>
                    <li><a href="mailto:taydunworth@gmail.com">Contact</a></li>
                </ul>
            </nav>
        </section>
        )
    }
}

export default MobileNav;
