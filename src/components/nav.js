import { NavLink } from 'react-router-dom';
import './style/nav.css'
const Nav = () => {
    const navItems=[
        {
            path: "/about",
            name: "About"
        },
        {
            path: "/project",
            name: "Projects"
        },
        {
            path: "/resume",
            name: "Resume"
        },
        {
            path: "/contact",
            name: "Contact"
        },
        {
            path: "https://www.linkedin.com/in/akash-agrawal-763574243",
            name: "LinkedIn"
        },
    ];
    return (
        <div className="nav-menu">
            <ul className="menu-items">
                {
                    navItems.map((item,index)=>(
                        <li key={index} className="active"><NavLink to={item.path} >{item.name}</NavLink></li>
                    ))
                }
                </ul>
        </div>
    )
}
export default Nav