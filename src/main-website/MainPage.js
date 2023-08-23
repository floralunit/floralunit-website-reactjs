import "./MainPage.css"
import { updates } from './updates-list.js';

import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import TimezoneClock from "../common/components/TimeZoneClock";
import MusicPlayer from "../common/components/MusicPlayer";

const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(0);
};
export function MainPage() {
    const [apiData, setApiData] = useState({});
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&appid=438b999a2cdda651d74e5e84a4c0066d`;

    // Side effect
    useEffect(() => {
        fetch(weatherApiUrl)
            .then((res) => res.json())
            .then((data) => setApiData(data));
    }, [weatherApiUrl]);

    const updatesList = updates.map(item =>
        <li>
            <p>
                <b>{item.date}:</b>
                {item.note}
            </p>
        </li>
    );

    return (
        <div className="main-page">
            <div className='main-container'>
                <div className='flex-container'>
                    <aside className='sidebar-left'>
                        <div className='box'>
                            <h3>Social Networks</h3>
                            <div className='inner'>
                                <ol className="image-list">
                                    <li><img src={require('./resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                                    /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">VKontakte</Link>
                                    </li>
                                    <li><img src={require('./resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                                    /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Telegram</Link>
                                    </li>
                                    <li><img src={require('./resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                                    /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Instagram</Link>
                                    </li>
                                    <li><img src={require('./resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                                    /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Steam</Link>
                                    </li>
                                    <li><img src={require('./resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                                    /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">GitHub</Link>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='inner'><p>Now Playing</p>
                                <MusicPlayer/>
                            </div>
                        </div>
                        <div className='box'>
                            <h3>Updates</h3>
                            <div className='inner'>
                                <ol className="updates-list">{updatesList}</ol>
                            </div>
                        </div>
                    </aside>

                    <div className='main'>
                        <div className='box'>
                            <h2 id='section-1'>Welcome to my Website!</h2>
                            <div className='inner'>
                                <p>This is the main div.</p>
                                <p>Honestly this page is mostly just a rehash of the WP-esque "Header Opacity"
                                    stylesheet from a few months ago. I dunno what I'm doing, just having fun. I
                                    guess.</p>

                                <p>This is a paragraph! Here's how you make a link: <a
                                    href="https://neocities.org">Neocities</a>.</p>

                                <p>Here's how you can make <strong>bold</strong> and <em>italic</em> text.</p>

                                <p>Here's how you can add an image:</p>
                                <img/>

                                <p>Here is a big, wide full-width image:</p>
                                <img/>

                                <p>Here's how to make a list:</p>

                                <ul>
                                    <li>First thing</li>
                                    <li>Second thing</li>
                                    <li>Third thing</li>
                                </ul>
                                <p>

                                </p>
                                <p>To learn more HTML/CSS, check out these <a
                                    href="https://neocities.org/tutorials">tutorials</a>!</p>
                            </div>

                        </div>
{/*                                                <div className='box'>
                            <h2 id='section-2'>Title 2</h2>
                            <div className='inner'>

                            </div>
                        </div>
                        <div className='box'>
                            <h2 id='section-3'>Section 3</h2>
                            <div className='inner'>

                            </div>
                        </div>*/}
                    </div>

                    <aside className='sidebar-right'>
                        <div className='box'>
                            <h3>My world</h3>
                            <div className='inner'>
                                <ol className="image-list">
                                    <li><img src={require('./resources/pixels/jZvzhTA.gif')}/>
                                        <Link to="/witch-house">Music</Link>
                                        <ul>
                                            <li><img src={require('./resources/pixels/398Yet2.gif')}
                                            /> <Link to="/witch-house">Witch-House</Link>
                                            </li>
                                            <li><img src={require('./resources/pixels/zJZuQV8.gif')}
                                            /> <Link to="/emo">Emo</Link>
                                            </li>
                                            <li><img src={require('./resources/pixels/rYgMZnK.gif')}
                                            /> <Link to="/post-punk">Post-Punk</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><img src={require('./resources/pixels/1dfntQp.gif')}/>
                                        <Link to="/movies">Fav movies</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>Games
                                        <ul>
                                            <li><img src={require('./resources/pixels/Djab.png')}
                                            /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Disco Djab (VK Game)</Link>
                                            </li>
                                            <li><img src={require('./resources/pixels/Mermaid.png')}
                                            /> <Link to="/witchhouse">Trash Mermaid</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><img src={require('./resources/frogs/puff_froggy.gif')}/>
                                        <Link to="/cats-frogs">My cats & froggies</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">Ancient Egyptian Dictionary</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/aesthetics">My aesthetics</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
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

                </div>
                <br/>
                <marquee>pipi pupu</marquee>
            </div>
        </div>
    );
}
