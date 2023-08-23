import "../../common/styles/image-list.css"
import React from "react";
import {Link} from "react-router-dom";

import MusicPlayer from "./MusicPlayer";
import {updates} from "./updates-list";
export function LeftSideBar() {
    const updatesList = updates.map(item =>
        <li>
            <p>
                <b>{item.date}:</b>
                {item.note}
            </p>
        </li>
    );
    return (
        <aside className='sidebar-left'>
            <div className='box'>
                <h3>Social Networks</h3>
                <div className='inner'>
                    <ol className="image-list">
                        <li><img src={require('../resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                        /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">VKontakte</Link>
                        </li>
                        <li><img src={require('../resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                        /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Telegram</Link>
                        </li>
                        <li><img src={require('../resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                        /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Instagram</Link>
                        </li>
                        <li><img src={require('../resources/pixels/yum-soot.gif')} style={{width: "15px"}}
                        /> <Link to="https://vk.com/app51640339_283385573" target="_blank" rel="noopener noreferrer">Steam</Link>
                        </li>
                        <li><img src={require('../resources/pixels/yum-soot.gif')} style={{width: "15px"}}
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
    );
}
