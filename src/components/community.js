import * as React from "react";
import Layout from "./layout";
import SpeakingEvents from "./speakingEvents";
import Volunteering from "./volunteering";
import "../styles/styles.scss"

const Community = () => {
  return (
    <div id="community">
      <Layout>
        <h2>My <span className="script">Community</span> Involvement</h2>
        <Volunteering />
        <SpeakingEvents />
      </Layout>
    </div>
  )
}

export default Community;
