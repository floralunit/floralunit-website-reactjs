import "./MainPage.css"

import React, {useState} from 'react'
import {Link} from "react-router-dom";

export function MainPage() {
    return (
        <div className="main-page">
            <div className='main-container'>
                <div className='flex-container'>
                    <aside className='sidebar-left'>
                        <div className='box'>
                            <h3>Left Sidebar</h3>
                            <div className='inner'>
                                <p>Here's some secondary information in the form of a sidebar.</p></div>
                        </div>
                        <div className='box'>
                            <div className='inner'>
                                <p>Another section! Now without dumb workarounds involving the &lt;hr&gt; tag!</p>
                            </div>
                        </div>
                        <div className='box'>
                            <h3>Social Networks</h3>
                            <div className='inner'>
                                <ol>
                                    <li><a>Vk</a></li>
                                    <li><a>Inst</a></li>
                                    <li><a>Tg</a></li>
                                    <li><a>Steam</a></li>
                                    <li><a>GitHub</a></li>
                                </ol>
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
                                <ol>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">About me</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">Music</Link>
                                        <ul>
                                            <li><img src={require('./resources/Frog_Croaking.gif')}
                                            /> <Link to="/witchhouse">Witch-House</Link>
                                            </li>
                                            <li><img src={require('./resources/Frog_Croaking.gif')}
                                            /> <Link to="/witchhouse">Emo</Link>
                                            </li>
                                            <li><img src={require('./resources/Frog_Croaking.gif')}
                                            /> <Link to="/witchhouse">Post-Punk</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">Movies</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">My cats & froggies</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">Hindu</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">Ancient Egypt</Link></li>
                                    <li><img src={require('./resources/Frog_Croaking.gif')}/>
                                        <Link to="/witchhouse">My aesthetic</Link></li>
                                </ol>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='inner'><p>Here is a big, wide full-width image, squished into the
                                sidebar!:</p>
                                <img/></div>
                        </div>
                    </aside>

                </div>
                <br/>
                <marquee>pipi pupu</marquee>
            </div>
        </div>
    );
}
