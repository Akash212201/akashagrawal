import './style/resume.css'

const Resume = () => {
    const education = [
        {
            place: "Kamla Nehru Institute of Technology, Sultanpur",
            time: "2022-2024",
            info: "Master of Computer Applications",
            score: "8.5 CGPA"
        },
        {
            place: "DS Degree College, Aligarh",
            time: "2019-2022",
            info: "Bachelor of Computer Applications",
            score: "Percentage 76.6"
        },
        {
            place: "NaurangiLal Govt. Inter College, Aligarh",
            time: "2019",
            info: "Intermediate",
            score: "Percentage 75.2"
        },
    ];
    return (
        <div className="resume about">
            <h2>Resume</h2>
            <div className="profile_item">
                <div className="icon"><img src="./assests/images/book.svg" alt="" /></div>
                <div className="profile-info-text">
                    <h1>Education</h1>
                </div>
            </div>
            <ol>
                {
                    education.map((edu, index) => (
                        <li key={index}>
                            <div className="info-box">
                                <h4 className="place">{edu.place} </h4>
                                <span>{edu.time}</span>
                                <p className="place-info">{edu.info} <br /> {edu.score}</p>
                            </div>
                        </li>
                    ))
                }
            </ol>
            <div className="profile_item">
                <div className="icon"><img src="./assests/images/book.svg" alt="" /></div>
                <div className="profile-info-text">
                    <h1>Experience</h1>
                </div>
            </div>
            <ol>
                <li>
                    <div className="info-box">
                        <h4 className="place">Web Developer Intern | ineuBytes </h4>
                        <span>June 2023 - July 2023</span>
                        <p className="place-info">Worked as a Frontend web developer intern in web development implementations using HTML, CSS and JavaScript</p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Resume