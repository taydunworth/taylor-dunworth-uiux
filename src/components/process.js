import * as React from "react";
import Layout from "./layout";
import "../styles/styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { scroller } from 'react-scroll';

library.add(faLongArrowAltDown);

const process = [
    { 
        title: "Kickoff",
        id: 1,
        description: "We need to talk. Really though, this is where I like to sit down with you and get all of the details, so we can collaborate efficiently and effectively. We'll go through what the challenge is, the end goal for the user, and the proposed timeline.",
    },
    { 
        title: "Research",
        id: 2,
        description: "Now that we've identified the problem, it's time for me to disover the solution. I'll do this by reviewing user patterns that fit with potential solutions, researching resources (libraries, frameworks, etc.) and interviewing users for input.",
    },
    { 
        title: "Plan",
        id: 3,
        description: "I can't do it all – well, in some cases I can. But in a team setting, I'll start doling out responsibilities amongst the team and timelines for each member to do their part to continue the process smoothly.",
    },
    { 
        title: "Design",
        id: 4,
        description: "If we're starting from scratch sans design system, I'll wireframe the project to provide a basic understanding of the interface and expected interactions. If there is a design system, we'll start with a low-fidelity mockup of the project to provide more context for the interface and how it fits into the current product. Next, we'll be working with an interactive high-fidelity prototype to provide full context for the stakeholders, users, and developers.",
    },
    { 
        title: "Test",
        id: 5,
        description: "If we're in a perfect world where timelines allow and users are readily available, I'll provide the high-fidelity prototype to select users for research purposes. From there, changes will be made to the prototype based on user feedback.",
    },
    { 
        title: "Develop",
        id: 6,
        description: "Once the design has a stamp of approval, I'll collaborate with front-end and back-end developers to bring the prototype to life via code using WCAG guidelines for a11y and best practices for clean code. In many cases, I'll provide the front-end code myself.",
    },
    { 
        title: "Test (Again)",
        id: 7,
        description: "The testing never ends! To make sure the project/feature/etc. is its absolute best, I'll monitor its usage by using Google Analytics, heat-mapping tools, surveys, etc. and make changes as needed to better fit users’ needs.",
    },
    { 
        title: "Celebrate",
        id: 8,
        description: "There's no rinse and repeat without a little celebration!",
    },
]

const Process = () => {  
    return (
        <article id="process">
            <Layout>
                <h2>My <span className="script">Ideal</span> Process</h2>
                <ul>
                    {process.map(step => (
                    <li className="process-step-box" key={step.id}>
                        <h3>{step.title}</h3>
                        <span>{step.description}</span>
                        <FontAwesomeIcon className="process-arrow" icon="long-arrow-alt-down" />
                    </li>
                    ))}
                </ul>
            </Layout>
        </article>
    )
}

export default Process;
