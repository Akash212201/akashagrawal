import { Link } from 'react-router-dom';
import './style/project.css'
const Project = () => {
    const projectImages = [
        {
            image: "./assests/images/project/1.png",
            title: "UserConnect",
            info: "Full stack profile page including OTP authentication, user authorization using Jwt tokens.",
            path: "https://github.com/Akash212201/UserConnect",
        },
        {
            image: "./assests/images/project/2.png",
            title: "FoodHub",
            info: "Web application for searching food recipes by name. MealDB API is used to fetch and display detailed recipes, enriching the user’s cooking journey with a wide variety of culinary options.",
            path: "https://github.com/Akash212201/FoodHub",
        },
        {
            image: "./assests/images/project/3.png",
            title: "Weather App",
            info: "A web based platform to provides real-time weather data implemented using HTML, CSS, and JavaScript.",
            path:"https://akash212201.github.io/weather-app/",
        },
        {
            image: "./assests/images/project/4.png",
            title: "Spotify Clone",
            info: "An educatoinal project build to showcase skills and improving functional knowledge of javaScript",
            path: "https://akash212201.github.io/spotify-clone"
        },
        {
            image: "./assests/images/project/5.png",
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