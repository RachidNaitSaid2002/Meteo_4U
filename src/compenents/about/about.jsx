import './about.scss';
import img from '../../Media/rainy-day-3443977.jpg';
import img2 from '../../Media/pexels-egor-kamelev-813871.jpg';
import img3 from '../../Media/pexels-sakina-fayyaz-19030044.jpg';
const About = () => {
    return (
        <>
            <section class="hero">
                <div class="hero-content">
                    <h1>About Us</h1>
                </div>

            </section>
            <div className="allcon">
                <img src={img2} alt="" />
                <p>Our website, Weather4U, is your ultimate destination for accurate and up-to-date weather information. With a user-friendly interface and real-time data, we provide comprehensive forecasts, interactive maps, and personalized weather alerts, ensuring you stay prepared for any weather condition that comes your way. Experience the convenience of Weather4U and never be caught off guard by the elements again.</p>
            </div>
            <div className="allcon">
                <p>At Weather4U, we are dedicated to delivering a seamless weather experience tailored just for you. Our website offers a wealth of meteorological resources, including detailed forecasts, temperature trends, precipitation maps, and more. Whether you're planning a trip, organizing outdoor activities, or simply staying informed, Weather4U provides the essential tools and insights to make informed decisions based on the latest weather updates. Trust Weather4U to be your reliable companion in navigating the ever-changing weather patterns.</p>
                <img src={img3} alt="" />
            </div>

        </>
    )
}

export default About;