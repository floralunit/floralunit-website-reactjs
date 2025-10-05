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
                                    <NavLink to="cerulean">Cerulean</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="everyone-asked-about-you">Everyone Asked About You</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Kolya (x)</NavLink>
                                </td>
                            </tr>
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink >Lowercase (x)</NavLink>
                            </td>
                        </tr> */}
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Mineral (x)</NavLink>
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
                                    <NavLink >Sunny Day Real Estate (x)</NavLink>
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
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink >The Khayembii Communiqué (x)</NavLink>
                            </td>
                        </tr> */}
                            <tr>
                                <td className="tdLow">
                                    <NavLink >The Spirit of Versailles (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Yaphet Kotto (x)</NavLink>
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
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink >Alinah (x)</NavLink>
                            </td>
                        </tr> */}
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="asthenia">Asthenia</NavLink>
                                </td>
                            </tr>
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink >Bright Lights Always Turn Off (x)</NavLink>
                            </td>
                        </tr> */}
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Burial Etiquette (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Catalyst... (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="daitro">Daïtro</NavLink>
                                </td>
                            </tr>
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink >Foxtails (x)</NavLink>
                            </td>
                        </tr> */}
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Øjne (x)</NavLink>
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
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink >The Khayembii Communiqué (x)</NavLink>
                            </td>
                        </tr> */}
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
                                    <NavLink >Algernon Cadwallader (x)</NavLink>
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
                                    <NavLink >forfeit (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >I Hate Sex (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >La Dispute (x)</NavLink>
                                </td>
                            </tr>
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink >Marietta (x)</NavLink>
                            </td>
                        </tr> */}
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
                                    <NavLink >Saetia (x)</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink to="the-rabbit-theory">The Rabbit Theory</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="tdLow">
                                    <NavLink >Thursday (x)</NavLink>
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
                            {/* <tr>
                            <td className="tdLow" style={{ fontSize:'9px'}}>
                                <NavLink >Advertising On The Channel Of Dreams (x)</NavLink>
                            </td>
                        </tr> */}
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink to="kashtanka">Atomique</NavLink> в состояние птиц
                            </td>
                        </tr> */}
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
                                    <NavLink to="imyaneproiznosimo">имянепроизносимо</NavLink>
                                </td>
                            </tr>
                            {/* <tr>
                            <td className="tdLow">
                                <NavLink to="kashtanka">Отречение Петра</NavLink>
                            </td>
                        </tr> */}
                            <tr>
                                <td className="tdLow">
                                    <NavLink >состояние птиц (x)</NavLink>
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