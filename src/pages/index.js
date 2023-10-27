import * as React from "react";
import Helmet from 'react-helmet';
import MobileNav from "../components/mobileNav";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Buzzwords from "../components/buzzwords";
import Process from "../components/process";
import Community from "../components/community";
import Footer from "../components/footer";
import Favicon from "../images/icon.png";
import "../styles/styles.scss";
import "../styles/mobile.scss";
import 'animate.css';

const IndexPage = () => {
  return (
    <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Taylor Dunworth | UI/UX Designer and Developer</title>
          <link rel="icon" type="image/png" href={Favicon}></link>
        </Helmet>
        <MobileNav />
        <Nav />
        <Hero />
        <About />
        <Buzzwords />
        <Process />
        <Community />
        <Footer />
    </main>
  )
}

export default IndexPage;
