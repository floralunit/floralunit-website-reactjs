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
                                <NavLink >Neil Perry (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Strictly Ballroom (x)</NavLink>
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
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>midwest emo</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >American Football (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Camping in Alaska (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >I Hate Sex (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Old Gray (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Reasons (x)</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
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
                                <NavLink >Bird Bone (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >botanichesky sad (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Kashtanka (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >EORA (x)</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>skramz</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Asthenia (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Orchid (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Daïtro (x)</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Love Lost But Not Forgotten (x)</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>other</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Reasons</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"bob-tilton"}>Oakwood</NavLink>
                    </td>
                </tr>
                </tbody>
            </table> */}
                <span style={{ fontSize: '12px', fontFamily: 'Arial', color: '#C80018' }}><span style={{fontWeight:'bold'}}>Last upd: 10.07.24</span> - добавлены I Hate Myself, Everyone Asked About You, 30 дней февраля, 6000000000себя</span>
                <br /><br />
                <div className="image-container">
                    <img src={images[currentImageIndex]} alt="Current Image" />
                    <br /><br />
                </div>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <img src={require('../../common/my-button/floralunit-button.gif')}
                        style={{ width: '88px', height: '31px', margin: '0 auto' }} alt='' />

                    <a href='https://floralunit.vercel.app/' target="_blank" rel="noreferrer"><div className='witch-link-small'>floralunit world <br /><pupa style={{ fontFamily: 'arial' }}> 𓆩♡𓆪</pupa></div></a>
                </div>
            </div>
        </div>
    );
}
