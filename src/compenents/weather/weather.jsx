import './weather.scss';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Weather = () => {
    const { city } = useParams();
    console.log(city);

    const [apiData, setApiData] = useState(null);
    const [datafound, setDatafound] = useState(false);
    const [imgfound, setImagfound] = useState(false);
    const [imgData, setimgData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const weatherResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
                );
                const weatherData = await weatherResponse.json();
                if (weatherData.cod === "200") {
                    setApiData(weatherData);
                    setDatafound(true);
                } else if (weatherData.cod === "404") {
                    alert('This City doesn\'t exist')
                }



                const unsplashResponse = await axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=HWU1dz4a25H4N81msjhWmRQZ6aPULw9hEKPSI5n0fnQ`);
                setimgData(unsplashResponse.data);
                setImagfound(true);
                setIsLoading(false);


            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [city]);

    console.log(apiData);
    console.log(imgData && imgData.results[0].urls.raw);


    const exa_city = apiData && apiData.city && apiData.city.name;
    const city_img = imgData && imgData.results && imgData.results.length > 0 && imgData.results[0].urls.raw;

    return (
        <>
            <div className='all-con'>
                <div className="con">
                    <img src={imgData && imgData.results && imgData.results.length > 0 && imgData.results[0].urls.raw} alt="" className="video" />
                    <div className="gradient-overlay"></div>
                    <div className="img">
                        <img
                            src={apiData ? require(`../../state/${apiData.list[0].weather[0].icon}.png`) : require("../../state/01d.png")}
                            alt="Weather Icon"
                        />
                    </div>
                    <div className="content">
                        <span className="today">Today</span><br />
                        <span className="city">{exa_city || 'Default City'}</span><br />
                        <span className="tem">Temperature: {apiData && Math.round(apiData.list[0].main.temp - 273.15)} °C</span><br />
                        <span className="cloud">Cloud: {apiData && apiData.list[0].weather[0].description}</span><br />
                    </div>
                </div>
            </div>

            <div className="sec-con">
            {apiData && apiData.list && apiData.list.map((item, idx) => {
    if (apiData && item.dt_txt.includes("00:00:00")) {
        const date = new Date(item.dt_txt.replace("00:00:00", ""));
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

        return (
            <div className="con" key={item.dt}>
                <>
                    <img src={imgData && imgData.results && imgData.results.length > 0 && imgData.results[0].urls.raw} alt="" className="video" />
                    <div className="gradient-overlay"></div>
                    <div className="img">
                        <img
                            src={apiData ? require(`../../state/${item.weather[0].icon}.png`) : require("../../state/01d.png")}
                            alt="Weather Icon"
                        />
                    </div>
                    <div className="content">
                        <span className="today">{item.dt_txt.replace("00:00:00", "")}</span><br />
                        <span className="city">{dayOfWeek}</span><br />
                        <span className="tem">Temperature: {Math.round(item.main.temp - 273.15)} °C</span><br />
                        <span className="cloud">Cloud: {item.weather[0].description}</span><br />
                    </div>
                </>
            </div>
        );
    }
    return null;
})}
            </div>
        </>
    )
}

export default Weather;
