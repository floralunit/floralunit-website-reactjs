import "../../common/styles/image-list.css"
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import TimezoneClock from "./TimeZoneClock";

const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(0);
};

export function RightSideBar() {
    const [apiData, setApiData] = useState({});
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&appid=438b999a2cdda651d74e5e84a4c0066d`;

    // Side effect
    useEffect(() => {
        fetch(weatherApiUrl)
            .then((res) => res.json())
            .then((data) => setApiData(data));
    }, [weatherApiUrl]);
    return (
        <aside className='sidebar-right'>
            <div className='box'>
                <h3>My world</h3>
                <div className='inner'>
                    <ol className="image-list">
                        <li><img src={require('../resources/pixels/jZvzhTA.gif')}/>
                            <Link to="/witch-house">Music</Link>
                            <ul>
                                <li><img src={require('../resources/pixels/398Yet2.gif')}
                                /> <Link to="/witch-house">Witch-House</Link>
                                </li>
                                <li><img src={require('../resources/pixels/zJZuQV8.gif')}
                                /> <Link to="/emo">Emo</Link>
                                </li>
                                <li><img src={require('../resources/pixels/rYgMZnK.gif')}
                                /> <Link to="/post-punk">Post-Punk</Link>
                                </li>
                            </ul>
                        </li>
                        <li><img src={require('../resources/pixels/1dfntQp.gif')}/>
                            <Link to="/movies">Fav movies</Link></li>
                        <li><img src={require('../resources/Frog_Croaking.gif')}/>Games
                            <ul>
                                <li><img src={require('../resources/pixels/Djab.png')}
                                /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Disco Djab (VK Game)</Link>
                                </li>
                                <li><img src={require('../resources/pixels/Mermaid.png')}
                                /> <Link to="/witchhouse">Trash Mermaid</Link>
                                </li>
                            </ul>
                        </li>
                        <li><img src={require('../resources/frogs/puff_froggy.gif')}/>
                            <Link to="/cats-frogs">My cats & froggies</Link></li>
                        <li><img src={require('../resources/Frog_Croaking.gif')}/>
                            <Link to="/witchhouse">Ancient Egyptian Dictionary</Link></li>
                        <li><img src={require('../resources/Frog_Croaking.gif')}/>
                            <Link to="/aesthetics">My aesthetics</Link></li>
                        <li><img src={require('../resources/Frog_Croaking.gif')}/>
                            <Link to="/photos">Photo Galery</Link></li>
                    </ol>
                </div>
            </div>
            <div className='box'>
                <div className='inner'>
                    <p><TimezoneClock timezone={+3} />
                        {apiData.main ? (
                            <>
                                &nbsp;
                                <img
                                    src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                    alt="weather status icon"
                                    style={{width: "25px"}}
                                />
                                {kelvinToFarenheit(apiData.main.temp)}&deg; C
                            </>
                        ) : (
                            <p>Loading</p>
                        )}
                        <br/>in Saint-Petersburg, Russia </p>
                </div>
            </div>
        </aside>
    );
}
