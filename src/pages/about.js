import Skills from '../components/skills';
import './style/about.css';
const About = () => {
    return (
        <>
            <div className="about">
                <h1>About Me</h1>
                <p className="bio">Final-year MCA student at KNIT Sultanpur with a passion for web development</p>
                <p>Seeking opportunities to drive business decisions through development. Strong foundation in the field, constantly improving skills and knowledge. Open to internships and full-time positions in software development. Let's connect and explore how I can contribute to your organization's success.</p>
            </div>
            <div className="skills-box">
                <h1>Skills</h1>
                <Skills/>
            </div>
        </>
    )
}

export default About