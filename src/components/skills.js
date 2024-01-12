import React from 'react'

const Skills = () => {
    const frontItems=[
        "./assests/images/skills/html.svg",
        "./assests/images/skills/javascript.svg",
        "./assests/images/skills/react.svg",
        "./assests/images/skills/redux.svg",
        "./assests/images/skills/tailwindcss.svg",
        "./assests/images/skills/bootstrap.svg",
    ]
    const skillsData = [
        {
          title: "Language",
          items: [
            "./assests/images/skills/c++.svg",
            "./assests/images/skills/java.svg",
            "./assests/images/skills/javascript.svg",
          ],
        },
        {
          title: "Backend",
          items: [
            "./assests/images/skills/node.svg",
            "./assests/images/skills/express.svg",
          ],
        },
        {
          title: "DataBase",
          items: ["./assests/images/skills/mongodb.svg"],
        },
        {
          title: "Other tools/Technologies",
          items: [
            "./assests/images/skills/postman.svg",
            "./assests/images/skills/github.svg",
          ],
        },
    ];
  return (
    <>
    
        <div className="b">
            <h2>Fronted</h2>
            <div className="fronted">
                {
                    frontItems.map((item,idx)=>(
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