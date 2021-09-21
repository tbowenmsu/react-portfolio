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
        title: "DevLancer",
        desc: "Do you have an awesome idea for an app, but lack team members and funding? Well then this is the site for you! Come to devLance share your project with investors looking to fund development. A developer without a project in mind no problem. Search for teams in need of additional developers. The perfect site for investors in search of projects to invest in. Where ever you come from in the tech world there is a home for you at devLance.",
        github: "https://github.com/Curtisaurus/project-dev-lance",
        demo: "https://dev-lance.herokuapp.com/",
        image: "./images/devLancer.png"
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
        title: "Book Search Engine",
        desc: "A website for avid readers. It utilizes a search option to find books and add them to your profile to be saved for later. It utilizes MogoDB, Apollo, React, Node.js, and GraphQL",
        github: "https://github.com/tbowenmsu/book-search-engine",
        demo: "https://infinite-plains-01274.herokuapp.com/",
        image: "./images/book-search.png"
    },
]