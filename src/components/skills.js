import React from 'react'
import Skill from './skill';

const Skills = () => {
    const skills=[
        {   
            title: "HTML/CSS",
            text: "Proficient in crafting structured HTML and stylish CSS for creating visually appealing and user-friendly web pages. Capable of building responsive designs and optimizing user experiences.",
            img: "./assests/images/skills/html.svg"
        },
        {   
            title: "JavaScript",
            text: "Intermediate JavaScript developer specializing in interactive frontend elements. Experienced in DOM manipulation and asynchronous operations.",
            img: "./assests/images/skills/javascript.svg"
        },
        {   
            title: "React",
            text: "With an intermediate proficiency in React, I am adept at creating dynamic and responsive user interfaces.",
            img: "./assests/images/skills/react.svg"
        },
        {   
            title: "Redux",
            text: "Redux developer with a strong grasp of state management. Skilled in setting up Redux stores, actions, and reducers to efficiently manage complex application states.",
            img: "./assests/images/skills/redux.svg"
        },
        {   
            title: "Node JS",
            text: "Intermediate Node.js developer with a focus on building scalable server-side applications and APIs using event-driven architecture.",
            img: "./assests/images/skills/node.svg"
        },
        {   
            title: "C++",
            text: "Beginner in C++, exploring its potential for high-performance applications. Familiar with syntax and eager to contribute and learn more.",
            img: "./assests/images/skills/c++.svg"
        },
        {   
            title: "Java",
            text: "Beginner in Java, exploring its potential for high-performance applications. Familiar with syntax and eager to contribute and learn more.",
            img: "./assests/images/skills/java.svg"
        },
    ];
  return (
    <div className="skills">
        {
            skills.map(skills=><Skill key={skills.title} skills={skills} />)
        }
    </div>
  )
}

export default Skills