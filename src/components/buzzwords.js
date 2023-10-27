import * as React from "react";
import Layout from "./layout";
import "../styles/styles.scss";

const buzzwords = [
    { word: "Adobe Creative Suite", id: 1},
    { word: "HTML", id: 2},
    { word: "CSS/Sass/LESS", id: 3},
    { word: "JavaScript", id: 4},
    { word: "React", id: 5},
    { word: "AngularJS", id: 6},
    { word: "TypeScript", id: 7},
    { word: "Web Accessibility", id: 8},
    { word: "UI Design", id: 9},
    { word: "Invision", id: 10},
    { word: "Figma", id: 11},
    { word: "Git/Version Control", id: 12},
    { word: "WordPress", id: 13},
    { word: "Squarespace", id: 14},
    { word: "Shopify", id: 15},
    { word: "Wireframing", id: 16},
    { word: "Design Systems", id: 17},
    { word: "Mobile App Design", id: 18},
    { word: "Web Design", id: 19},
    { word: "Product Design", id: 20},
    { word: "Visual Studio Code", id: 21},
    { word: "Material Design", id: 22},
]

const Buzzwords = () => {
  return (
    <section id="buzzwords">
      <Layout>
        <h2>I'm Familiar With ...</h2>
        <ul>
            {buzzwords.map(buzzword => (
            <li className="pill" key={buzzword.id}>
                <span>{buzzword.word}</span>
            </li>
            ))}
        </ul>
      </Layout>
    </section>
  )
}

export default Buzzwords;
