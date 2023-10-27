import React from "react";

const positions = [
    {
      org: "Women Who Code",
      position: "Tampa Chapter Co-Director",
      id: "v1",
    },
    {
        org: "Suncoast Developers Guild",
        position: "SDG Jr. Kids Class Co-Organizer and Instructor",
        id: "v2",
    },
    {
        org: "Tampa Bay Startup Week",
        position: "Conference Organizer – Web Development Track Captain",
        id: "v3",
    },
    {
        org: "Kappa Alpha Theta",
        position: "Eta Tau (University of Tampa) Advisor, Gamma (Butler University) Advisor",
        id: "v4",
    },
]

const Volunteering = () => {
  return (
    <article id="volunteering">
      <h3>Volunteering</h3>
      <ul>
          {positions.map(position => (
          <li key={position.id}>
            <h4>{position.org}</h4>
            <p>{position.position}</p>
          </li>
          ))}
      </ul>
    </article>
  )
}

export default Volunteering;