const Skill = ({ skills }) => {
    return (
        <div className="skill">
            <div className="skill-icon"><img src={skills.img} alt="" /></div>
            <div className="skill-info">
                <h3>{skills.title}</h3>
                <p>{skills.text}</p>
            </div>
        </div>
    )
}

export default Skill