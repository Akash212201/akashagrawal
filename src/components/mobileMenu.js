import { Link } from "react-router-dom"

const MobileMenu = ({ profileLink, profileInfo }) => {
  return (
    <>
      <div className="profile-content mm">
        <ul className="profile-info">
          {
            profileInfo.map((info, index) => (
              <li className="profile_item" key={index}>
                <div className="icon"><img src={info.icon} alt="" /></div>
                <div className="profile-info-text">
                  <p>{info.title}</p>
                  <p>{info.text}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="profile_links mm">
        <ul>
          {
            profileLink.map((src, index) => (
              <li><Link to={src.path} key={index}><img src={src.icon} alt="" /></Link></li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default MobileMenu