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
                                <NavLink >Everyone Asked About You</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >I Hate Myself</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Neil Perry</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Strictly Ballroom</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Sunny Day Real Estate</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Yaphet Kotto</NavLink>
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
                                <NavLink >American Football</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Camping in Alaska</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >I Hate Sex</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Old Gray</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Reasons</NavLink>
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
                                <NavLink >30 дней февраля</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >6000000000себя</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Bird Bone</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >botanichesky sad</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Kashtanka</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >EORA</NavLink>
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
                                <NavLink >Asthenia</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Orchid</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Daïtro</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink >Love Lost But Not Forgotten</NavLink>
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
                <span style={{ fontSize: '12px', fontFamily: 'Arial', color: '#8a0303' }}>Last upd: 09.07.24</span>
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
