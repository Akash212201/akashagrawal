import { Link } from 'react-router-dom';
import bookquestImg from '../assests/project/bookquest.png'
import NutristarImg from '../assests/project/nutristar.png'
import chatAppImg from '../assests/project/chatApp.png'
import userConnectImg from '../assests/project/1.png'
import foodhubImg from '../assests/project/2.png'
import weatherImg from '../assests/project/3.png'
import spotifyImg from '../assests/project/4.png'
import tempImg from '../assests/project/5.png'
import './style/project.css'
const Project = () => {
    const projectImages = [
        {
            image: bookquestImg,
            title: "BookQuest",
            info: "EBook reading e-commerce web application having filtering, sorting, rating and review and user interaction features for enhanced user experience. Streamlined content management and sales tracking for efficient administration.",
            path: "https://bookquest-five.vercel.app/",
        },
        {
            image: NutristarImg,
            title: "Nutristar",
            info: "Ecommerce store homepage build using Reactjs to show the interating UI buidling skills using React js",
            path: "https://nutristar.vercel.app/",
        },
        {
            image: userConnectImg,
            title: "UserConnect",
            info: "Full stack profile page including OTP authentication, user authorization using Jwt tokens.",
            path: "https://github.com/Akash212201/UserConnect",
        },
        {
            image: chatAppImg,
            title: "ChatApp",
            info: "Chat application build using nodejs and socket io different users can come inside the chatroom and start interacting in real time.",
            path: "https://github.com/Akash212201/appchat",
        },
        {
            image: foodhubImg,
            title: "FoodHub",
            info: "Web application for searching food recipes by name. MealDB API is used to fetch and display detailed recipes, enriching the user’s cooking journey with a wide variety of culinary options.",
            path: "https://foodhub-ap.vercel.app",
        },
        {
            image: weatherImg,
            title: "Weather App",
            info: "A web based platform to provides real-time weather data implemented using HTML, CSS, and JavaScript.",
            path:"https://akash212201.github.io/weather-app/",
        },
        {
            image: spotifyImg,
            title: "Spotify Clone",
            info: "An educatoinal project build to showcase skills and improving functional knowledge of javaScript",
            path: "https://akash212201.github.io/spotify-clone"
        },
        {
            image: tempImg,
            title: "Temperature Convertor",
            info: "Web based app to convert tempature of any standard unit to another standard unit",
            path: "https://akash212201.github.io/temperature-converter"
        },
    ];
    return (
        <div className="skills-box">
            <h2>Academic Projects</h2>
            <div className="projects">
                {
                    projectImages.map((src, index) => (
                        <div className="project" key={index}>
                            <img src={src.image} alt="" />
                            <div class="overlay">
                                <h2 class="text-h1">{src.title}</h2>
                                <p class="text-p">{src.info}</p>
                                <Link class="link-a" to={src.path}> See Now</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Project