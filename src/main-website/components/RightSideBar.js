import "../../common/styles/image-list.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TimezoneClock from "./TimeZoneClock";
import imgp from "../../common/images/backgrounds/leaffall.gif"

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
            <div className='box' style={{ height: "429px" }}>
                <h3>My world</h3>
                <div className='inner' style={{ display: "flex", alignItems: "center", height: "92%" }}>
                    <ol className="image-list">
                        <li><img src={require("../resources/pixels/pixelplant3anim.gif")} />
                            <Link to="/">about</Link></li>
                        <li className="icon-link"><img src={require('../resources/pixels/jZvzhTA.gif')} />music
                            {/* <Link to="/witch-house">music</Link> */}
                            <ul>
                                <li><img src={require('../resources/pixels/398Yet2.gif')}
                                /> <Link to="/witch-house" target="_blank" rel="noreferrer">witch-house</Link>
                                </li>
                                <li><img src={require('../resources/pixels/zJZuQV8.gif')}
                                /> <Link to="/emo" target="_blank" rel="noreferrer">emo</Link>
                                </li>
                                <li><img src={require('../resources/images/doomer.png')} />post-punk
                                    {/* <Link to="/post-punk" target="_blank" rel="noreferrer">post-punk</Link> */}
                                </li>
                            </ul>
                        </li>
                        <li><img src={require('../resources/pixels/1dfntQp.gif')} />
                            <Link to="/movies">fav movies</Link></li>
                        <li><img src={require('../resources/pixels/Animals_Icon.webp')} />
                            <Link to="/games">games</Link></li>
                        <li><img src={require('../resources/pixels/eye.png')} />
                            <Link to="https://ancient-egyptian-dictionary.vercel.app/" target="_blank" rel="noreferrer">egyptian dictionary</Link></li>
                        <li><img src={require('../resources/pixels/puff_froggy.gif')} />
                            <Link to="/cats-frogs">my cats & froggies</Link></li>
                        <li><img src={require('../resources/pixels/skellygreen.gif')} style={{ width: '18px', margin: '0 5px 0 0' }} />
                            <Link to="/aesthetics">my aesthetics</Link></li>
                        <li><img src={require('../resources/pixels/whv7P5w.gif')} />
                            <Link to="/films-lofi">films & lofi</Link></li>
                        <li><img src={require('../resources/pixels/tumblr_inline_ml15w1FyIN1qz4rgp.gif')} />
                            <Link to="/photos">my photo gallery</Link></li>
                        <li><img src={require("../resources/pixels/wXsrEGT.gif")} />
                            <Link to="/videos">my video gallery</Link></li>
                        <li><img src={require('../resources/pixels/windows.gif')} />
                            <Link to="/web">web stuff</Link></li>
                        <li><img src={require("../resources/pixels/tEJ5Dt8.gif")} style={{ width: '15px', margin: '2px 0 0 2px' }}
                        /> <Link to="/bgs-icons" style={{ fontSize: '12px' }}>bgs, icons collection</Link>
                        </li>

                    </ol>
                </div>
            </div>
            <div className='box' style={{ height: "80px" }}>
                <div className='box-weather'>
                    <div className='inner' >
                        <b><TimezoneClock timezone={+3} /><br />
                            {apiData.main ? (
                                <>
                                    {/*                                    &nbsp;
                                    &nbsp;*/}
                                    <img
                                        src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                        alt="weather status icon"
                                        style={{ width: "25px" }}
                                    />
                                    {kelvinToFarenheit(apiData.main.temp)}&deg; C
                                </>
                            ) : (
                                <p>Loading</p>
                            )}
                            <br /><pipa style={{ fontSize: "smaller", fontWeight: "normal" }}>in Saint-Petersburg, Russia </pipa></b>
                    </div>
                </div>
            </div>
        </aside>
    );
}
