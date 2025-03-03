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
            <div className='box' style={{ height: "454px" }}>
                <h3>My world</h3>
                <div className='inner' style={{ padding: '0 5px', margin: '0px', width: '100%' }}>
                    <ol className="image-list" style={{ display: "table", alignItems: "center", width: '100%' }}>
                        <li><img src={require("../resources/pixels/pixelplant3anim.gif")} />
                            <Link to="/" style={{ verticalAlign: '4px' }}>about</Link></li>
                        <li className="icon-link"><img src={require('../resources/pixels/jZvzhTA.gif')} />music</li>
                        {/* <Link to="/witch-house">music</Link> */}
                        <li style={{ margin: '0 20px' }}><img src={require('../resources/pixels/398Yet2.gif')}
                        /> <Link to="/witch-house" target="_blank" rel="noreferrer" style={{ verticalAlign: '3px', margin: '0 0 0 -3px' }}>witch-house</Link>
                        </li>
                        <li style={{ margin: '0 20px' }}><img src={require('../resources/pixels/zJZuQV8.gif')}
                        /> <Link to="/emo" target="_blank" rel="noreferrer" style={{ verticalAlign: '4px', margin: '0 0 0 -3px' }}>emo</Link>
                        </li>
                        <li style={{ margin: '0 20px' }}><img src={require('../resources/images/doomer.png')} />post-punk
                            {/* <Link to="/post-punk" target="_blank" rel="noreferrer">post-punk</Link> */}
                        </li>
                        <li><img src={require('../resources/pixels/1dfntQp.gif')} />
                            <Link to="/movies" style={{ verticalAlign: '5px' }}>fav movies</Link></li>
                        <li><img src={require('../resources/pixels/Animals_Icon.webp')} />
                            <Link to="/games" style={{ verticalAlign: '4px' }}>games</Link></li>
                        <li><img src={require('../resources/pixels/eye.png')} />
                            <Link to="https://ancient-egyptian-dictionary.vercel.app/" target="_blank" rel="noreferrer" style={{ verticalAlign: '3px' }}>egyptian dictionary</Link></li>
                        <li><img src={require('../resources/pixels/puff_froggy.gif')} />
                            <Link to="/cats-frogs" style={{ verticalAlign: '4px' }}>my cats & froggies</Link></li>
                        <li><img src={require('../resources/pixels/skellygreen.gif')} style={{ width: '18px', margin: '0 5px 0 0' }} />
                            <Link to="/aesthetics" style={{ verticalAlign: '4px', margin: '0 0 0 3px' }}>my aesthetics</Link></li>
                        <li><img src={require('../resources/pixels/whv7P5w.gif')} />
                            <Link to="/films-lofi" style={{ verticalAlign: '3px' }}>films & lofi</Link></li>
                        <li><img src={require('../resources/pixels/tumblr_inline_ml15w1FyIN1qz4rgp.gif')} />
                            <Link to="/photos" style={{ verticalAlign: '5px' }}>my photo gallery</Link></li>
                        <li><img src={require("../resources/pixels/wXsrEGT.gif")} />
                            <Link to="/videos" style={{ verticalAlign: '4px' }}>my video gallery</Link></li>
                        <li><img src={require("../resources/pixels/AedbD8l.gif")} />
                            <Link to="/poetry" style={{ verticalAlign: '4px', fontSize: '12px', letterSpacing: '-2px' }}>моя 'поэзия'</Link></li>
                        <li><img src={require('../resources/pixels/windows.gif')} />
                            <Link to="/web" style={{ verticalAlign: '4px' }}>web stuff</Link></li>
                        <li><img src={require("../resources/pixels/tEJ5Dt8.gif")} style={{ width: '15px', margin: '2px 0 0 3px' }}
                        /> <Link to="/bgs-icons" style={{ fontSize: '12px', verticalAlign: '1.5px' }}>bgs, icons collection</Link>
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
