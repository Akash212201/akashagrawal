import React from 'react'
import HTMLImg from "../assests/skills/html.svg"
import CSSImg from "../assests/skills/CSS.svg"
import jsImg from "../assests/skills/javascript.svg"
import reactImg from "../assests/skills/react.svg"
import reduxImg from "../assests/skills/redux.svg"
import tailwindImg from "../assests/skills/tailwindcss.svg"
import bootstrapImg from "../assests/skills/bootstrap.svg"

import cppImg from "../assests/skills/c++.svg"
import javaImg from "../assests/skills/java.svg"

import nodeImg from '../assests/skills/node.svg'
import expressImg from '../assests/skills/express.svg'
import mongoImg from '../assests/skills/mongodb.svg'

import postmanImg from '../assests/skills/postman.svg'
import gitImg from '../assests/skills/github.svg'

const Skills = () => {
  const frontItems = [
    HTMLImg, CSSImg, jsImg, reactImg, reduxImg, tailwindImg, bootstrapImg,
  ]
  const skillsData = [
    {
      title: "Language",
      items: [
        cppImg,
        javaImg,
        jsImg,
      ],
    },
    {
      title: "Backend",
      items: [
        nodeImg,
        expressImg,
      ],
    },
    {
      title: "DataBase",
      items: [mongoImg],
    },
    {
      title: "Other tools/Technologies",
      items: [
        postmanImg,
        gitImg,
      ],
    },
  ];
  return (
    <>

      <div className="b">
        <h2>Frontend</h2>
        <div className="frontend">
          {
            frontItems.map((item, idx) => (
              <div key={idx} className="frontskills">
                <img src={item} alt="" />
              </div>
            ))
          }
        </div>
      </div>
      <div>
        {skillsData.map((section, idx) => (
          <div key={idx}>
            <h2>{section.title}</h2>
            <div className="backend">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="frontskills">
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills