import React from "react";

const events = [
    {
        title: "Understanding and Implementing Web Accessibility",
        host: "Presence",
        id: "e1",
    },
    {
        title: "Intro to XAML and Xamarin.Forms",
        host: "Suncoast Developers Guild",
        id: "e2",
    },
    {
        title: "Intro to Public Speaking",
        host: "Suncoast Developers Guild",
        id: "e3",
    },
    {
        title: "Intro to CSS",
        host: "Suncoast Developers Guild",
        id: "e4",
    },
    {
        title: "Modern Features of Javascript: Foundations of ECMAScript (ES6+)",
        host: "Women Who Code Tampa",
        id: "e5",
    },
    {
        title: "Responsive Layouts with Bootstrap, Flexbox, and CSS Grid",
        host: "JoomlaDay Florida",
        id: "e6",
    },
    {
        title: "Should Designers Code?",
        host: "Suncoast.JS",
        id: "e7",
    },
    {
        title: "'Just Do This,' 'It’s Easy,' and Other Ways You’re Discouraging Your Developers",
        host: "Suncoast.JS",
        id: "e8",
    },
    {
        title: "Breaking Up with Design",
        host: "CMS Summit",
        id: "e9",
    },
]

const SpeakingEvents = () => {
  return (
    <article id="speaking">
        <h3>Past Speaking Events</h3>
        <ul>
            {events.map(speakingEvent => (
            <li key={speakingEvent.id}>
                <h4>{speakingEvent.title}</h4>
                <h5>Hosted by: <span>{speakingEvent.host}</span></h5>
            </li>
            ))}
        </ul>
    </article>
  )
}

export default SpeakingEvents;