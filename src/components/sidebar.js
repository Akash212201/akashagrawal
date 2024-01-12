import {useState} from 'react';
import MobileMenu from './mobileMenu';
import './style/sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const profileInfo = [
        {
            icon: "./assests/images/sidenav/email.svg",
            title: "EMAIL",
            text: "agrawal.138658@gmail.com",
        },
        {
            icon: "./assests/images/sidenav/phone.svg",
            title: "PHONE",
            text: "+91 914915780",
        },
        {
            icon: "./assests/images/sidenav/college.svg",
            title: "COLLEGE",
            text: "KNIT Sultanpur"
        },
        {
            icon: "./assests/images/sidenav/location.svg",
            title: "LOCATION",
            text: "Aligarh, UP 202001"
        },
    ];
    const profileLink = [
        {
            icon: "./assests/images/sidenav/github.svg",
            path: "https://github.com/Akash212201/"
        },
        {
            icon: "./assests/images/sidenav/email.svg",
            path: "!#"
        },
        {
            icon: "./assests/linkedin.png",
            path: "https://www.linkedin.com/in/akash-agrawal-763574243"
        },
    ];
    const [showMobileMenu, setMobileMenu]= useState(false);
    
    return (
        <div className="sidebar">
            <div className="profile">
                <img src="./assests/C_Phooto.png" alt="" />
                <h3 className="name">Akash Agrawal</h3>
                <p className="title">Full Stack Developer</p>
                <a href="Akash_Agrawal_CV.pdf" download="Akash_Agrawal_CV.pdf">
                <button className="btn">Download Resume</button>
                </a>
                <div className="mybtn" onClick={()=>setMobileMenu(!showMobileMenu)}><img src="./assests/menu-down.svg" alt="" /></div>
            </div>
            <div className="seperater"></div>
            <div className="mobile profile-content">
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
            <div className=" mobile profile_links">
                <ul>
                    {
                        profileLink.map((src, index) => (
                            <li key={index}><Link to={src.path}><img src={src.icon} alt="" /></Link></li>
                        ))
                    }
                </ul>
            </div>
        {showMobileMenu && <MobileMenu profileLink={profileLink} profileInfo={profileInfo} />}
        </div>
    )
}

export default Sidebar