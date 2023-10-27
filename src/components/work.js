import * as React from "react";
import Layout from "./layout";
import "../styles/styles.scss";

const work = [
    { 
        name: "Project 1",
        id: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
        backgroundColor: "#F3E1D9",
        gridRowStart: 1,
        gridRowEnd: 1,
        gridColumnStart: 1,
        gridColumnEnd: 6,
    },
    { 
        name: "Project 2",
        id: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
        backgroundColor: "#EA9794",
        gridRowStart: 1,
        gridRowEnd: 1,
        gridColumnStart: 6,
        gridColumnEnd: 10,
    },
    { 
        name: "Project 3",
        id: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
        backgroundColor: "#21323E",
        gridRowStart: 2,
        gridRowEnd: 2,
        gridColumnStart: 1,
        gridColumnEnd: 4,
    },
    { 
        name: "Project 4",
        id: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
        backgroundColor: "#F3E1D9",
        gridRowStart: 2,
        gridRowEnd: 2,
        gridColumnStart: 4,
        gridColumnEnd: 7,
    },
    { 
        name: "Project 5",
        id: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
        backgroundColor: "#21323E",
        gridRowStart: 2,
        gridRowEnd: 2,
        gridColumnStart: 7,
        gridColumnEnd: 10,
    },
    { 
        name: "Project 6",
        id: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
        backgroundColor: "#EA9794",
        gridRowStart: 3,
        gridRowEnd: 3,
        gridColumnStart: 1,
        gridColumnEnd: 6,
    },
    { 
        name: "Project 7",
        id: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
        backgroundColor: "#F3E1D9",
        gridRowStart: 3,
        gridRowEnd: 3,
        gridColumnStart: 6,
        gridColumnEnd: 10,
    },
]

const Work = () => {
  return (
    <div id="work">
        <Layout>
            <h2>My Work</h2>
            <hr role="none" />
            <ul className="grid-container">
                {work.map(project => (
                <li className="portfolio-item"
                    style={{
                        backgroundColor: `${project.backgroundColor}`,
                        gridRowStart: `${project.gridRowStart}`,
                        gridRowEnd: `${project.gridRowEnd}`,
                        gridColumnStart: `${project.gridColumnStart}`,
                        gridColumnEnd: `${project.gridColumnEnd}`}}
                        key={project.id}>
                    <h3>{project.name}</h3>
                    <span>{project.description}</span>
                </li>
                ))}
            </ul>
        </Layout>
    </div>
  )
}

export default Work;
