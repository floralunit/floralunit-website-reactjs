import "../styles/lace-frame.css"

import React, { useEffect, useState } from 'react'

export function NotFoundPage() {
    document.documentElement.style.removeProperty('--box-header-color');
    document.documentElement.style.removeProperty('--main-background');
    document.documentElement.style.removeProperty('--box-background');
    document.documentElement.style.removeProperty('--box-text-color');
    document.documentElement.style.removeProperty('--main-cursor');
    document.documentElement.style.removeProperty('--pointer-cursor');
    return (
        <div className='main' style={{ maxWidth: "650px", fontSize: 'smaller' }}>
            <div className='box'>
                {/*                <div id='section-1' className="box-header">
                    <img src={require('../../common/my-button/tears-ico-white1.png')}
                         style={{height: '25px', width: 'auto', padding: '5px 0 0 0'}}/>
                </div>*/}
                <div className='inner'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../../main-website/resources/tabs_dividers_pixels/gray-flower-line.gif')}
                            style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                    <div className="box08">
                        <div className="box-top">
                            <div className="u01"></div>
                        </div>
                        <div className="box-center">
                            <div className="box-inner" style={{textAlign:'center', fontWeight:'bold'}}>
                                Если ты перешел по этой ссылке и видишь это, то значит страница еще в планах/в работе и еще не готова! 
                                <br/><br/>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
                                    <img src={require('./kuda.jpg')}
                                        style={{ width: '200px', margin: '0 auto' }} />
                                </div>
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="s01"></div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../../main-website/resources/tabs_dividers_pixels/gray-flower-line.gif')}
                            style={{ height: '15px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
