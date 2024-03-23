import "../MainWebsite.css"
import "../../common/styles/gallery.css"
import "../../common/styles/cute-white-frame.css"

import React, { useEffect, useState } from 'react'
import {
    CLOUD1_BACKGROUND,
    CLOUD_BACKGROUND,
    COPPER_BACKGROUND, EMO1_BACKGROUND, EMO_BACKGROUND,
    FLOWER1_BACKGROUND,
    FLOWER2_BACKGROUND,
    FLOWER3_BACKGROUND,
    FLOWER_BACKGROUND, HINDU1_BACKGROUND,
    HINDU_BACKGROUND,
    MAIN_BACKGROUND,
    MARBLE1_BACKGROUND,
    MARBLE_BACKGROUND,
    PINK_BACKGROUND,
    RED_BACKGROUND,
    SKY1_BACKGROUND,
    SKY_BACKGROUND,
    SUN_BACKGROUND,
    TRIPPY_BACKGROUND,
    WATER1_BACKGROUND,
    WATER_BACKGROUND,
    WHITE_BACKGROUND,
    CLOTH_BACKGROUND,
    BLUEDOTS_BACKGROUND,
    SEXY_BACKGROUND,
    FRILL_BACKGROUND,
    HYDRAGEA_BACKGROUND,
    API_URL,
    MEIMAID_SEA_BACKGROUND,
    STARDEWVALLEY_BACKGROUND,
    BEARS_BACKGROUND,
    BUBBLES2_BACKGROUND,
    BUBBLES_BACKGROUND,
    PINKCLOUDS_BACKGROUND,
    DAISY_BACKGROUND,
    DARKGRASS_BACKGROUND
} from '../../global-const';

