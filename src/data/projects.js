import {v4 as uuidv4} from "uuid"

export const projects = [
    {
        id: uuidv4(),
        title: "CovTracker",
        desc: "JavaScript app utilizing jQuery and local storage to allow a user to compare your current location and a searched Countries total Covid-19 Cases",
        github: "https://github.com/tbowenmsu/CovTracker",
        demo: "https://tbowenmsu.github.io/CovTracker/",
        image: "./images/CovTracker.png"
    },
    {
        id: uuidv4(),
        title: "ToDieInAustralia",
        desc: "This is a basic social media website that uses JavaScript, node.js, express.js, and MySQL to post and comment about things that could be harmful while visiting Australia",
        github: "https://github.com/tbowenmsu/todieinaustralia",
        demo: "https://todieinaustralia.herokuapp.com/",
        image: "./images/to die in australia.png"
    },
    {
        id: uuidv4(),
        title: "unfinished project 3",
        desc: "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit",
        github: "https://github.com/Curtisaurus/project-dev-lance",
        demo: "",
        image: "./images/project3placeholder.png"
    },
    {
        id: uuidv4(),
        title: "Basic HTML/CSS Profile",
        desc: "This is a portfolio page made only using HTML and CSS. It utilizes flexbox, media queries, and css variables to create an efficient UI with simple and clean code.",
        github: "https://github.com/tbowenmsu/Profile-Page",
        demo: "https://tbowenmsu.github.io/Profile-Page/",
        image: "./images/basicprofile.png"
    },
    {
        id: uuidv4(),
        title: "Weather Dashboard",
        desc: "A weather app utilizing moment.js, jQuery, api calls, JavaScript, and bootstrap. This page allows a traveler to look at the local weather for a chosen city.",
        github: "https://github.com/tbowenmsu/Weather-Dashboard",
        demo: "https://tbowenmsu.github.io/Weather-Dashboard/",
        image: "./images/weatherapp.png"
    },
    {
        id: uuidv4(),
        title: "WorkDay Planner",
        desc: "A simple calendar application that allows the user to save events for each hour of the workday. Utilizing jQuery, moment.js, JavaScript, HTML, and CSS. ",
        github: "https://github.com/tbowenmsu/Workday-Planner",
        demo: "https://tbowenmsu.github.io/Workday-Planner/",
        image: "./images/Workday Planner.png"
    },
]