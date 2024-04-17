import "../../common/styles/image-list.css"
import React from "react";
import { Link } from "react-router-dom";
import MusicPlayer from "./music-player/MusicPlayer";
import { updates } from "./updates-list";
import "../../common/styles/crt-lines.css"
import "./loading-text.css"
import yum from "../resources/pixels/yum-soot.gif"
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
        <aside className='sidebar-left' >
            <div className='box' style={{ height: "165px" }}>
                <h3>Socials</h3>
                <div className='inner' >
                    <ol className="image-list">
                        <li style={{height:'auto'}}><img src={yum} title="https://artwork.neocities.org" style={{ width: "15px", marginRight:'auto'  }}
                        /> <Link to="https://vk.com/floralunit" target="_blank" rel="noopener noreferrer">VKontakte</Link>
                        </li>
                        <li style={{height:'auto'}}><img src={yum} title="https://artwork.neocities.org" style={{ width: "15px", marginRight:'auto'  }}
                        /> <Link to="https://t.me/floralunit" target="_blank" rel="noopener noreferrer">Telegram</Link>
                        </li>
                        <li style={{height:'auto'}}><img src={yum} title="https://artwork.neocities.org" style={{ width: "15px", marginRight:'auto'  }}
                        /> <Link to="https://www.instagram.com/floral.unit" target="_blank" rel="noopener noreferrer">Instagram</Link>
                        </li>
                        <li style={{height:'auto'}}><img src={yum} title="https://artwork.neocities.org" style={{ width: "15px", marginRight:'auto'  }}
                        /> <Link to="https://www.youtube.com/@floralunit" target="_blank" rel="noopener noreferrer">YouTube</Link>
                        </li>
                        <li style={{height:'auto'}}><img src={yum} title="https://artwork.neocities.org" style={{ width: "15px", marginRight:'auto' }}
                        /> <Link to="https://steamcommunity.com/id/floralunit" target="_blank" rel="noopener noreferrer">Steam</Link>
                        </li>
                        <li style={{height:'auto'}}><img src={yum} title="https://artwork.neocities.org" style={{ width: "15px", marginRight:'auto'  }}
                        /> <Link to="https://github.com/floralunit" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='box' style={{ height: "171px" }}>
                <div className='inner' >
                    <div id="preloader">
                        <div id="text">Now Playing</div>
                        <div className="wrapper" id="firstWrap">
                            <div className="dot"></div>
                        </div>
                        <div className="wrapper" id="secondWrap">
                            <div className="dot"></div>
                        </div>
                        <div className="wrapper" id="thirdWrap">
                            <div className="dot"></div>
                        </div>
                        <div className="wrapper" id="fourthWrap">
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div >
                        <MusicPlayer />
                    </div>
                </div>
            </div>
            <div className='box' style={{ height: "162px" }}>
                <h3>Updates</h3>
                <div className='inner' >
                    <ol className="updates-list">{updatesList}</ol>
                </div>
            </div>
        </aside>
    );
}
