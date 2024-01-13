import "../MainWebsite.css"
import "../../common/styles/photos.css"
import "../../common/styles/lace-frame.css"

import React, { useEffect, useState } from 'react'

export function GamesPage() {
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
                        <img src={require('../resources/pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/pixels/l06-ribbon-line.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                    <img href='https://img.itch.zone/aW1nLzEyMjM3NjkxLnBuZw==/315x250%23c/Eii6KK.png'></img>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={require('../resources/pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/pixels/l06-ribbon-line.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                        <img src={require('../resources/pixels/lb06.gif')}
                            style={{ height: '36px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
