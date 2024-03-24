import "../MainWebsite.css"
import "../../common/styles/photos.css"
import "../../common/styles/lace-frame.css"

import React, { useEffect, useState } from 'react'

export function InfoPage() {
    document.documentElement.style.removeProperty('--box-header-color');
    document.documentElement.style.removeProperty('--main-background');
    document.documentElement.style.removeProperty('--box-background');
    document.documentElement.style.removeProperty('--box-text-color');
    return (
        <div className='main' style={{ maxWidth: "650px", fontSize: 'smaller' }}>
            <div className='box'>
                {/*                <div id='section-1' className="box-header">
                    <img src={require('../../common/my-button/tears-ico-white1.png')}
                         style={{height: '25px', width: 'auto', padding: '5px 0 0 0'}}/>
                </div>*/}
                <div className='inner'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../resources/tabs_dividers_pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/tabs_dividers_pixels/l06-ribbon-line.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/tabs_dividers_pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner">
                                <p>Hi, my name is Anya and welcome to my website!</p>
                                <p>This place is a reflection of my melancholy world and I invite you to come in.</p>
                                <br />
                                <p>I thought that the individuality of web died in the 00s, until I found neocities and
                                    lots of cool
                                    sites, that inspired me to create my own page too.
                                    This place is my salvation from depression and sad reality I live in.</p>
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../resources/tabs_dividers_pixels/gray-flower-line.gif')}
                            style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner">
                                <div style={{ direction: 'column', display: 'flex', flexDirection: 'column', float: "right", width: '40%' }}>
                                    <img src={require('../resources/images/we.png')}
                                        style={{ width: '100%', margin: '15px 15px 0px 0px' }} />
                                    <img src={require('../../common/my-button/big-icon.gif')}
                                        style={{ width: '40px', margin: '0 auto' }} />
                                </div>
                                <p>Some things I like:</p>
                                <ul>
                                    <li>programming</li>
                                    <li>collecting flowers for my herbarium</li>
                                    <li>music!!!</li>
                                    <li>taking pictures</li>
                                    <li>film and old digital cameras</li>
                                    <li>audio cassettes and vinyl</li>
                                    <li>90s and 00s stuff</li>
                                    <li>mountains and fog</li>
                                    <li>soviet architecture</li>
                                    <li>coffee</li>
                                    <li>witch and goth aesthetics, but I also enjoy cute things</li>
                                    <li>my froggies and cats</li>
                                </ul>

                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../resources/tabs_dividers_pixels/gray-flower-line.gif')}
                            style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner">
                                <p>Some pages are in Russian and some in English, I'm sorry...</p>
                                <p>Enjoy your surfing!</p>
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../resources/tabs_dividers_pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/tabs_dividers_pixels/l06-ribbon-line.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/tabs_dividers_pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                    {/* <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={require('../../common/my-button/floralunit-button.gif')}
                             style={{width: '88px', height: '31px'}}/>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
