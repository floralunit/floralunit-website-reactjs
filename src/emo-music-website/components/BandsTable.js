import React, { useEffect, useState } from 'react'
import '../styles/table.css';
import { NavLink } from "react-router-dom";

export function BandsTable() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        require('../resources/1075635dgyffglujq.gif'),
        require('../resources/2262901rwibupnb4y.jpg')
    ];

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
                <table>
                    <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>emo 90s</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to={"bob-tilton"}>Bob Tilton</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="everyone-asked-about-you">Everyone Asked About You</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="i-hate-myself">I Hate Myself</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Mineral (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Neil Perry (x)</NavLink>
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
                        <tr>
                            <td className="tdLow">
                                <NavLink >Yaphet Kotto (x)</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>midwest emo</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="american-football">American Football</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="camping-in-alaska">Camping in Alaska</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Oakwood (x)</NavLink>
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
                            <td className="tdLow">
                                <NavLink >это (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Bird Bone (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="eora">EORA</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="botanichesky-sad">botanichesky sad</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="kashtanka">Kashtanka</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>skramz</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="asthenia">Asthenia</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="daitro">Daïtro</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to="love-lost-but-not-forgotten">Love Lost But Not Forgotten</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Orchid (x)</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>other</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Ensslin (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >La Dispute (x)</NavLink>
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
                    </tbody>
                </table>
                <span style={{ fontSize: '12px', fontFamily: 'Arial', color: '#C80018' }}><span style={{ fontWeight: 'bold' }}>Last upd: 05.08.24</span> - добавлены American Football, Camping In Alaska, asthenia, botanichesky sad, EORA, The Rabbit Theory, Sleeping For Sunrise</span>
                <br /><br />
                <div className="image-container">
                    <img src={images[currentImageIndex]} alt="Current Image" />
                    <br /><br />
                </div>
            </div>
        </div>
    );
}
