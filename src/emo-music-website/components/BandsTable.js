import { useEffect, useState, useMemo } from 'react'
import '../styles/table.css';
import { NavLink } from "react-router-dom";

export function BandsTable() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Массив images стабилен между перерисовками
    const images = useMemo(() => [
        require('../resources/1075635dgyffglujq.gif'),
        require('../resources/2262901rwibupnb4y.jpg')
    ], []); // Пустой массив зависимостей - массив создается один раз

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="table-view" style={{ margin: '0 7px' }}>
            <div className="table">
                <br />
                <br />
                <img src={require('../resources/1075632lcq9x9tnqv.jpg')} alt={''} style={{ margin: '0 auto', width: '100%', textAlign: 'center' }} />
                <div className="scroll-container">
                    <table>
                        <tbody>
                            <tr>
                                <td className="tdUp">
                                    <p align="center"><b>emo 90s</b></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="american-football">American Football </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="bob-tilton">Bob Tilton</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="cerulean">Cerulean / Pilots In Paris</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="everyone-asked-about-you">Everyone Asked About You</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Fugazi (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="kolya">Kolya</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="lowercase">Lowercase</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="mineral">Mineral</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Psara (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="sleeping-for-sunrise">Sleeping for Sunrise</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="strictly-ballroom">Strictly Ballroom</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="sunny-day-real-estate">Sunny Day Real Estate</NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tdUp">
                                    <p align="center"><b>skramz 90s</b></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="i-hate-myself">I Hate Myself</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="i-have-dreams">I Have Dreams</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="love-lost-but-not-forgotten">Love Lost But Not Forgotten </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="neil-perry">Neil Perry</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="orchid">Orchid</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="saetia">Saetia</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >The Khayembii Communiqué (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="the-spirit-of-versailles">The Spirit of Versailles</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="yaphet-kotto">Yaphet Kotto</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="you-and-i">You And I</NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tdUp">
                                    <p align="center"><b>skramz</b></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Alinah (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="asthenia">Asthenia</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="bright-lights-always-turn-off">Bright Lights Always Turn Off</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="burial-etiquette">Burial Etiquette</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="catalyst">catalyst...</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="daitro">Daïtro</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="foxtails">Foxtails</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow" style={{ fontSize: '8px' }}>
                                    <NavLink >iwrotehaikusaboutcannibalisminyouryearbook (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Øjne (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="raein">Raein</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Sed Non Satiata (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="seahorsechoke">seahorsechoke</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow" style={{ fontSize: '9px' }}>
                                    <NavLink to="septemberistheonlytimeidontthinkofyou">septemberistheonlytimeidontthinkofyou</NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tdUp">
                                    <p align="center"><b>midwest/other emo</b></p></td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="algernon-cadwallader">Algernon Cadwallader</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="camping-in-alaska">Camping in Alaska</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Ensslin (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Fine Before You Came (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="forfeit">forfeit</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Funeral for a Friend  (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="i-hate-sex">I Hate Sex</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="la-dispute">La Dispute</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Marietta (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="merchant-ships">Merchant Ships</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="oakwood">Oakwood</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="old-gray">Old Gray </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="reasons">Reasons</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="the-rabbit-theory">The Rabbit Theory</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="thursday">Thursday</NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tdUp">
                                    <p align="center"><b>russian emo</b></p></td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="30-dnej-fevralya">30 дней февраля</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="6000000000sebya">6000000000себя</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow" style={{ fontSize: '9px' }}>
                                    <NavLink >Advertising On The Channel Of Dreams (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="bird-bone">Bird Bone</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="botanichesky-sad">botanichesky sad</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="eora">EORA</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="kashtanka">Kashtanka</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >veresk (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="imyaneproiznosimo">имянепроизносимо</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="otrechenie-petra">Отречение Петра</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="sostoyanie-ptic">состояние птиц</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="eto">это</NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            <div className="image-container" >
                <img src={images[currentImageIndex]} alt="Rotating gallery of emo" />
                <br /><br />
            </div>
        </div>
    );
}