export function GamesPage() {
    document.documentElement.style.removeProperty('--box-text-color');
    document.documentElement.style.setProperty('--box-header-color', `url(${DARKGRASS_BACKGROUND})`);
    document.documentElement.style.setProperty('--main-background', `url(${STARDEWVALLEY_BACKGROUND})`);
    document.documentElement.style.setProperty('--box-background', `#ffebee`);
    return (
        <div className='main' style={{ maxWidth: "1000px" }}>
            <div className="box-f-kado">
                <div className="box-top-f-kado">
                    <div className="u01-f-kado"></div>
                </div>
                <div className="box-center-f-kado">
                    <div className="box-inner-f-kado" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.4em', fontWeight: 'bold' }}>
                        Games I made by myself or in team
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={require('../resources/tabs_dividers_pixels/e13-apple-line.gif')}
                                style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                title='https://foollovers.com' />
                        </div>
                    </div>
                </div>
                <div className="box-bottom-f-kado">
                    <div className="s01-f-kado"></div>
                </div>
            </div>
            <div className="box" style={{ backgroundImage: `url(${MEIMAID_SEA_BACKGROUND})`, backgroundSize: 'cover', minHeight: '250px', padding: '20px' }}>
                <div className="inner" style={{ textAlign: 'center' }}>
                    <marquee><img src={require('../resources/games/mermaid_left.gif')}
                        style={{ width: 'auto', alignSelf: 'center' }} /></marquee>
                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                            <a class="tent" style={{ backgroundImage: `url(${require("../resources/games/mermaidvstrash.gif")})`, justifySelf: 'center' }}
                                href="https://floralunit.itch.io/mermaid-vs-trash" target="_blank" rel="noreferrer"></a>
                            <a class="tent" style={{ backgroundImage: `url(${require("../resources/games/diskodjab.gif")})`, justifySelf: 'center' }}
                                href="https://vk.com/app51640339_283385573" target="_blank" rel="noreferrer"></a>
                        </div>

                        <div style={{ textAlign: 'center', fontFamily: 'LCD5', display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: '0 32px', padding: 0 }}>
                            <div>
                                <div style={{ color: '#002c3d', fontWeight: 'bold', textAlign: 'center', fontSize: '18px' }}> click on game icon to play!</div>
                                <div style={{ color: '#002c3d', fontWeight: 'bold', textAlign: 'center', fontSize: '15px' }}> check my friend's art in tg <a href="https://t.me/klopovnik6996" target="_blank" rel="noreferrer">priton+priklopovnik</a>
                                </div>
                            </div>
                            <div style={{ justifyContent: 'center', display: 'flex' }}>
                                <img src={require('../resources/games/klop.png')}
                                    style={{ height: '55px', width: 'auto', alignSelf: 'center' }}></img>
                            </div>
                        </div>
                    </div>

                    <marquee direction='right'><img src={require('../resources/games/mermaid_right.gif')}
                        style={{ width: 'auto', alignSelf: 'center' }} /></marquee>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={require('../resources/pixels/169621.png')}
                    style={{ height: '35px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                <img src={require('../resources/pixels/mermaid-stardew.png')}
                    style={{ height: '85px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                <img src={require('../resources/pixels/169621.png')}
                    style={{ height: '35px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
            </div>
            <div className="box-f-kado">
                <div className="box-top-f-kado">
                    <div className="u01-f-kado"></div>
                </div>
                <div className="box-center-f-kado">
                    <div className="box-inner-f-kado" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.4em', fontWeight: 'bold' }}>
                        My favourite games
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={require('../resources/tabs_dividers_pixels/e13-apple-line.gif')}
                                style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }}
                                title='https://foollovers.com' />
                        </div>
                    </div>
                </div>
                <div className="box-bottom-f-kado">
                    <div className="s01-f-kado"></div>
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/stardewvalley.webp")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Stardew Valley (2001)</div>
                        <span class="dat">A farming simulation game where you can grow crops, raise animals, mine, fish, and build relationships in a charming village.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/primeworld.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Prime World (2014)</div>
                        <span class="dat">A MOBA game with a unique blend of RPG elements and strategic gameplay.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/vallhalla.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">VA-11 HALL-A (2016)</div>
                        <span class="dat">A cyberpunk bartending game where you mix drinks and listen to customers' stories in a dystopian future.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/bioshokinfinity.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Bioshock Infinite (2013)</div>
                        <span class="dat">A first-person shooter set in a stunning floating city with a deep narrative and unique gameplay mechanics.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/witcher3.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">The Witcher 3 (2015)</div>
                        <span class="dat">An open-world RPG where you play as Geralt of Rivia, a monster hunter, on a quest to find his adopted daughter.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/walkingdead.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">The Walking Dead (2012)</div>
                        <span class="dat">An episodic adventure game based on the comic series where your choices shape the story and relationships.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/falloutnewvegas.png")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Fallout New Vegas (2010)</div>
                        <span class="dat">An action RPG set in a post-apocalyptic world where you navigate factions and make choices that impact the story.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/mortalkombat.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Mortal Kombat 9 (2011)</div>
                        <span class="dat">A fighting game known for its brutal combat, iconic characters, and intricate combos.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/civilization.webp")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Sid Meier's Civilization V (2010)</div>
                        <span class="dat">A turn-based strategy game where you build an empire, manage resources, research technologies, and compete against other civilizations.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/sims3.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">The Sims 3 (2009)</div>
                        <span class="dat">A life simulation game where you create and control virtual people in various scenarios and settings</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/bitardia.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Bitardia (2015)</div>
                        <span class="dat">A satirical game that parodies Russian internet culture and memes in a humorous way.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/machinarium.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Machinarium (2009)</div>
                        <span class="dat">A point-and-click adventure game with a charming hand-drawn art style and clever puzzles.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/geometrydash.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Geometry Dash (2013)</div>
                        <span class="dat">A rhythm-based platformer where you jump and fly through challenging levels with catchy music.</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/left4dead2.webp")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Left 4 Dead 2 (2009)</div>
                        <span class="dat">A cooperative zombie shooter where players team up to survive hordes of infected in various campaigns</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/hotlinemiami.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Hotline Miami  (2012)</div>
                        <span class="dat">A top-down action game with fast-paced combat, neon visuals, and a retro soundtrack</span>
                    </div></div>
                </div>
                <div class="tent" style={{ backgroundImage: `url(${require("../resources/games/lifeisstrange.jpg")})` }}>
                    <div class="hhover"><div class="htent">
                        <div class="hti">Life is Strange (2015)</div>
                        <span class="dat">An episodic graphic adventure game with a focus on storytelling, time manipulation, and moral choices that affect the narrative</span>
                    </div></div>
                </div>
            </div>
            <marquee>
                <img src={require('../resources/pixels/Junimo.gif')}
                    style={{ height: '45px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                <img src={require('../resources/pixels/Junimo.gif')}
                    style={{ height: '45px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                <img src={require('../resources/pixels/Junimo.gif')}
                    style={{ height: '45px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
            </marquee>
            <div className="box-f-kado">
                <div className="box-top-f-kado">
                    <div className="u01-f-kado"></div>
                </div>
                <div className="box-center-f-kado">
                    <div className="box-inner-f-kado" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.4em', fontWeight: 'bold' }}>
                        <img src={require('../resources/pixels/White_Chicken.png')}
                            style={{ height: '25px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        &nbsp;My farms in Stardew Valley&nbsp;
                        <img src={require('../resources/pixels/White_Chicken.png')}
                            style={{ height: '25px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                </div>
                <div className="box-bottom-f-kado">
                    <div className="s01-f-kado"></div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QaLanuCzT_w?si=txm-aaDnbLAyMo23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XwWWmnmFhO8?si=o0lAo4tyVczaGrXW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}
